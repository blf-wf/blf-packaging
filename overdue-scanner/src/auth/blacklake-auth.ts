import { sha3_224 } from 'js-sha3';
import axios from 'axios';
import { logger } from '../utils/logger';
import { retry } from '../utils/retry';
import { env } from '../config';

let cachedToken: { jwt: string; expiresAt: number } | null = null;

export async function login(): Promise<string> {
  if (cachedToken && Date.now() < cachedToken.expiresAt - 60_000) {
    return cachedToken.jwt;
  }

  const passwordHash = sha3_224(env.BLACKLAKE_PASSWORD);

  const response = await retry(
    async () => {
      const res = await axios.post(
        `${env.BLACKLAKE_BASE_URL}/api/alien/v1/user/login`,
        {
          phone: env.BLACKLAKE_PHONE,
          password: passwordHash,
          orgCode: env.BLACKLAKE_ORG_CODE,
        },
        { timeout: 15_000 }
      );
      return res;
    },
    { name: 'blacklake-login' }
  );

  const jwt: string = response.data?.data;
  if (!jwt) {
    throw new Error(`Black Lake login failed: ${JSON.stringify(response.data)}`);
  }

  // JWT exp claim is in seconds; if not present, default to 24h
  const payload = JSON.parse(Buffer.from(jwt.split('.')[1], 'base64').toString());
  const expiresInSeconds = payload.exp ? payload.exp - Date.now() / 1000 : 86400;
  cachedToken = {
    jwt,
    expiresAt: Date.now() + expiresInSeconds * 1000,
  };

  logger.info('Black Lake login successful');
  return jwt;
}

export function clearTokenCache(): void {
  cachedToken = null;
}
