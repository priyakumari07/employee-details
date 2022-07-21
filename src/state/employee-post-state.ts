import { proxy } from "valtio";
import { EmployeePost } from "../model/employee-post";
import { IEmployeePostLoadingStateType } from "./employee-state-type";

export interface IEmployeePostStateType {
    employeesPost: EmployeePost[];
}


export const EmployeePostsState = proxy<IEmployeePostStateType> ({
    employeesPost: [],
});

export const EmployeePostLoading = proxy<IEmployeePostLoadingStateType> ({
    empPostloading:false,
});





