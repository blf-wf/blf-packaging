import { OverdueProcess, ScanResult, UnmappedGroup } from '../models/notification';
import { lookupDepartment } from '../mappers/user-mapper';

function formatDate(date: string): string {
  return date.replace(/-/g, '/');
}

function progressLabel(rate: number): string {
  if (rate === 0) return '未开始';
  if (rate >= 100) return '已完成';
  return `${rate}%`;
}

function actualLabel(realTime: string | null, rate: number): string {
  if (rate >= 100) return '已完成';
  if (realTime) return '进行中';
  return '未开始';
}

function buildProcessLine(p: OverdueProcess): string {
  const progress = progressLabel(p.outputRate);
  const actual = actualLabel(p.processEndRealTime, p.outputRate);
  const planStart = p.processEndTime.slice(0, 10);
  const planEnd = p.processEndTime.slice(0, 10);

  return [
    `> 工单 ${p.projectCode} · ${p.productName}`,
    `> 工序：${p.processName} · 逾期 **${p.expiredDayCount}天** · 进度 ${progress}`,
    `> 计划：${planStart} ~ ${planEnd} · 实际：${actual}`,
  ].join('\n');
}

export function buildPersonalMessage(
  processes: OverdueProcess[],
  date: string
): string {
  const header = `**【逾期工单提醒】${formatDate(date)}**\n`;
  const blocks = processes.map(buildProcessLine).join('\n\n');
  const count = processes.length;
  const footer = `\n---\n📊 你共有 **${count}** 个工序逾期\n[查看详情](https://liteweb.blacklake.cn/productionManagement/task)`;

  return header + blocks + footer;
}

function buildUnmappedSection(unmapped: UnmappedGroup[]): string {
  if (unmapped.length === 0) return '';

  const lines = unmapped.map(g => {
    const count = g.processes.length;
    return `| 未映射 | ${g.blacklakeName} | ${count} |`;
  });

  return `\n\n**⚠ 未映射用户（需更新 users.yaml）**\n\n| 部门 | 负责人 | 逾期数 |\n|------|--------|--------|\n${lines.join('\n')}`;
}

export function buildSummaryMessage(result: ScanResult): string {
  const header = `**【逾期工单日报】${formatDate(result.date)}**\n`;

  if (result.totalOverdue === 0) {
    return header + '\n今日无逾期工序 ✅';
  }

  // Build department-person-count table
  const rows: { dept: string; name: string; count: number }[] = [];

  for (const group of result.notified) {
    const dept = lookupDepartment(group.blacklakeName) || '未知';
    rows.push({ dept, name: group.blacklakeName, count: group.processes.length });
  }

  for (const group of result.unmapped) {
    rows.push({ dept: '未映射', name: group.blacklakeName, count: group.processes.length });
  }

  const tableRows = rows
    .map(r => `| ${r.dept} | ${r.name} | ${r.count} |`)
    .join('\n');

  const table = `| 部门 | 负责人 | 逾期数 |\n|------|--------|--------|\n${tableRows}`;

  const deptCount = new Set(rows.map(r => r.dept)).size;
  const footer = `\n📊 今日共 **${result.totalOverdue}** 个工序逾期，涉及 **${deptCount}** 个部门`;

  return header + table + buildUnmappedSection(result.unmapped) + '\n' + footer;
}
