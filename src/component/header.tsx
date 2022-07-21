import { Paper, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useSnapshot } from "valtio";
import { EmployeePostsState } from "../state/employee-post-state";

const Header = () => {
  let { employeesPost } = useSnapshot(EmployeePostsState);
  return (
    <Paper
      elevation={3}
      sx={{ height: "10vh", width: "100%", backgroundColor: "#42a5f5" }}>
         <Typography variant="h5"  component="div" pt={4} textTransform="capitalize" >
         {`Employee Details And their Blog Post   (${employeesPost.length})`}
      </Typography>   
     
    </Paper>
  );
};
export default Header;
