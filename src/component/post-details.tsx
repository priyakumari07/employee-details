import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";

import { EmployeePost } from "../model/employee-post";

interface IEmployeesPostProps {
  employeePost: EmployeePost;
}

const PostDetails = (props: IEmployeesPostProps) => {
  const post = props.employeePost;
  return (
    <Grid item xs={6}>
      <Card>
        <CardHeader
        sx={{backgroundColor:"#42a5f5", fontSize:"16px"}}
          title={<Typography variant="body1" fontWeight="bolder" textTransform="capitalize">{post.title}</Typography>}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {post.body}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
export default PostDetails;
