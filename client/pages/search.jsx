import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { SEARCH_SERVICE_ROUTE } from "../utils/constants";
import Navbar from "../components/Navbar";
import SearchGridItem from "../components/search/SearchGridItem";
import { useCookies } from "react-cookie";

const search = () => {
  const router = useRouter();
  const [cookies] = useCookies();
  const { category, q } = router.query;
  const [services, setServices] = useState([]);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          `${SEARCH_SERVICE_ROUTE}?searchTerm=${q}&category=${category}`
        );
        setServices(data.services);
      } catch (err) {
        console.log(err);
      }
    };
    if (category || q) getData();
  }, [category, q]);

  return (
    <>
      <div className="nav overflow-hidden z-[5] h-full w-full">
        <Navbar clicked={clicked} setClicked={setClicked} />
      </div>
      <div className={`${clicked ? "hidden" : "block"}`}>
        <div className="mx-24 mb-24 min-h-[80vh] relative top-[10rem] xs:max-md:mx-[3.5rem]">
          {q && (
            <h3 className="text-4xl mb-10 w-full text-white">
              Results for <strong>{q}</strong>
            </h3>
          )}
          <div className="flex gap-4 z-[10]">
            <button className="py-3 px-5 border border-gray-400 rounded-lg font-medium">
              Category
            </button>
            <button className="py-3 px-5 border border-gray-400 rounded-lg font-medium">
              Budget
            </button>
            <button className="py-3 px-5 border border-gray-400 rounded-lg font-medium">
              Delivery Time
            </button>
          </div>
          <div>
            <div className="my-4 xs:max-md:mx-[6rem] xs:max-md:w-[100px]">
              <span className="text-[#74767e] font-medium">
                {services.length} Services Available
              </span>
            </div>
            <div className="grid grid-cols-4 xs:max-md:grid-cols-1">
              {services.map((service) => (
                <SearchGridItem service={service} key={service.id} />
              ))}
            </div>
          </div>
        </div>
        <footer className="flex justify-center my-7 mt-[10rem]">
          <div>&copy;{new Date().getFullYear()} DZNS Studio</div>
        </footer>
      </div>
    </>
  );
};

export default search;
