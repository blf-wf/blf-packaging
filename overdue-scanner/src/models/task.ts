export interface WorkOrder {
  id: number;
  projectId: number;
  projectCode: string;
  productCode: string;
  productName: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  phone: string;
}

export interface TaskOutputObject {
  id: number;
  name: string;
  type: number;
  detail: User[];
}

export interface Task {
  id: number;
  orgId: number;
  projectId: number;
  projectCode: string;
  processId: number;
  processName: string;
  productCode: string;
  productName: string;
  processStatus: number;
  processStatusDisplay: string;
  expiredDayCount: number;
  outputObject: TaskOutputObject[];
  planAmount: number;
  fineAmount: number;
  outputRate: number;
  processStartTime: string;
  processEndTime: string;
  processStartRealTime: string | null;
  processEndRealTime: string | null;
}
