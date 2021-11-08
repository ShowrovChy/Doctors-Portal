import React from "react";
import { Redirect, Route } from "react-router";
import { LinearProgress } from "@mui/material";
import useAuth from "../../../hooks/useAuth";
const AdminRoute = ({ children, ...rest }) => {
  const { user, isLoading, isAdmin } = useAuth();
  if (isLoading) {
    return <LinearProgress color="success" />;
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email && isAdmin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
