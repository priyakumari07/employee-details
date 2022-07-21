import { proxy } from "valtio";
import { IEmployeeIdStateType, IEmployeeLoadingStateType, IEmployeePostLoadingStateType, IEmployeeStateType } from "./employee-state-type";


export const EmployeeState = proxy<IEmployeeStateType> ({
    employees: [],
});

export const EmployeeIdState = proxy<IEmployeeIdStateType> ({
    employeeId:0,
});

export const EmployeeDetailLoading = proxy<IEmployeeLoadingStateType> ({
    emploading:false,
});



