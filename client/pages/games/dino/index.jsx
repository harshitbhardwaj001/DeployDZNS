import React, { useState } from "react";
import Navbar from "../../../components/Navbar";
import Dino from "../../../components/games/Dino";
import Head from "next/head";

const index = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <Head>
        <title>Time Pass 1 | DZNS Studio</title>
      </Head>
      <div className="nav overflow-hidden fixed h-full w-full">
        <Navbar clicked={clicked} setClicked={setClicked} />
      </div>
      <div className={`${clicked ? "hidden" : "block"}`}>
        <Dino />
        <footer className="flex justify-center mt-[13rem] xs:max-md:mt-[30rem] xs:max-md:mb-[2rem] xs:max-md:ml-[10rem]">
          <div>&copy;{new Date().getFullYear()} DZNS Studio</div>
        </footer>
      </div>
    </>
  );
};

export default index;
