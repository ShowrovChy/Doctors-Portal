import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import BookingModal from "../BookingModal/BookingModal";

const Booking = ({ booking, date }) => {
  const { name, time, space, price } = booking;
  const [openModal, setOpenModal] = React.useState(false);
  const handleModalOpen = () => setOpenModal(true);
  const handleModalClose = () => setOpenModal(false);
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{ py: 5 }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "600", color: "info.main" }}
          >
            {name}
          </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: "600" }}>
            {time}
          </Typography>
          <Typography variant="subtitle2" sx={{ fontWeight: "600" }}>
            Price {price}
          </Typography>
          <Typography variant="subtitle2" sx={{ fontWeight: "600" }}>
            {space} AVAILABLE SPACE
          </Typography>
          <Button onClick={handleModalOpen} variant="contained" sx={{ mt: 3 }}>
            BOOK APPOINTMENT{" "}
          </Button>
        </Paper>
      </Grid>
      <BookingModal
        date={date}
        booking={booking}
        openModal={openModal}
        handleModalClose={handleModalClose}
      ></BookingModal>
    </>
  );
};

export default Booking;
