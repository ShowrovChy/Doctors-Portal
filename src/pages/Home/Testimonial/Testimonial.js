import { Container, Typography } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import p1 from "../../../images/people-1.png";
import p2 from "../../../images/people-2.png";
import p3 from "../../../images/people-3.png";
import PatientsReview from "../PatientsReview/PatientsReview";
const reviews = [
  {
    id: 1,
    about:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus eos quidem necessitatibus explicabo cumque modi dolor ab animi porro iste.",

    img: p1,
    name: "john smith",
    country: " U.S.A",
  },
  {
    id: 2,
    about:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus eos quidem necessitatibus explicabo cumque modi dolor ab animi porro iste.",

    img: p2,
    name: "john smith",
    country: " U.S.E",
  },
  {
    id: 3,
    about:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus eos quidem necessitatibus explicabo cumque modi dolor ab animi porro iste.",

    img: p3,
    name: "john smith",
    country: " U.K",
  },
];
const Testimonial = () => {
  return (
    <Container sx={{ mt: 8 }}>
      <Typography variant="h5">TESTIMONIAL</Typography>
      <Typography variant="h3">What's Our Patients Says</Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {reviews.map((review) => (
            <PatientsReview key={review.id} review={review}></PatientsReview>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Testimonial;
