import { Task, TaskOutputObject } from '../models/task';
import { OverdueProcess } from '../models/notification';
import { logger } from '../utils/logger';

export function parseTaskList(responseData: unknown): Task[] {
  const data = responseData as { data?: { data?: Task[] } };
  if (!data?.data?.data) {
    logger.warn('Unexpected API response structure');
    return [];
  }
  return data.data.data;
}

export function filterOverdue(tasks: Task[]): OverdueProcess[] {
  return tasks
    .filter(t => t.expiredDayCount > 0)
    .map(t => ({
      taskId: t.id,
      projectCode: t.projectCode,
      projectId: t.projectId,
      productName: t.productName,
      processName: t.processName,
      expiredDayCount: t.expiredDayCount,
      outputRate: t.outputRate,
      processEndTime: t.processEndTime,
      processEndRealTime: t.processEndRealTime,
      responsibleNames: t.outputObject.map((o: TaskOutputObject) => o.name),
    }));
}

export function groupByResponsible(
  processes: OverdueProcess[]
): Map<string, OverdueProcess[]> {
  const groups = new Map<string, OverdueProcess[]>();

  for (const proc of processes) {
    for (const name of proc.responsibleNames) {
      const existing = groups.get(name) || [];
      existing.push(proc);
      groups.set(name, existing);
    }
  }

  return groups;
}
