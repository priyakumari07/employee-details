import { EmployeeService } from "../services/employee-services";
import { StateManager } from "./state-manager";

export class EmployeeManager {
    static getAllEmployees = async () => {
        const response = await EmployeeService.getAllEmployees();
        StateManager.setEmployees(response);
        return response;
    }
}