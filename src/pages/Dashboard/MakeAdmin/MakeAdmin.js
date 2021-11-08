import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const { token } = useAuth();
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleOnSubmit = (e) => {
    const user = { email };
    fetch("https://murmuring-escarpment-26577.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
          console.log(data);
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <h2>Make an admin </h2>
      <form onSubmit={handleOnSubmit}>
        <TextField onBlur={handleOnBlur} label="Email" variant="standard" />
        <Button type="submit" variant="contained">
          {" "}
          Make Admin{" "}
        </Button>
      </form>
      {success && <h5>Made admin Successfully</h5>}
    </div>
  );
};

export default MakeAdmin;
