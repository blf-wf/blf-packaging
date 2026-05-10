import axios from 'axios';
import { logger } from '../utils/logger';
import { env } from '../config';

let cachedToken: { token: string; expiresAt: number } | null = null;

export async function getAccessToken(): Promise<string> {
  if (cachedToken && Date.now() < cachedToken.expiresAt - 300_000) {
    return cachedToken.token;
  }

  const response = await axios.get(
    'https://qyapi.weixin.qq.com/cgi-bin/gettoken',
    {
      params: {
        corpid: env.WECOM_CORP_ID,
        corpsecret: env.WECOM_SECRET,
      },
      timeout: 10_000,
    }
  );

  const { access_token, expires_in, errcode, errmsg } = response.data;
  if (errcode !== 0) {
    throw new Error(`WeCom gettoken failed: ${errcode} ${errmsg}`);
  }

  cachedToken = {
    token: access_token,
    expiresAt: Date.now() + expires_in * 1000,
  };

  logger.info('WeCom access token refreshed');
  return access_token;
}

export function clearTokenCache(): void {
  cachedToken = null;
}
