import { Paper, Grid, Skeleton } from "@mui/material";
import { useEffect } from "react";
import { useSnapshot } from "valtio";
import { constants } from "zlib";
import { EmployeeManager } from "../manager/employee-manager";
import { EmployeePostManager } from "../manager/employee-post-manager";
import { EmployeePostLoading } from "../state/employee-post-state";
import {
  EmployeeDetailLoading,
  EmployeeIdState,
} from "../state/employee-state";
import EmployeeDetails from "./employee-details";
import EmployeesPost from "./employee-posts";
import Employees from "./employees";
import Header from "./header";

const EmployeesHomeScreen = () => {
  const { employeeId } = useSnapshot(EmployeeIdState);
  const { empPostloading } = useSnapshot(EmployeePostLoading);

  const getEmployees = async () => {
    await EmployeeManager.getAllEmployees();
  };

  const getEmployeesPost = async (employeeId: number) => {
    await EmployeePostManager.getAllEmployeesPost(employeeId);
  };

  useEffect(() => {
    getEmployees();
    getEmployeesPost(employeeId);
  });

  return (
    <Paper
      elevation={1}
      sx={{ bgcolor: "#cfe8fc", height: "auto", width: "100%" }}
    >
      <Header />
      <Grid container spacing={7} mt={0}>
        <Grid item md={2}>
          <Employees />
        </Grid>
        <Grid item container md={10}>
          <Grid item xs={12}>
            <EmployeeDetails />
          </Grid>
          <Grid item xs={12}>
          {empPostloading ? (
            <Skeleton
            animation="wave"
            variant="rectangular"
            width={400}
            height={40}
          />
          ):(
            <EmployeesPost />
          )}
           
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};
export default EmployeesHomeScreen;
