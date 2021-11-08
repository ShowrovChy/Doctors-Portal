import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import doctor from "../../../images/doctor.png";
import bg from "../../../images/appointment-bg.png";
import { Typography } from "@mui/material";
const AppointmentBanner = () => {
  const appointmentBg = {
    background: `url(${bg})`,
    backgroundColor: "rgba(8, 8, 8,.9)",
    backgroundBlendMode: "darken",
    marginTop: 170,
  };
  return (
    <Box sx={{ flexGrow: 1 }} style={appointmentBg}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <img
            style={{ width: "450px", marginTop: "-117px" }}
            src={doctor}
            alt=""
          />
        </Grid>
        <Grid item xs={6} style={{ textAlign: "left" }}>
          <Typography variant="h5" sx={{ color: "white", marginTop: "30px" }}>
            APPOINTMENT
          </Typography>
          <Typography variant="h3" sx={{ color: "white", margin: "30px 0" }}>
            Make an appointment today
          </Typography>
          <Typography variant="p" sx={{ color: "white" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus hic
            tempore, aperiam adipisci magni vel iste.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppointmentBanner;
