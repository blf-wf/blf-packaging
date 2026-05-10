import { sendMarkdown, sendMarkdownToChat } from '../api/wecom-client';
import { buildPersonalMessage, buildSummaryMessage } from './message-template';
import { markNotified, isBootstrapped, markBootstrapped, pruneOldEntries } from '../utils/state';
import { logger } from '../utils/logger';
import { ScanResult, NotificationGroup } from '../models/notification';
import { env } from '../config';

interface NotifyOptions {
  dryRun: boolean;
}

async function sendToOne(
  group: NotificationGroup,
  date: string,
  dryRun: boolean
): Promise<boolean> {
  const content = buildPersonalMessage(group.processes, date);

  if (dryRun) {
    logger.info({ to: group.wecomUserId, name: group.blacklakeName, count: group.processes.length }, '[dry-run] Would send personal notification');
    return true;
  }

  const result = await sendMarkdown(group.wecomUserId, content);
  if (!result.success) {
    logger.error({ userId: group.wecomUserId, error: result.errmsg }, 'Personal notification failed');
    return false;
  }

  // Per review decision: write state immediately after each successful send
  for (const proc of group.processes) {
    await markNotified(proc.taskId);
  }

  return true;
}

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function sendNotifications(
  result: ScanResult,
  options: NotifyOptions
): Promise<void> {
  const { dryRun } = options;
  const isFirstRun = !(await isBootstrapped());

  // Bootstrap mode: first run only sends management summary, not personal notifications
  if (isFirstRun) {
    logger.info('Bootstrap mode — sending only management summary');
    const summary = buildSummaryMessage(result);

    if (dryRun) {
      logger.info('[dry-run] Would send bootstrap summary to management group');
    } else {
      const res = await sendMarkdownToChat(env.WECOM_MGMT_CHAT_ID, summary);
      if (res.success) {
        await markBootstrapped();
        logger.info('Bootstrap summary sent');
      } else {
        logger.error({ error: res.errmsg }, 'Bootstrap summary failed');
      }
    }
    return;
  }

  // Send personal notifications with 1s interval to avoid rate limiting
  const failed: string[] = [];

  for (const group of result.notified) {
    const ok = await sendToOne(group, result.date, dryRun);
    if (!ok) {
      failed.push(group.blacklakeName);
    }
    // 1s interval between sends (skip in dry-run)
    if (!dryRun && result.notified.indexOf(group) < result.notified.length - 1) {
      await sleep(1000);
    }
  }

  if (failed.length > 0) {
    logger.warn({ failed }, 'Some personal notifications failed — will retry tomorrow');
  }

  // Always send management group summary (serves as heartbeat)
  const summary = buildSummaryMessage(result);

  if (dryRun) {
    logger.info('[dry-run] Would send management summary');
    logger.info(summary);
  } else {
    const res = await sendMarkdownToChat(env.WECOM_MGMT_CHAT_ID, summary);
    if (res.success) {
      logger.info({ overdue: result.totalOverdue, notified: result.notified.length, unmapped: result.unmapped.length }, 'Management summary sent');
    } else {
      logger.error({ error: res.errmsg }, 'Management summary failed');
    }
  }

  // Clean up old state entries
  await pruneOldEntries(7);
}

export function logDryRunOutput(result: ScanResult): void {
  for (const group of result.notified) {
    const content = buildPersonalMessage(group.processes, result.date);
    logger.info({ to: group.wecomUserId }, `[dry-run] Personal message:\n${content}`);
  }

  const summary = buildSummaryMessage(result);
  logger.info(`[dry-run] Management summary:\n${summary}`);
}
