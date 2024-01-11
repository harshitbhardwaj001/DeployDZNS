import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import ShopHeader from "../../components/ShopHeader";
import Services from "../../components/Services";
import Head from "next/head";

const index = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <Head>
        <title>Shop | Undiscovered</title>
      </Head>
      <div className="nav overflow-hidden z-[5]">
        <Navbar clicked={clicked} setClicked={setClicked} />
      </div>
      <div className={`${clicked ? "hidden" : "block"}`}>
        <ShopHeader />
        <Services />
        <footer className="flex justify-center my-7 mt-[5rem]">
          <div>&copy;{new Date().getFullYear()} DZNS Studio</div>
        </footer>
      </div>
    </>
  );
};

export default index;
