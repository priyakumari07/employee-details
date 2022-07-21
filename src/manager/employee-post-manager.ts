import { EmployeePostService } from "../services/employee-post-services";
import { StateManager } from "./state-manager";

export class EmployeePostManager {
    static getAllEmployeesPost = async (employeeId:number) => {
        const response = await EmployeePostService.getAllEmployeesPost(employeeId);
        StateManager.setEmployeesPost(response);
        return response;
    }
}