import { Employee } from "../model/employee";
import { EmployeePost } from "../model/employee-post";
import { EmployeePostsState } from "../state/employee-post-state";
import { EmployeeState } from "../state/employee-state";

export class StateManager {
  static setEmployeesPost = (employeePost: EmployeePost[]) => {
    EmployeePostsState.employeesPost = employeePost;
  };
  static setEmployees = (employeeList: Employee[]) => {
    EmployeeState.employees = employeeList;
  };
}
