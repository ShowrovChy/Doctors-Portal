import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import Banner from "../Banner/Banner";
import CareAndTerms from "../CareAndTerms/CareAndTerms";
import HomeContact from "../HomeContact/HomeContact";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div style={{ marginBottom: "150px" }}>
      <Navigation></Navigation>
      <Banner></Banner>
      <Services></Services>
      <CareAndTerms></CareAndTerms>
      <AppointmentBanner></AppointmentBanner>
      <Testimonial></Testimonial>
      <HomeContact></HomeContact>
    </div>
  );
};

export default Home;
