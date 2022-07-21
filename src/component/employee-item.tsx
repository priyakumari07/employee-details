import { ListItemText } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import { useState } from "react";
import { Employee } from "../model/employee";
import { EmployeeDetailLoading, EmployeeIdState } from "../state/employee-state";

interface IEmployeeProps {
  employee: Employee;
}
const EmployeeItem = (props: IEmployeeProps) => {
  const emp = props.employee;
  const [selectedEmp, setSelectedEmp] = useState(emp.id);

  const handleClick = (id:number) => {
    setSelectedEmp(id);
    EmployeeIdState.employeeId = emp.id
    
  };
  return (
    <>
      <ListItemButton
        sx={{
          backgroundColor: "#42a5f5" ,
          height: "60px",
          marginBottom: "10px",
          cursor: "pointer",
          borderRadius: "5px",
          py: 0,
          minHeight: 60,
          color: "black",
        }}
       
        selected={selectedEmp === EmployeeIdState.employeeId ? true : false}
        key={emp.id}
        onClick={event => handleClick(emp.id)}
      >
        <ListItemText
          primary={emp.name}
          secondary={emp.email}
          primaryTypographyProps={{ fontSize: 14, fontWeight: "medium" }}
        />
      </ListItemButton>
    </>
  );
};
export default EmployeeItem;
