import { Employee } from "../model/employee"
import { EmployeeDetailLoading } from "../state/employee-state";
import api from "./api-service"

export class EmployeeService {
    static getAllEmployees = async () => { 
        EmployeeDetailLoading.emploading = true;      
            const response = await api.get<Employee[]>("/users");            
            if(!response.data || response.data.length === 0){                
                throw new Error("Employee list is empty");                
            }
            EmployeeDetailLoading.emploading = false;
             return response.data;
    }
}