import { getClient } from '../api/blacklake-client';
import { parseTaskList, filterOverdue, groupByResponsible } from './parser';
import { isNotifiedToday } from '../utils/state';
import { lookupWecomId, isSpecialName } from '../mappers/user-mapper';
import { logger } from '../utils/logger';
import {
  OverdueProcess,
  NotificationGroup,
  UnmappedGroup,
  ScanResult,
} from '../models/notification';

export async function scanOverdue(): Promise<ScanResult> {
  logger.info('Starting overdue scan');

  // 1. Query all non-completed tasks (processStatus 0=未开始, 10=执行中)
  const client = await getClient();
  const response = await client.post(
    '/api/dytin/bizDataSearch/queryTaskListBySearchCondition',
    {
      fieldQueryValues: [
        {
          fieldName: 'processStatus',
          queryOperator: 'IN',
          fieldValue: ['0', '10'],
        },
      ],
      page: { pageNum: 1, pageSize: 100 },
      orders: [],
    }
  );

  // 2. Parse and filter overdue
  const allTasks = parseTaskList(response.data);
  logger.info({ total: allTasks.length }, 'Tasks fetched');

  const overdue = filterOverdue(allTasks);
  logger.info({ overdue: overdue.length }, 'Overdue processes filtered');

  // 3. Dedup: skip already-notified tasks
  const fresh: OverdueProcess[] = [];
  for (const proc of overdue) {
    if (!(await isNotifiedToday(proc.taskId))) {
      fresh.push(proc);
    }
  }
  logger.info({ fresh: fresh.length, skipped: overdue.length - fresh.length }, 'Dedup complete');

  // 4. Group by responsible person
  const byName = groupByResponsible(fresh);

  // 5. Separate mapped vs unmapped
  const notified: NotificationGroup[] = [];
  const unmapped: UnmappedGroup[] = [];

  for (const [name, processes] of byName) {
    if (isSpecialName(name)) {
      logger.warn({ name, count: processes.length }, 'Skipping special name');
      continue;
    }

    const wecomId = lookupWecomId(name);
    if (wecomId) {
      notified.push({ wecomUserId: wecomId, blacklakeName: name, processes });
    } else {
      unmapped.push({ blacklakeName: name, processes });
      logger.warn({ name, count: processes.length }, 'Unmapped user — will appear in summary only');
    }
  }

  const date = new Date().toISOString().slice(0, 10);

  return {
    notified,
    unmapped,
    totalOverdue: fresh.length,
    date,
  };
}
