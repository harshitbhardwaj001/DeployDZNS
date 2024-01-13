import React, { useEffect, useState } from "react";
import { useStateProvider } from "../../context/StateContext";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { HOST } from "../../utils/constants";

const Details = () => {
  const [{ serviceData, hasOrdered }] = useStateProvider();
  const [currentImage, setCurrentImage] = useState("");

  useEffect(() => {
    if (serviceData) {
      setCurrentImage(serviceData.images[0]);
    }
  }, [serviceData]);
  return (
    <>
      {serviceData && currentImage !== "" && (
        <div className="col-span-2 flex flex-col gap-3">
          <h3 className="text-2xl font-bold text-[#fff] w-full xs:max-md:text-center">
            {serviceData.title}
          </h3>
          <div className="flex items-center gap-2">
            {/* <div>
              {serviceData.createdBy?.profielImage ? (
                <Image
                  src={HOST + "/" + serviceData.createdBy?.profielImage}
                  alt="profile"
                  height={30}
                  width={30}
                  className="rounded-full"
                />
              ) : (
                <div className="bg-purple-500 h-10 w-10 flex items-center justify-center rounded-full relative">
                  <span className="text-xl text-white">
                    {serviceData.createdBy?.email[0].toUpperCase()}
                  </span>
                </div>
              )}
            </div>
            <div className="flex gap-2 items-center">
              <h4 className="text-[#fff] font-bold w-full">
                {serviceData.createdBy.fullname}
              </h4>
              <h6 className="text-[#74767e]">
                @{serviceData.createdBy.username}
              </h6>
            </div> */}
            <div className="flex items-center gap-1 mb-4 mt-[-8px]">
              <div className="flex xs:max-md:hidden">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} className={`cursor-pointer `} />
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="max-h-[1000px] max-w-[1000px] overflow-hidden z-[10]">
              <Image
                src={currentImage}
                alt="Service"
                width={1000}
                height={500}
                className="hover:scale-110 transition-all duration-500 w-[1000px] h-[500px] xs:max-md:w-[500px] xs:max-md:h-[200px]"
              />
            </div>
            <div className="flex gap-4 flex-wrap z-[10] xs:max-md:justify-center">
              {serviceData.images.length > 1 &&
                serviceData.images.map((image) => (
                  <Image
                    src={image}
                    alt="Service"
                    height={100}
                    width={100}
                    key={image}
                    onClick={() => setCurrentImage(image)}
                    className={`${
                      currentImage === image ? "" : "blur-sm"
                    } cursor-pointer transition-all duration-500 w-[100px] xs:max-md:w-[50px]`}
                  />
                ))}
            </div>
          </div>
          <div>
            <h3 className="text-3xl my-5 font-medium text-[#fff] w-full xs:max-md:text-center">
              About this service
            </h3>
            <div>
              <p className="w-full xs:max-md:text-center">
                {serviceData.description}
              </p>
            </div>
          </div>
          <div></div>
        </div>
      )}
    </>
  );
};

export default Details;
