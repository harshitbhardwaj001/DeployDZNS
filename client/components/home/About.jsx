import Image from "next/image";
import React from "react";
import about from "../../public/about.png";

const About = () => {
  return (
    <div className="w-[99vw] h-[80vh] flex gap-2 xs:max-md:flex-col" id="about">
      <div className="w-full lg:grow justify-center mt-[8rem] z-[20]">
        <h1 className="w-full overflow-hidden text-[#F4FF00] text-center lg:ml-[0rem] text-6xl font-black md:text-[60px] sm:text-[50px] xs:text-[25px] xs:max-md:text-center text-[30px]">
          What is DZNS Studio?
        </h1>
        <p className="about font-semibold w-[70vw] text-[1.3vw] ml-[14.2rem] xs:max-md:ml-[2rem] xs:max-md:text-[3vw] text-center xs:max-md:w-[80vw] mt-[3rem]">
          DZNS Studio alludes to one big creative family of designers who aim to
          accomplish the highest standard of products and designs in the utmost
          creative and intricate manner. DZNS Studio's vision of providing
          creative services like, but not limited to, graphic design, 3D
          videos/graphics, UIUX design, web development, photography,
          cinematography, design consulting, et al connects its designers to its
          clients who are looking for these services at reasonable rates without
          a compromise on the quality of its products. Essentially, DZNS Studio
          embodies the philosophy of providing paragon products by our designers
          using their intrinsic creativity for our clients on a creative hunt.
        </p>
      </div>
      {/* <div className="flex justify-end items-center mr-40 xs:max-md:hidden mt-20 z-[20]">
        <Image
          src={about}
          alt="question"
          width={400}
          className="rounded-lg shadow-md shadow-white mix-blend-screen "
        />
      </div> */}
    </div>
  );
};

export default About;
