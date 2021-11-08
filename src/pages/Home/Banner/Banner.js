import React from "react";
import bg from "../../../images/bg.png";
import chair from "../../../images/chair.png";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";

const Banner = () => {
  const bannerBg = {
    background: `url(${bg})`,
    height: "100vh",
  };
  const verticalCenter = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "left",
    height: "100%",
  };
  return (
    <Box sx={{ flexGrow: 1 }} style={bannerBg}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7} style={verticalCenter}>
          <Box>
            <Typography variant="h3">
              You New Smile <br /> Starts Here.
            </Typography>
            <Typography variant="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              dolores <br /> repudiandae dolore, corporis maiores distinctio.
              Repudiandae, dolorum?
            </Typography>
            <Button variant="contained"> Get Appointment</Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={5} style={verticalCenter}>
          <img src={chair} style={{ height: "300px" }} alt="" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
