// 请求格式
export interface EmployeeRequest {
    name: string;
    departmentId: number | undefined;
}
// 请求响应，单条数据
interface EmployeeInfo {
    id: number;
    key: number;
    name: string;
    department: string;
    hiredate: string;
    level: string;
}
// 后端响应
export type EmployeeResponse = EmployeeInfo[] | undefined