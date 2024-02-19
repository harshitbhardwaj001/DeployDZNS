import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";

const Services = () => {
  const router = useRouter();
  const servicesData = [
    {
      name: "GRAPHICS",
      label: "Build your business",
      image: "/image1.png",
    },
    {
      name: "VIDEO EDITING",
      label: "Build your business",
      image: "/image3.png",
    },
    {
      name: "UIUX / WEB DEVELOPMENT",
      label: "Build your online presence",
      image: "/image4.png",
    },
    {
      name: "DESIGN CONSULTATION",
      label: "Business Consultation",
      image: "/image2.png",
    },
    {
      name: "PHOTOGRAPHY/CINEMATOGRAPHY",
      label: "Capture your moments",
      image: "/image5.png",
    },
    {
      name: "PACKAGE",
      label: "Build your own deal",
      image: "/image6.png",
    },
  ];
  return (
    <div className="mx-20 my-16 flex flex-col items-center overflow-hidden">
      <h2 className="text-5xl mb-20 w-[356px] xs:max-md:w-[170px] xs:max-md:text-2xl text-white font-extrabold">
        Our Services
      </h2>
      <ul className="flex flex-wrap gap-16 justify-center w-[100vw] xs:max-md:gap-x-3 xs:max-md:gap-y-6">
        {servicesData.map(({ name, label, image }) => (
          <li
            key={name}
            className="relative z-[5] cursor-pointer"
            onClick={() =>
              name !== "PACKAGE" &&
              router.push(`/search?q=${""}&category=${name.toLowerCase()} `)
            }
          >
            <div className="absolute z-10 text-white left-5 top-4 xs:max-md:left-3">
              <span className="text-[1.2rem] xs:max-md:text-[0.6rem]">
                {label}
              </span>
              <h6 className="text-[1.3rem] font-black xs:max-md:text-[0.4rem]">
                {name}
              </h6>
            </div>

            {name === "PACKAGE" && (
              <>
                <div className="absolute z-10 right-5 text-xl font-bold top-[21rem] xs:max-md:text-[1.1em] xs:max-md:top-[7rem] xs:max-md:right-2">
                  Coming Soon
                </div>
                <div className="absolute z-10 right-5 text-xl font-medium top-[22.5rem] xs:max-md:text-[1.1em] xs:max-md:top-[8rem] xs:max-md:right-[0.7rem]">
                  20-01-24
                </div>
              </>
            )}
            {name !== "PACKAGE" && (
              <>
                <div className="absolute z-10 right-5 text-xl font-bold top-[21rem] xs:max-md:text-[1.1em] xs:max-md:top-[7rem] xs:max-md:right-2">
                  Available
                </div>
                <div className="absolute z-10 right-5 text-xl font-medium top-[22.5rem] xs:max-md:text-[1.1em] xs:max-md:top-[8rem] xs:max-md:right-[0.7rem]">
                  Tommorrow
                </div>
              </>
            )}
            <div className="h-[400px] w-[400px] xs:max-md:w-[150px] xs:max-md:h-[150px]">
              <div className="bg-[#000] w-[400px] h-[400px] xs:max-md:w-[150px] xs:max-md:h-[150px] z-[12] visible"></div>
              <Image src={image} fill alt="services" />
            </div>
          </li>
        ))}
      </ul>
    </div>
    // <div>
    //   <div className="container flex flex-col justify-center items-center mx-auto my-8 py-10">
    //     {/* <div
    //       style="background-image: url(https://images.unsplash.com/photo-1538582709238-0a503bd5ae04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80)"
    //       className="max-w-5xl bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"
    //     ></div> */}

    //     <div className="bg-white mt-24 shadow-md rounded-lg z-[200] overflow-hidden">
    //       <div className="items-center justify-between py-[5rem] px-10 bg-black shadow-2xl rounded-lg mx-auto text-center">
    //         <div className="px-2 -mt-6">
    //           <div className="text-center">
    //             <h1 className=" text-3xl text-grey-800 font-medium text-white leading-loose my-3 w-full">
    //               Shop will be live soon!!
    //             </h1>
    //             <div className="w-full text-center">
    //               <form action="#">
    //                 <div className="mx-auto p-1 pr-0 flex items-center">
    //                   <input
    //                     type="email"
    //                     placeholder="yourmail@example.com"
    //                     className="flex-1 appearance-none rounded shadow p-3 px-5 text-black mr-2 focus:outline-none"
    //                   />
    //                   <button
    //                     type="submit"
    //                     className="bg-[#F4FF00] text-black text-base font-semibold rounded-md shadow-md hover:bg-indigo-600 p-3 py-4"
    //                   >
    //                     Subscribe
    //                   </button>
    //                 </div>
    //               </form>
    //               <h1 className="text-white w-full mt-[3rem] text-2xl font-semibold">
    //                 Subscribe to get the latest updates of the shop!
    //               </h1>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Services;
