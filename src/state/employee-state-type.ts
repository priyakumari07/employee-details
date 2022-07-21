import { Employee } from "../model/employee";

export interface IEmployeeStateType {
    employees: Employee[];
}

export interface IEmployeeIdStateType {
    employeeId: number;
}
export interface IEmployeeLoadingStateType {
    emploading: boolean;
}

export interface IEmployeePostLoadingStateType {
    empPostloading: boolean;
}
