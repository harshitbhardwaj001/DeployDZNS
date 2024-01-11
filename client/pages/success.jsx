import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ORDER_SUCCESS_ROUTE } from "../utils/constants";

function success() {
  const [clicked, setClicked] = useState(false);
  const router = useRouter();
  const { payment_intent } = router.query;
  const [cookies] = useCookies();

  useEffect(() => {
    const changeOrderStatus = async () => {
      try {
        await axios.put(
          ORDER_SUCCESS_ROUTE,
          { paymentIntent: payment_intent },
          {
            headers: {
              Authorization: `Bearer ${cookies.jwt}`,
            },
          }
        );
      } catch (err) {
        console.log(err);
      }
    };
    if (payment_intent) {
      changeOrderStatus();
      setTimeout(() => router.push("/buyer/orders"), 5000);
    }
  }, [payment_intent]);

  return (
    <>
      <div className="nav overflow-hidden fixed h-full w-full">
        <Navbar clicked={clicked} setClicked={setClicked} />
      </div>
      <div className={`${clicked ? "hidden" : "block"}`}>
        <div className="h-[80vh] relative top-[10rem] flex items-center px-20 flex-col">
          <h1 className="text-3xl text-center w-full font-semibold">
            Payment Successfull . You are being redirected to the orders page.
          </h1>
          <h1 className="text-4xl text-center w-full mt-10 font-bold">
            Please do not close the page.
          </h1>
        </div>
        <footer className="flex justify-center my-7 mt-[15rem]">
          <div>&copy;{new Date().getFullYear()} DZNS Studio</div>
        </footer>
      </div>
    </>
  );
}

export default success;
