import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const HomeContact = () => {
  return (
    <Box maxWidth="sm" sx={{ margin: " 130px auto" }}>
      <h1>Contact Us</h1>
      <form>
        <TextField
          sx={{ width: "90%", my: 1 }}
          defaultValue="Your Name"
          id="outlined-sized-small"
          size="small"
        />

        <TextField
          sx={{ width: "90%", my: 1 }}
          id="outlined-size-small"
          defaultValue="Subject"
          size="small"
        />
        <textarea
          style={{ width: "90%", marginTop: 20 }}
          rows="10"
          id="outlined-size-small"
          defaultValue="Your Message"
          size="small"
        />
      </form>
    </Box>
  );
};

export default HomeContact;
