import React, { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";
import { useCookies } from "react-cookie";
import { useStateProvider } from "../../../context/StateContext";
import axios from "axios";
import { GET_SELLER_ORDERS_ROUTE } from "../../../utils/constants";
import Link from "next/link";

function index() {
  const [clicked, setClicked] = useState(false);
  const [cookies] = useCookies();
  const [orders, setOrders] = useState([]);
  const [{ userInfo }] = useStateProvider();

  useEffect(() => {
    const getOrders = async () => {
      try {
        const { data } = await axios.get(GET_SELLER_ORDERS_ROUTE, {
          headers: {
            Authorization: `Bearer ${cookies.jwt}`,
          },
        });
        setOrders(data.orders);
      } catch (err) {
        console.log(err);
      }
    };

    if (userInfo) {
      getOrders();
    }
  }, [userInfo]);

  return (
    <>
      <div className="nav overflow-hidden fixed h-full w-full">
        <Navbar clicked={clicked} setClicked={setClicked} />
      </div>
      <div className={`${clicked ? "hidden" : "block"}`}>
        <div className="min-h-[80vh] relative my-10 mt-[-1.25rem] top-[10rem] px-32 xs:max-md:px-5">
          <h3 className="m-5 text-2xl font-semibold w-full">All your Orders</h3>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Order Id
                  </th>
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
                    Order Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Send Message
                  </th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => {
                  return (
                    <tr
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      key={order.id}
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {order.id}
                      </th>
                      <td className="px-6 py-4">{order.service.title}</td>
                      <td className="px-6 py-4">{order.service.category}</td>
                      <td className="px-6 py-4">{order.service.price}</td>
                      <td className="px-6 py-4">
                        {order.service.deliveryTime}
                      </td>
                      <td className="px-6 py-4">
                        {order.createdAt.split("T")[0]}
                      </td>
                      <td className="px-6 py-4">
                        <Link
                          href={`/seller/orders/messages/${order.id}`}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Send Message
                        </Link>
                      </td>
                    </tr>
                  );
                })}
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
}

export default index;
