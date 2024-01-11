import React, { useState } from "react";
import Navbar from "../../../../components/Navbar";
import MessageContainer from "../../../../components/Messages/MessageContainer";

const messages = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <div className="nav overflow-hidden fixed h-full w-full">
        <Navbar clicked={clicked} setClicked={setClicked} />
      </div>
      <div className={`${clicked ? "hidden" : "block"}`}>
        <MessageContainer />
        <footer className="flex justify-center my-7 mt-[15rem]">
          <div>&copy;{new Date().getFullYear()} DZNS Studio</div>
        </footer>
      </div>
    </>
  );
};

export default messages;
