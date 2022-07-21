import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useSnapshot } from "valtio";
import { EmployeePostsState } from "../state/employee-post-state";
import PostDetails from "./post-details";

const EmployeesPost = () => {
  let { employeesPost } = useSnapshot(EmployeePostsState);
  return (
    <Grid container spacing={2}>
      {employeesPost.map((data) => (        
          <PostDetails key={data.id} employeePost={data} />       
      ))}
    </Grid>
  );
};
export default EmployeesPost;
