import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { FaStar } from "react-icons/fa";
import { HOST } from "../../utils/constants";

const SearchGridItem = ({ service }) => {
  const router = useRouter();
  const calculateratings = () => {};
  return (
    <div
      className="max-w-[300px] z-[10] flex flex-col gap-2 cursor-pointer mb-8"
      onClick={() => {
        router.push(`/service/${service.id}`);
      }}
    >
      <div className="relative w-64 h-40 ">
        <Image
          src={`${HOST}/uploads/${service.images[0]}`}
          alt="service"
          fill
          className="rounded-xl"
        />
      </div>
      {/* <div className="flex items-center gap-2">
        <div>
          {service.createdBy.profileImage ? (
            <Image
              src={HOST + "/" + service.createdBy.profileImage}
              alt="profile"
              height={30}
              width={30}
              className="rounded-full"
            />
          ) : (
            <div className="bg-purple-500 h-7 w-7 flex items-center justify-center rounded-full relative">
              <span className="text-lg text-white">
                {service.createdBy.email[0].toUpperCase()}
              </span>
            </div>
          )}
        </div>
        <span className="text-md">
          <strong className="font-medium">{service.createdBy.username}</strong>
        </span>
      </div> */}
      <div>
        <p className="line-clamp-2 text-2xl text-[#fff] xs:max-md:text-center xs:max-md:w-[250px] xs:max-md:text-lg">
          {service.title}
        </p>
      </div>
      {/* <div className="flex items-center gap-1 mt-[-8px] text-yellow-400">
        <FaStar size={15} />
        <span className="font-medium">{calculateratings()}</span>
        <span className="text-[#74767e]">{service?.reviews?.length}</span>
      </div> */}
      <div className="xs:max-md:flex xs:max-md:mt-[-0.5rem]">
        <strong className="font-medium xs:max-md:text-center xs:max-md:w-[250px]">
          From &#8377;{service.price}
        </strong>
      </div>
    </div>
  );
};

export default SearchGridItem;
