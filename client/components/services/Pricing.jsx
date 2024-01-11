import { useRouter } from "next/router";
import React from "react";
import { useStateProvider } from "../../context/StateContext";
import { FiClock, FiRefreshCcw } from "react-icons/fi";
import { BiRightArrowAlt } from "react-icons/bi";
import { BsCheckLg } from "react-icons/bs";

const Pricing = () => {
  const router = useRouter();
  const [{ serviceData, userInfo }, dispatch] = useStateProvider();
  return (
    <>
      {serviceData && (
        <div className="z-[10] sticky top-36 mb-10 h-max w-96 xs:max-md:w-[19.3rem]">
          <div className="border p-10 flex flex-col gap-5">
            <div className="flex justify-between">
              <h4 className="text-sm font-normal text-[#fff] w-full xs:max-md:text-center">
                {serviceData.shortDesc}
              </h4>
            </div>
            <h6 className="font-medium text-xl xs:max-md:text-center">
              &#8377;500
            </h6>
            <div>
              <div className="text-[#fff] font-semibold text-sm flex gap-6">
                <div className="flex items-center gap-2">
                  <FiClock className="text-xl xs:max-md:text-[0.8rem]" />
                  <span className="xs:max-md:w-[98px] xs:max-md:text-[0.7rem]">
                    {serviceData.deliveryTime} Days Delivery
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <FiRefreshCcw className="text-xl xs:max-md:text-[0.8rem]" />
                  <span className="xs:max-md:w-[98px] xs:max-md:text-[0.7rem]">
                    {serviceData.revisions} Revisions
                  </span>
                </div>
              </div>
            </div>
            <ul>
              {serviceData.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3"
                >
                  <BsCheckLg className="text-[#F4FF00] text-lg" />
                  <span className="text-[#fff]">{feature}</span>
                </li>
              ))}
            </ul>
            {serviceData.userId === userInfo?.id ? (
              <button
                className="flex items-center bg-[#F4FF00] text-black py-2 justify-center font-bold text-lg relative rounded"
                onClick={() =>
                  router.push(`/seller/services/${serviceData.id}`)
                }
              >
                <span>Edit</span>
                <BiRightArrowAlt className="text-2xl absolute right-4" />
              </button>
            ) : (
              <button
                className="flex items-center bg-[#F4FF00] text-black py-2 justify-center font-bold text-lg relative rounded"
                onClick={() =>
                  router.push(`/checkout?serviceId=${serviceData.id}`)
                }
              >
                <span>Continue</span>
                <BiRightArrowAlt className="text-2xl absolute right-4" />
              </button>
            )}
          </div>
          {serviceData.userId !== userInfo?.id && (
            <div className="flex items-center justify-center mt-5">
              <button className="w-5/6 hover:bg-[#74767e] py-1 border border-[#74767e] px-5 text-[#6c6d75] hover:text-white transition-all duration-300 text-lg rounded font-bold">
                Contact Me
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Pricing;
