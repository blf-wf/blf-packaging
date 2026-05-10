import { JSONFilePreset } from 'lowdb/node';
import { logger } from './logger';

interface StateSchema {
  notifiedTaskIds: Record<string, boolean>;  // "YYYY-MM-DD:taskId" → true
  bootstrapped: boolean;
  lastRunAt: string | null;
}

const defaultState: StateSchema = {
  notifiedTaskIds: {},
  bootstrapped: false,
  lastRunAt: null,
};

let db: Awaited<ReturnType<typeof JSONFilePreset<StateSchema>>> | null = null;

export async function getState() {
  if (!db) {
    try {
      db = await JSONFilePreset<StateSchema>('data/state.json', defaultState);
    } catch {
      logger.error('Failed to read state.json — resetting to empty state');
      db = await JSONFilePreset<StateSchema>('data/state.json', defaultState);
      await db.write();
    }
  }
  return db;
}

export function todayKey(taskId: number): string {
  const today = new Date().toISOString().slice(0, 10);
  return `${today}:${taskId}`;
}

export async function isNotifiedToday(taskId: number): Promise<boolean> {
  const state = await getState();
  return !!state.data.notifiedTaskIds[todayKey(taskId)];
}

export async function markNotified(taskId: number): Promise<void> {
  const state = await getState();
  state.data.notifiedTaskIds[todayKey(taskId)] = true;
  await state.write();
}

export async function isBootstrapped(): Promise<boolean> {
  const state = await getState();
  return state.data.bootstrapped;
}

export async function markBootstrapped(): Promise<void> {
  const state = await getState();
  state.data.bootstrapped = true;
  state.data.lastRunAt = new Date().toISOString();
  await state.write();
}

export async function pruneOldEntries(daysToKeep = 7): Promise<void> {
  const state = await getState();
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - daysToKeep);
  const cutoffKey = cutoff.toISOString().slice(0, 10);

  const keys = Object.keys(state.data.notifiedTaskIds);
  for (const key of keys) {
    if (key < cutoffKey) {
      delete state.data.notifiedTaskIds[key];
    }
  }
  await state.write();
}
