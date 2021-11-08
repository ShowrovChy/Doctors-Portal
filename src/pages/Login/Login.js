import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logImg from "../../images/login.png";
const Login = () => {
  const { handleUserLogin, GoogleLogIn } = useAuth();
  const [loginData, setLoginData] = useState({});
  const location = useLocation();
  const history = useHistory();
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginValue = { ...loginData };
    newLoginValue[field] = value;
    setLoginData(newLoginValue);
  };
  const handleLoginSubmit = (e) => {
    handleUserLogin(loginData.email, loginData.password, location, history);
    alert("submitting");

    e.preventDefault();
  };
  const handleGoogleLogIn = () => {
    GoogleLogIn(location, history);
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1">Login</Typography>

          <form
            onSubmit={handleLoginSubmit}
            style={{ marginTop: "60px", marginLeft: "30px" }}
          >
            <TextField
              sx={{ width: "75%", mt: 2 }}
              onChange={handleOnChange}
              name="email"
              type="email"
              label="Your Email"
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", mt: 2 }}
              onChange={handleOnChange}
              name="password"
              type="password"
              label="Your Password"
              variant="standard"
            />
            <Button
              variant="contained"
              sx={{ width: "75%", mt: 2 }}
              type="submit"
            >
              Log in
            </Button>
            <NavLink to="/register" style={{ textDecoration: "none" }}>
              <Button variant="text">New User? Please Register.</Button>
            </NavLink>{" "}
          </form>
          <Button onClick={handleGoogleLogIn} variant="contained">
            Google Log in
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <img width="100%" src={logImg} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
