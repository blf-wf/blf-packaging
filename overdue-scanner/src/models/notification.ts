export interface WorkOrderSummary {
  projectId: number;
  projectCode: string;
  productName: string;
}

export interface OverdueProcess {
  taskId: number;
  projectCode: string;
  projectId: number;
  productName: string;
  processName: string;
  expiredDayCount: number;
  outputRate: number;
  processEndTime: string;
  processEndRealTime: string | null;
  responsibleNames: string[];
}

export interface NotificationGroup {
  wecomUserId: string;
  blacklakeName: string;
  processes: OverdueProcess[];
}

export interface UnmappedGroup {
  blacklakeName: string;
  processes: OverdueProcess[];
}

export interface ScanResult {
  notified: NotificationGroup[];
  unmapped: UnmappedGroup[];
  totalOverdue: number;
  date: string;
}
