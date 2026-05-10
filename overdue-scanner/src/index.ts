import { env } from './config';
import { scanOverdue } from './scanners/overdue-scanner';
import { sendNotifications, logDryRunOutput } from './notifiers/wecom-notifier';
import { startScheduler } from './utils/cron';
import { logger } from './utils/logger';

function resolveMode(): 'daemon' | 'run-now' | 'dry-run' {
  const args = process.argv.slice(2);
  if (args.includes('--run-now')) return 'run-now';
  if (args.includes('--dry-run')) return 'dry-run';
  if (args.includes('--daemon')) return 'daemon';
  return env.RUN_MODE;
}

async function runOnce(dryRun: boolean): Promise<void> {
  logger.info({ dryRun }, 'Scan starting');

  const result = await scanOverdue();

  if (dryRun) {
    logDryRunOutput(result);
    return;
  }

  await sendNotifications(result, { dryRun: false });
  logger.info('Scan complete');
}

async function main(): Promise<void> {
  const mode = resolveMode();
  logger.info({ mode }, 'Overdue scanner booting');

  switch (mode) {
    case 'dry-run':
      await runOnce(true);
      break;

    case 'run-now':
      await runOnce(false);
      break;

    case 'daemon':
      // Run once at startup, then schedule daily
      await runOnce(false);
      startScheduler(() => runOnce(false));
      break;
  }
}

main().catch(err => {
  logger.error({ err }, 'Fatal error');
  process.exit(1);
});
