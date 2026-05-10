import { z } from 'zod';
import { config } from 'dotenv';
import { resolve } from 'path';

config({ path: resolve(__dirname, '../../.env') });

const envSchema = z.object({
  BLACKLAKE_PHONE: z.string().min(1),
  BLACKLAKE_PASSWORD: z.string().min(1),
  BLACKLAKE_ORG_CODE: z.string().min(1),
  BLACKLAKE_BASE_URL: z.string().url().default('https://liteweb.blacklake.cn'),

  WECOM_CORP_ID: z.string().min(1),
  WECOM_AGENT_ID: z.string().min(1),
  WECOM_SECRET: z.string().min(1),
  WECOM_MGMT_CHAT_ID: z.string().min(1),

  RUN_MODE: z.enum(['daemon', 'run-now', 'dry-run']).default('daemon'),
  LOG_LEVEL: z.enum(['debug', 'info', 'warn', 'error']).default('info'),
});

export type EnvConfig = z.infer<typeof envSchema>;

function loadConfig(): EnvConfig {
  const result = envSchema.safeParse(process.env);
  if (!result.success) {
    console.error('Invalid environment configuration:');
    for (const issue of result.error.issues) {
      console.error(`  - ${issue.path.join('.')}: ${issue.message}`);
    }
    process.exit(1);
  }
  return result.data;
}

export const env = loadConfig();
