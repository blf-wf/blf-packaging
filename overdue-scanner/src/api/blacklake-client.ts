import axios, { AxiosInstance } from 'axios';
import { login, clearTokenCache } from '../auth/blacklake-auth';
import { logger } from '../utils/logger';
import { env } from '../config';

let client: AxiosInstance | null = null;

export async function getClient(): Promise<AxiosInstance> {
  const token = await login();

  if (!client) {
    client = axios.create({
      baseURL: env.BLACKLAKE_BASE_URL,
      timeout: 30_000,
      headers: {
        'Content-Type': 'application/json',
        'X-CLIENT': 'lite-web',
        'X-AUTH': token,
      },
    });

    client.interceptors.response.use(
      response => response,
      async error => {
        if (error.response?.status === 401) {
          logger.warn('Black Lake 401 — retrying with fresh token');
          clearTokenCache();
          const newToken = await login();
          error.config.headers['X-AUTH'] = newToken;
          return axios(error.config);
        }
        return Promise.reject(error);
      }
    );
  }

  // Update token header for each call
  client.defaults.headers['X-AUTH'] = token;
  return client;
}

export function resetClient(): void {
  client = null;
  clearTokenCache();
}
