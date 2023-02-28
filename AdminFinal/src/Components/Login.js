import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import swal from "sweetalert";
var username, password, uservalue, passvalue;
const Login = () => {
  const navigate = useNavigate();
  username = "admin123";
  password = "12345";

  const paperstyle = {
    padding: 20,
    height: "70vh",
    width: 480,
    margin: "20px auto",
  };
  const avatarstyle = { backgroundColor: "Rgb(60,179,113)" };
  const handleSubmit = () => {
    if (username == uservalue && password == passvalue) {
      swal({
        title: "You Login Sucessfully!",
        icon: "success",
      });
      navigate("/dashboard/homefragment");
    } else {
      swal({
        title: "Aww Something is wrong!",
        icon: "error",
      });
    }
  };
  return (
    <Grid>
      <Box elevation={10} style={paperstyle} bgcolor="Rgb(245,245,220) ">
        <Grid align="center">
          <Avatar sx={{ width: 60, height: 60 }} style={avatarstyle}>
            <LockOutlinedIcon />
          </Avatar>
          {/* <img alt="" src={admin} height="70px" width="70px" /> */}
          <h2>Admin Panel</h2>
        </Grid>
        <TextField
          variant="standard"
          label="Username"
          placeholder="Enter Username"
          type={"string"}
          fullWidth
          required
          margin="dense"
          onChange={(e) => (uservalue = e.target.value)}
        />

        <TextField
          label="Password"
          variant="standard"
          placeholder="Enter Password"
          type={"password"}
          fullWidth
          required
          onChange={(e) => (passvalue = e.target.value)}
        />
        <br />
        <FormControlLabel label="Remember me" control={<Checkbox />} />
        <Button
          // onClick={routeChange()}
          variant="contained"
          fullWidth
          color="primary"
          m={8}
          onClick={handleSubmit}
        >
          Login
        </Button>
        <br />
        <br />
      </Box>
    </Grid>
  );
};
export default Login;
