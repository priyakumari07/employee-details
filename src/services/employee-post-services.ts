import { EmployeePost } from "../model/employee-post";
import { EmployeePostLoading } from "../state/employee-post-state";
import api from "./api-service"
export class EmployeePostService {

    static getAllEmployeesPost = async (employeeId:number) => {  
           const employeePostUrl =  employeeId !== 0 ? `/posts/?userId=${employeeId}` : `/posts`;      
            const response = await api.get<EmployeePost[]>(employeePostUrl);   
            if(!response.data || response.data.length == 0){
                throw new Error("Employee post is empty");
            }
             return response.data;
    }
}