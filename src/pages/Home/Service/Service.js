import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
const Service = ({ service }) => {
  const { title, desc, img } = service;
  return (
    <Grid item xs={4} sm={4} md={4} style={{ marginTop: "70px" }}>
      <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
        <CardMedia
          component="img"
          style={{ margin: "0 auto", height: "70px", width: "auto" }}
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {title}
          </Typography>

          <Typography variant="body2" sx={{ color: "text.secondary", mt: 3 }}>
            {desc}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Service;
