import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51Jw4g4I8YyQaTuXyBY53RRskCBRgpNGl6JVcZnyz6gfD5CGhjWoX4vCay6Kg2cErQ7o6QlU64kpSIvOSLj6FgdpJ003KuYtb7q"
);

const Payment = () => {
  const { appointmentId } = useParams();
  const [appointment, setAppointment] = useState({});
  useEffect(() => {
    fetch(
      `https://murmuring-escarpment-26577.herokuapp.com/appointments/${appointmentId}`
    )
      .then((res) => res.json())
      .then((result) => {
        setAppointment(result);
      });
  }, [appointmentId]);
  console.log(appointment);
  return (
    <div>
      <h1>
        {" "}
        Please Pay For {appointment.patientName} For {appointment.serviceName}{" "}
      </h1>
      <h4> price : ${appointment?.price}</h4>
      {appointment?.price && (
        <Elements stripe={stripePromise}>
          <CheckoutForm appointment={appointment} />
        </Elements>
      )}
    </div>
  );
};

export default Payment;
