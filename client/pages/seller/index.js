import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import SellerDashboard from "../../components/SellerDashboard";

const index = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <div className="nav overflow-hidden fixed h-full w-full">
        <Navbar clicked={clicked} setClicked={setClicked} />
      </div>
      <div className={`${clicked ? "hidden" : "block"}`}>
        <div className="relative top-[10rem] w-full">
          <SellerDashboard />
        </div>
        <footer className="flex justify-center my-7 mt-[15rem]">
          <div>&copy;{new Date().getFullYear()} DZNS Studio</div>
        </footer>
      </div>
    </>
  );
};

export default index;
