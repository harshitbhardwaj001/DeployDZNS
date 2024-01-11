import React, { useEffect, useState } from "react";
import bg from "../public/bg1.gif";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import gsap from "gsap";
import { useRouter } from "next/router";

const ShopHeader = () => {
  const router = useRouter();
  const [image, setImage] = useState(1);

  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    const interval = setInterval(
      () => setImage(image >= 5 ? 1 : image + 1),
      10000
    );
    return () => clearInterval(interval);
  }, [image]);

  return (
    <div className="h-[650px] w-[99.5vw] relative bg-cover overflow-x-hidden">
      <div className="absolute top-0 right-0 w-[110vw] h-full transition-opacity z-0">
        <div className="bg-[#000] opacity-[0.85] w-[200vw] h-[650px] absolute top-0 left-0 z-[7]">
          test
        </div>
        <Image alt="hero" src={bg} unoptimized fill />
        {/* <Image alt="hero" src={image2} fill className={`${image===2 ? "opacity-100" : "opacity-0" } transition-all duration-1000 `} />
            <Image alt="hero" src={image3} fill className={`${image===3 ? "opacity-100" : "opacity-0" } transition-all duration-1000 `} />
            <Image alt="hero" src={image4} fill className={`${image===4 ? "opacity-100" : "opacity-0" } transition-all duration-1000 `} />
            <Image alt="hero" src={image5} fill className={`${image===5 ? "opacity-100" : "opacity-0" } transition-all duration-1000 `} /> */}
      </div>
      <div className="z-10 relative w-[100vw] flex justify-start xs:max-md:justify-center top-[10rem] flex-col h-[300px] gap-5 items-center">
        <h5 className="text-white text-center font-normal text-6xl xs:max-md:text-2xl leading-snug">
          Find the perfect &nbsp;<i>Freelance</i> <br /> services for your
          business.
        </h5>
        <div className="flex align-middle">
          <div className="relative">
            <input
              type="text"
              className="h-14 w-[600px] text-black pl-10 rounded-md rounded-r-none xs:max-md:w-[200px] xs:max-md:h-12 xs:max-md:text-[0.8rem]  xs:max-md:pl-4"
              value={searchData}
              onChange={(e) => setSearchData(e.target.value)}
              placeholder={'Try "building website"'}
            />
          </div>
          <button
            className="bg-[#F4FF00] text-black px-12 text-lg font-semibold rounded-r-md xs:max-md:px-5"
            onClick={() => {
              setSearchData("");
              router.push(`/search?q=${searchData}`);
            }}
          >
            Search
          </button>
        </div>
        <div className="text-white flex gap-4  xs:max-md:gap-2">
          Popular:{" "}
          <ul className="flex gap-5  xs:max-md:gap-0">
            <li className="text-md py-[0.5px] px-2 rounded-full hover:bg-white hover:text-black transition-all duration-300">
              Design Consultation
            </li>
            <li className="text-md py-[0.5px] px-2 rounded-full hover:bg-white hover:text-black transition-all duration-300">
              Video Editing
            </li>
            <li className="text-md py-[0.5px] px-2 rounded-full hover:bg-white hover:text-black transition-all duration-300">
              Website Development
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ShopHeader;
