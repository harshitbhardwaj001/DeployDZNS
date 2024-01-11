import React, { useState } from "react";
import Head from "next/head";
import { CustomCursor, Frames } from "../../components";
import Navbar from "../../components/Navbar";
import Sound from "../../components/SoundOur";

const Index = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <div className="overflow-hidden fixed h-full w-full z-[3]">
        <Navbar clicked={clicked} setClicked={setClicked} />
      </div>
      <div className="h-[5500px]">
        <Head>
          <title>DZNS Studio</title>
        </Head>
        <CustomCursor />
        <div className={`${clicked ? "hidden" : "block"}`}>
          <main className="w-full h-full fixed perspective z-[-1]" id="main">
            <section className="h-full transform-3d">
              <Frames />
            </section>
          </main>
        </div>
      </div>
      <div className="relative z-[5]">
        <Sound />
      </div>
    </>
  );
};

export default Index;
