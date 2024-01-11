import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useCookies } from "react-cookie";
import axios from "axios";
import { CREATE_ORDER } from "../utils/constants";
import CheckoutForm from "../components/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const checkout = () => {
  const [clicked, setClicked] = useState(false);
  const router = useRouter();
  const [clientSecret, setClientSecret] = useState("");
  const [cookies] = useCookies();
  const { serviceId } = router.query;

  useEffect(() => {
    const createOrder = async () => {
      try {
        const { data } = await axios.post(
          CREATE_ORDER,
          { serviceId },
          {
            headers: {
              Authorization: `Bearer ${cookies.jwt}`,
            },
          }
        );
        setClientSecret(data.clientSecret);
      } catch (err) {
        console.log(err);
      }
    };
    if (serviceId) {
      createOrder();
    }
  }, [serviceId]);

  const appearance = {
    theme: "night",
    labels: "floating",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <>
      <div className="nav overflow-hidden z-[5] h-full w-full">
        <Navbar clicked={clicked} setClicked={setClicked} />
      </div>
      <div className={`${clicked ? "hidden" : "block"}`}>
        <div className="min-h-[80vh] max-w-full relative top-[10rem] flex flex-col items-center mx-20 gap-10">
          <h1 className="text-3xl w-full text-center xs:max-md:text-xl">
            Please complete the payment to place the order
          </h1>
          {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          )}
        </div>
        <footer className="flex justify-center my-7 mt-[10rem]">
          <div>&copy;{new Date().getFullYear()} DZNS Studio</div>
        </footer>
      </div>
    </>
  );
};

export default checkout;
