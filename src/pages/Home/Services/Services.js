import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import whitening from "../../../images/whitening.png";
import cavity from "../../../images/cavity.png";
import fluoride from "../../../images/fluoride.png";
import Service from "../Service/Service";
import Typography from "@mui/material/Typography";

const services = [
  {
    title: "Teeth Whitening",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia cumque dolores voluptatem! Est saepe voluptatibus non sed sunt eaque necessitatibus.",
    img: whitening,
  },
  {
    title: "Cavity Filling",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia cumque dolores voluptatem! Est saepe voluptatibus non sed sunt eaque necessitatibus.",
    img: cavity,
  },
  {
    title: "Fluoride Treatment",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia cumque dolores voluptatem! Est saepe voluptatibus non sed sunt eaque necessitatibus.",
    img: fluoride,
  },
];

const Services = () => {
  return (
    <Container>
      <Typography
        variant="h5"
        component="div"
        sx={{ fontWeight: 500, mt: 5, color: "primary.main" }}
      >
        OUR SERVICES
      </Typography>
      <Typography variant="h3" component="div" sx={{ fontWeight: 600, mt: 4 }}>
        SERVICES WE PROVIDE
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map((service) => (
            <Service key="service.name" service={service}></Service>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Services;
