import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

export const HeroSection = () => {
  const circleRef = useRef();
  const text = "Graphics • Video Editing • UI/UX • Photography • SEO •";
  // useEffect(() => {
  //   console.log("Trying to initialize circletype");
  //   if (circleRef.current) {
  //     try {
  //       const circleType = new circletype(circleRef.current);
  //       console.log("circletype initialized successfully");
  //       circleType.radius(30);
  //     } catch (error) {
  //       console.error("Error initializing circletype:", error);
  //     }
  //   }
  // }, []);

  return (
    <div className="wrapper1">
      <div className="hero-section ">
        <div className="hero-gif"></div>
        <div className="hero-title">
          <h1 className="glitch" data-text="DZNS">
            DZNS
          </h1>
          <p>STUDIOS</p>
        </div>
        <div className="rotatethis">
          {text.split("").map((char, index) => (
            <span key={index}>{char}</span>
          ))}
        </div>

        <div className="social-media z-[20]">
          <ul>
            <a href="https://www.instagram.com/dzns.studio/">
              <li>instagram</li>
            </a>
            <a href="https://twitter.com/Dzns_Studios">
              <li>twitter</li>
            </a>
            {/* <li>facebook</li> */}
          </ul>
        </div>
        <div className="relative w-full z-100 flex justify-center items-center z-[100]">
          <a href="#about">
            <div className="w-[2.2vw] h-[6.7vh] top-[90vh] rounded-3xl border-2 border-secondary flex justify-center items-start p-2 absolute z-100">
              <motion.div
                animate={{
                  y: [0, 20, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1 bg-white"
              />
            </div>
          </a>
        </div>
      </div>
      <div className="gif-overlay"></div>
    </div>
  );
};
