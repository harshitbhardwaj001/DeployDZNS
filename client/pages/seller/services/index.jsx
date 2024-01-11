import axios from "axios";
import React, { useEffect, useState } from "react";
import { GET_USER_SERVICES_ROUTE } from "../../../utils/constants";
import Navbar from "../../../components/Navbar";
import Link from "next/link";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";

const index = () => {
  const [cookies] = useCookies();
  const [clicked, setClicked] = useState(false);
  const [services, setServices] = useState([]);
  const router = useRouter();
  useEffect(() => {
    const getUserServices = async () => {
      try {
        const { data } = await axios.get(GET_USER_SERVICES_ROUTE, {
          headers: {
            Authorization: `Bearer ${cookies.jwt}`,
          },
        });
        console.log(data);
        setServices(data.services);
      } catch (err) {
        console.log(err);
      }
    };
    getUserServices();
  }, []);
  return (
    <>
      <div className="nav overflow-hidden h-full w-full">
        <Navbar clicked={clicked} setClicked={setClicked} />
      </div>

      <div className={`${clicked ? "hidden" : "block"}`}>
        <div className="min-h-[80vh] relative my-10 mt-[-1.25rem] top-[10rem] px-32">
          <div className="flex justify-between">
            <h3 className="m-5 text-2xl font-semibold w-full">
              All your Services
            </h3>
            <button
              className="border text-md font-bold px-3 w-[300px] py-0 z-[10] border-[#F4FF00] bg-[#F4FF00] text-black rounded-md mb-5"
              type="button"
              onClick={() => router.push("/seller/services/create")}
            >
              Add New Service
            </button>
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Delivery Time
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {services.map(
                  ({ title, category, price, deliveryTime, id }) => {
                    return (
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {title}
                        </th>
                        <td className="px-6 py-4">{category}</td>
                        <td className="px-6 py-4">{price}</td>
                        <td className="px-6 py-4">{deliveryTime}</td>
                        <td className="px-6 py-4 text-right">
                          <Link
                            href={`/seller/services/${id}`}
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            Edit
                          </Link>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </div>
        </div>
        <footer className="flex justify-center my-7 mt-[15rem]">
          <div>&copy;{new Date().getFullYear()} DZNS Studio</div>
        </footer>
      </div>
    </>
  );
};

export default index;
