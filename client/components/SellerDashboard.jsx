import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useStateProvider } from "../context/StateContext";
import { GET_SELLER_DASHBOARD_DATA } from "../utils/constants";
import axios from "axios";

const SellerDashboard = () => {
  const [cookies] = useCookies();
  const router = useRouter();
  const [{ userInfo }] = useStateProvider();
  const [dashboardData, setDashboardData] = useState();
  useEffect(() => {
    const getSellerDashboardData = async () => {
      const response = await axios.get(GET_SELLER_DASHBOARD_DATA, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${cookies.jwt}`,
        },
      });
      if (response.status === 200) {
        setDashboardData(response.data.dashboardData);
      }
      console.log({ response });
    };
    if (userInfo) {
      getSellerDashboardData();
    }
  }, [userInfo]);
  return (
    <>
      {userInfo && (
        <div className="flex min-h-[80vh] my-10 mt-0 px-32 gap-5">
          <div className="shadow-md h-max p-10 flex flex-col gap-5 min-w-96 w-96">
            <div className="flex gap-5 justify-center items-center">
              <div>
                {userInfo?.imageName ? (
                  <Image
                    src={userInfo.imageName}
                    alt="Profile"
                    width={140}
                    height={140}
                    className="rounded-full"
                  />
                ) : (
                  <div className="bg-purple-500 h-24 w-24 flex items-center justify-center rounded-full relative">
                    <span className="text-5xl text-white">
                      {userInfo.email[0].toUpperCase()}
                    </span>
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[#fff] text-lg font-medium">
                  {userInfo.username}
                </span>
                <span className="font-bold text-md">{userInfo.fullname}</span>
              </div>
            </div>
            <div className="border-t py-5">
              <p>{userInfo.description}</p>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-3 gap-10 w-full">
              <div
                className="shadow-md h-max p-10 flex flex-col gap-2 cursor-pointer hover:shadow-xl transition-all duration-300 z-[100]"
                onClick={() => router.push("/seller/services")}
              >
                <h2 className="text-xl">Total Services</h2>
                <h3 className="text-[#F4FF00] text-3xl font-extrabold">
                  {dashboardData?.services}
                </h3>
              </div>
              <div
                className="shadow-md h-max p-10 flex flex-col gap-2 cursor-pointer hover:shadow-xl transition-all duration-300 z-[100]"
                onClick={() => router.push("/seller/orders")}
              >
                <h2 className="text-xl">Total Orders</h2>
                <h3 className="text-[#F4FF00] text-3xl font-extrabold">
                  {dashboardData?.orders}
                </h3>
              </div>
              <div
                className="shadow-md h-max p-10 flex flex-col gap-2 cursor-pointer hover:shadow-xl transition-all duration-300 z-[100]"
                // onClick={() => router.push("/seller/unread-messages")}
              >
                <h2 className="text-xl">Unread Messages</h2>
                <h3 className="text-[#F4FF00] text-3xl font-extrabold">
                  {dashboardData?.unreadMessages}
                </h3>
              </div>
              <div className="shadow-md h-max p-10 flex flex-col gap-2 cursor-pointer hover:shadow-xl transition-all duration-300 z-[100]">
                <h2 className="text-xl">Earnings Today</h2>
                <h3 className="text-[#F4FF00] text-3xl font-extrabold">
                  &#8377;
                  {dashboardData?.dailyRevenue === null
                    ? "0"
                    : dashboardData?.dailyRevenue}
                </h3>
              </div>
              <div className="shadow-md h-max p-10 flex flex-col gap-2 cursor-pointer hover:shadow-xl transition-all duration-300 z-[100]">
                <h2 className="text-xl">Earnings Monthly</h2>
                <h3 className="text-[#F4FF00] text-3xl font-extrabold">
                  &#8377;{dashboardData?.monthlyRevenue}
                </h3>
              </div>
              <div className="shadow-md h-max p-10 flex flex-col gap-2 cursor-pointer hover:shadow-xl transition-all duration-300 z-[100]">
                <h2 className="text-xl">Earnings Yearly</h2>
                <h3 className="text-[#F4FF00] text-3xl font-extrabold">
                  &#8377;{dashboardData?.revenue}
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SellerDashboard;
