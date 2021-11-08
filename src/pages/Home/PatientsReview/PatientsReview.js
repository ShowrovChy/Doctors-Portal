import { Grid, Typography } from "@mui/material";
import React from "react";

const PatientsReview = ({ review }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Typography>{review.about}</Typography>
      <div style={{ display: "flex", height: "70px" }}>
        <div style={{ width: "35%" }}>
          <img style={{ height: "100%" }} src={review.img} alt="" />
        </div>
        <div style={{ width: "65%" }}>
          <h3>{review.name}</h3>
          <h5>{review.country}</h5>
        </div>
      </div>
    </Grid>
  );
};

export default PatientsReview;
