import { Card, Typography, CardContent } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";


import { useSnapshot } from "valtio";
import { EmployeeIdState, EmployeeState } from "../state/employee-state";

const EmployeeDetails = () => {
  let { employees } = useSnapshot(EmployeeState);
  let { employeeId } = useSnapshot(EmployeeIdState)

 
  return (
    <>
    {employees.map((e) => {
        if (e.id === employeeId){
            return (
                <Card  key={e.id} sx={{width:"40%",backgroundColor:"#42a5f5", fontSize:"16px",marginBottom:'20px',justifyContent:"center"}}>
                <CardHeader
                sx={{backgroundColor:"#42a5f5", fontSize:"16px"}}
                  title={
                  <>
                  <Typography variant="body1" fontWeight="bolder" textTransform="capitalize">{e.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                  {e.email}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  {e.phone}
                  </Typography>
                  </>
                }
                />
                <CardContent>
                    <>
                  <Typography variant="body2" color="text.secondary">
                  {e.address.city} {e.address.street}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  {e.company.name}
                  </Typography>
                  </>
                </CardContent>
              </Card>
            )
        }
    })}
      </>
   
  );
};
export default EmployeeDetails;