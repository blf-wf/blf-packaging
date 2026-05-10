import { schedule, ScheduledTask } from 'node-cron';
import { logger } from './logger';

let task: ScheduledTask | null = null;

export function startScheduler(fn: () => Promise<void>): void {
  if (task) {
    logger.warn('Scheduler already running');
    return;
  }

  // 每日 08:00 执行
  task = schedule('0 8 * * *', async () => {
    logger.info('Cron tick — starting daily scan');
    try {
      await fn();
    } catch (error) {
      logger.error({ err: error }, 'Daily scan crashed');
    }
  });

  logger.info('Scheduler started (daily 08:00)');
}

export function stopScheduler(): void {
  if (task) {
    task.stop();
    task = null;
    logger.info('Scheduler stopped');
  }
}
