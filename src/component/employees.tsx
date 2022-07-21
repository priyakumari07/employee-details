import { Paper, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import { useSnapshot } from "valtio";
import { EmployeeState } from "../state/employee-state";
import EmployeeItem from "./employee-item";

const Employees = () => {
  let { employees } = useSnapshot(EmployeeState);
  return (
    <>
      <Paper
        sx={{
          backgroundColor: "#1976d2",
          height: "50px",
          marginBottom: "10px",
        }}
      >
        <Typography
          sx={{ color: "#fff", fontweight: "bold", textAlign: "left",padding:"10px" }}
        >
          {"List of employess " + employees.length}
        </Typography>{" "}
      </Paper>
      <List sx={{ paddingTop: 0 }}>
        {employees.map((data) => (
          <EmployeeItem key={data.id} employee={data} />
        ))}
      </List>
    </>
  );
};
export default Employees;
