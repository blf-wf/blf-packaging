import { readFileSync } from 'fs';
import { resolve } from 'path';
import { parse } from 'yaml';
import { logger } from '../utils/logger';

interface MemberMapping {
  name: string;
  wecom_id: string;
}

interface DepartmentMapping {
  members: MemberMapping[];
}

interface UsersConfig {
  departments: Record<string, DepartmentMapping>;
}

let mapping: Map<string, { wecomId: string; department: string }> | null = null;

const SPECIAL_NAMES = new Set(['所有人']);

export function isSpecialName(name: string): boolean {
  return SPECIAL_NAMES.has(name);
}

function loadMapping(): Map<string, { wecomId: string; department: string }> {
  if (mapping) return mapping;

  const yamlPath = resolve(__dirname, '../../config/users.yaml');
  const raw = readFileSync(yamlPath, 'utf-8');
  const config = parse(raw) as UsersConfig;

  mapping = new Map();

  for (const [dept, deptConfig] of Object.entries(config.departments)) {
    for (const member of deptConfig.members) {
      mapping.set(member.name, { wecomId: member.wecom_id, department: dept });
    }
  }

  logger.info({ count: mapping.size }, 'User mapping loaded');
  return mapping;
}

export function lookupWecomId(name: string): string | null {
  const m = loadMapping();
  const entry = m.get(name);
  if (!entry) return null;
  return entry.wecomId;
}

export function lookupDepartment(name: string): string | null {
  const m = loadMapping();
  const entry = m.get(name);
  if (!entry) return null;
  return entry.department;
}

export function getMappedNames(): string[] {
  return [...loadMapping().keys()];
}
