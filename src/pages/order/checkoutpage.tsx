import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { NextPage } from "next";
import React from "react";
import CheckoutForm from "../../components/orders/CheckoutForm";

const CheckoutPage: NextPage = () => {
  const promise = loadStripe(
    "pk_test_51JPsbPLwtPYhS8YtxHuEoznbYp0BdB8s6tcjCk8t0HmW9Xvq4tLd2lLJIPGvPULFbEAoS8tIPAfMliJ9gXChEQdP00GrGOwyjY"
  );
  return (
    <div>
      <Elements stripe={promise}>
        <CheckoutForm numCourses={3} />
      </Elements>
    </div>
  );
};

export default CheckoutPage;
