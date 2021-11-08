import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import treatment from "../../../images/treatment.png";
const CareAndTerms = () => {
  return (
    <div>
      <Container style={{ marginTop: "160px" }}>
        <Grid container spacing={2} sx={{ height: "500px" }}>
          <Grid item xs={12} md={5} sx={{ height: "100%" }}>
            <img
              style={{ width: "100%", height: "100%" }}
              src={treatment}
              alt=""
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography variant="h3" sx={{ mt: 4 }}>
              Exceptional Dental Care,On Your Terms.
            </Typography>
            <Typography variant="subtitle1" sx={{ mt: 4 }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
              voluptatibus delectus dolorem corrupti pariatur aspernatur nobis
              soluta veniam consectetur ut. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Eius voluptatibus delectus dolorem
              corrupti pariatur aspernatur nobis soluta veniam consectetur ut.
              soluta veniam consectetur ut. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Eius voluptatibus delectus dolorem
              corrupti pariatur aspernatur nobis soluta veniam consectetur ut.
            </Typography>
            <Button variant="contained" sx={{ mt: 4 }}>
              Learn More
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default CareAndTerms;
