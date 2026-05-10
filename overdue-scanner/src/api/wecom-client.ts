import axios, { AxiosInstance } from 'axios';
import { getAccessToken, clearTokenCache } from '../auth/wecom-auth';
import { logger } from '../utils/logger';
import { retry } from '../utils/retry';

let client: AxiosInstance | null = null;

export async function getClient(): Promise<AxiosInstance> {
  const token = await getAccessToken();

  if (!client) {
    client = axios.create({
      baseURL: 'https://qyapi.weixin.qq.com',
      timeout: 10_000,
    });

    client.interceptors.response.use(
      response => response,
      async error => {
        const errcode = error.response?.data?.errcode;
        if (errcode === 40001 || errcode === 42001) {
          logger.warn('WeCom token expired — refreshing');
          clearTokenCache();
          const newToken = await getAccessToken();
          error.config.params = { ...error.config.params, access_token: newToken };
          return axios(error.config);
        }
        return Promise.reject(error);
      }
    );
  }

  return client;
}

export async function sendMarkdown(
  userId: string,
  content: string
): Promise<{ success: boolean; errmsg?: string }> {
  try {
    const c = await getClient();
    const token = await getAccessToken();

    await retry(
      async () => {
        const res = await c.post('/cgi-bin/message/send', {
          touser: userId,
          msgtype: 'markdown',
          agentid: parseInt(process.env.WECOM_AGENT_ID || '0', 10),
          markdown: { content },
        }, {
          params: { access_token: token },
        });

        if (res.data.errcode !== 0) {
          throw new Error(`WeCom send failed: ${res.data.errcode} ${res.data.errmsg}`);
        }
        return res;
      },
      { name: `wecom-send-${userId}`, baseDelayMs: 2000 }
    );

    logger.info({ userId }, 'WeCom message sent');
    return { success: true };
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    logger.error({ userId, error: msg }, 'WeCom send failed');
    return { success: false, errmsg: msg };
  }
}

export async function sendMarkdownToChat(
  chatId: string,
  content: string
): Promise<{ success: boolean; errmsg?: string }> {
  try {
    const c = await getClient();
    const token = await getAccessToken();

    await retry(
      async () => {
        const res = await c.post('/cgi-bin/appchat/send', {
          chatid: chatId,
          msgtype: 'markdown',
          markdown: { content },
        }, {
          params: { access_token: token },
        });

        if (res.data.errcode !== 0) {
          throw new Error(`WeCom chat send failed: ${res.data.errcode} ${res.data.errmsg}`);
        }
        return res;
      },
      { name: 'wecom-send-chat' }
    );

    logger.info({ chatId }, 'WeCom group message sent');
    return { success: true };
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    logger.error({ chatId, error: msg }, 'WeCom group send failed');
    return { success: false, errmsg: msg };
  }
}
