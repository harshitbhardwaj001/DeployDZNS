import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import SignUpCard from "../pages/SignUpCard";

export const HeroSection = () => {
  const circleRef = useRef();
  const text = "Graphics • Video Editing • UI/UX • Photography • SMM •";

  return (
    <div className="wrapper1">
      <div className="hero-section flex flex-col justify-center items-center relative h-screen">
        
        {/* Logo positioned at the top center */}
        <div className="absolute top-1 left-1/2 transform -translate-x-1/2 p-4 z-50">
          <img src="/logo.png" alt="Logo" className="w-40 h-auto" />
        </div>

        {/* SignUpCard centered */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-black/90">
          <SignUpCard />
        </div>

        {/* Social Media Links centered below SignUpCard */}
        <div className="absolute bottom-10 flex justify-center w-full z-[20]">
          <ul className="flex space-x-6 text-white">
            <a href="https://www.instagram.com/studiodzns?igsh=MXY1NTR0eW92NXdrZA==" className="hover:opacity-70" target="_blank">
              <li>Instagram</li>
            </a>
            <a href="https://www.linkedin.com/company/dzns/" className="hover:opacity-70" target="_blank">
              <li>LinkedIn</li>
            </a>
            {/* <a href="https://facebook.com/"><li>Facebook</li></a> */}
          </ul>
        </div>
      </div>

      {/* Optional gif overlay */}
      <div className="gif-overlay"></div>
    </div>
  );
};
