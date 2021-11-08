import {
  Alert,
  Button,
  Container,
  Grid,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import logImg from "../../../images/login.png";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const { handleUserRegister, user, isLoading, authError } = useAuth();
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginValue = { ...loginData };
    newLoginValue[field] = value;
    setLoginData(newLoginValue);
  };
  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("password didn't matched");
      return;
    }
    handleUserRegister(
      loginData.email,
      loginData.password,
      history,
      loginData.name
    );
    e.preventDefault();
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1">Register</Typography>

          {!isLoading && (
            <form
              onSubmit={handleLoginSubmit}
              style={{ marginTop: "60px", marginLeft: "30px" }}
            >
              <TextField
                sx={{ width: "75%", mt: 2 }}
                onBlur={handleOnBlur}
                id="standard-basic"
                name="name"
                label="Your Name"
                variant="standard"
              />
              <TextField
                sx={{ width: "75%", mt: 2 }}
                onBlur={handleOnBlur}
                id="standard-basic"
                name="email"
                type="email"
                label="Your Email"
                variant="standard"
              />
              <TextField
                sx={{ width: "75%", mt: 2 }}
                onBlur={handleOnBlur}
                id="standard-basic"
                name="password"
                type="password"
                label="Your Password"
                variant="standard"
              />
              <TextField
                sx={{ width: "75%", mt: 2 }}
                onBlur={handleOnBlur}
                id="standard-basic"
                name="password2"
                type="password"
                label="Re-enter Password"
                variant="standard"
              />
              <Button
                variant="contained"
                sx={{ width: "75%", mt: 2 }}
                type="submit"
              >
                Register
              </Button>
              <NavLink to="/login" style={{ textDecoration: "none" }}>
                <Button variant="text">
                  Already have an account? Please Login.
                </Button>
              </NavLink>{" "}
            </form>
          )}
          {isLoading && <LinearProgress color="success" />}
          {authError && <Alert severity="error">{authError}</Alert>}
          {user.email && (
            <Alert severity="success">User Created Successfully</Alert>
          )}
        </Grid>
        <Grid item xs={12} md={6}>
          <img width="100%" src={logImg} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
