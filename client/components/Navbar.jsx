import gsap, { Power1, Power2, Power3, Power4 } from "gsap";
import { CSSRulePlugin } from "gsap/all";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Logo from "../public/DZNS_Logo.png";
import { useState } from "react";
import { useStateProvider } from "../context/StateContext";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import axios from "axios";
import { GET_USER_INFO, HOST } from "../utils/constants";
import { reducerCases } from "../context/constants";
import AuthWrapper from "./AuthWrapper";

const Navbar = ({ clicked, setClicked }) => {
  const router = useRouter();
  const [cookies] = useCookies();
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchData, isSearchData] = useState("");
  const [isFixed, setIsFixed] = useState(false);
  const [{ showLoginModal, showSignupModal, userInfo, isSeller }, dispatch] =
    useStateProvider();

  const handleLogin = () => {
    if (showLoginModal) {
      dispatch({
        type: reducerCases.TOGGLE_SIGNUP_MODAL,
        showSignupModal: false,
      });
    }
    dispatch({
      type: reducerCases.TOGGLE_LOGIN_MODAL,
      showLoginModal: true,
    });
  };
  useEffect(() => {
    if (router.pathname === "/shop") {
      const positionNavbar = () => {
        window.pageYOffset > 0 ? setIsFixed(true) : setIsFixed(false);
      };
      window.addEventListener("scroll", positionNavbar);
      return () => window.removeEventListener("scroll", positionNavbar);
    } else {
      setIsFixed(false);
    }
  }, [router.pathname]);

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });
    let path = document.querySelector(".animate path");
    let spanBefore = CSSRulePlugin.getRule("#hamburger span::before");

    gsap.set(spanBefore, { background: "#fff" });
    gsap.set(".menu", { visibility: "hidden" });

    function revealMenuItems() {
      const start = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
      const end = "M0,1005S175,995,500,995s500,5,500,5V0H0Z";

      tl.to(".overlay svg path", { duration: 0, visibility: "visible" })
        .to(
          "#hamburger",
          {
            duration: 1.25,
            marginTop: "-5px",
            x: -40,
            y: 20,
            ease: "power4",
            onComplete: function () {
              console.log("Animation Completed!");
            },
          },
          "<"
        )
        .to(
          "#hamburger span",
          { duration: 1, background: "#F4FF00", ease: "power2" },
          "<"
        )
        .to(
          spanBefore,
          { duration: 1, ease: "power2", background: "#F4FF00" },
          "<"
        )
        .to(path, { duration: 0.8, attr: { d: start }, ease: "power2.in" }, "<")
        .to(
          path,
          { duration: 0.8, attr: { d: end }, ease: "power1.out" },
          "-=0.5"
        )
        .to(".menu", { duration: 1, visibility: "visible" }, "-=0.4")
        .to(
          ".menu-item > a",
          {
            duration: 1,
            top: 0,
            ease: "power4.out",
            stagger: { amount: 0.3 },
          },
          "<"
        )
        .eventCallback("onReverseComplete", () => {
          // Code to make ShopHeader reappear when reverse animation is complete
          setClicked(false);
          console.log("Reverse Animation Complete");
          // You can add logic here to show the ShopHeader
          // For example, set a state or manipulate the ShopHeader directly
        })
        .reverse();
    }

    revealMenuItems();

    const toggleBtn = document.getElementById("hamburger");

    toggleBtn.onclick = function (e) {
      toggleBtn.classList.toggle("active");
      setClicked(true); // Toggle clicked state
      if (!tl.isActive()) {
        tl.reversed(!tl.reversed());
        console.log("Button Clicked!");
      }
    };

    return () => {
      // Clean up when the component unmounts
      toggleBtn.onclick = null;
      tl.kill();
    };
  }, [setClicked]);

  useEffect(() => {
    if (cookies.jwt && !userInfo) {
      const getUserInfo = async () => {
        try {
          const {
            data: { user },
          } = await axios.post(
            GET_USER_INFO,
            {},
            {
              headers: {
                Authorization: `Bearer ${cookies.jwt}`,
              },
            }
          );
          console.log({ user });
          let projectedUserInfo = { ...user };
          if (user.image) {
            projectedUserInfo = {
              ...projectedUserInfo,
              imageName: HOST + "/" + user.image,
            };
          }
          delete projectedUserInfo.image;
          dispatch({
            type: reducerCases.SET_USER,
            userInfo: projectedUserInfo,
          });
          setIsLoaded(true);
          if (user.isProfileInfoSet === false) {
            router.push("/profile");
          }
        } catch (err) {
          console.log(err);
        }
      };
      getUserInfo();
    } else {
      setIsLoaded(true);
    }
  }, [cookies, userInfo]);

  return (
    <div className="navbar">
      {isFixed ? <div className="bg-[#1e1e1e] w-[100vw] h-[8rem]"></div> : ""}
      <a href="/">
        <Image
          src={Logo}
          alt="Logo"
          className="logo absolute top-0 left-0 w-[100px] p-4 m-[2em] mt-[3rem] z-[2] xs:max-md:top-[-0.5rem] xs:max-md:w-[80px]"
        ></Image>
      </a>
      <div className="btn" id="toggle-btn">
        <div id="hamburger">
          <span></span>
        </div>
      </div>
      <div className={`overlay ${!clicked ? "w-[99vw] h-[100vh]" : ""}`}>
        <svg viewBox="0 0 1000 1000" className="animate w-full" fill="#fff">
          <path d="M0 2S715 1 500 1s500 1 500 1V0H0Z"></path>
        </svg>
      </div>
      <div className="menu">
        <div className="primary-menu">
          <div className="menu-container">
            <div className="wrapper">
              <div className="menu-item">
                <a href="/">
                  <span>I</span>Home
                </a>
                <div className="menu-item-revealer"></div>
              </div>
              <div className="menu-item">
                <a href="/ourservices">
                  <span>II</span>Our Work
                </a>
                <div className="menu-item-revealer"></div>
              </div>
              <div className="menu-item">
                <a href="/shop">
                  <span>III</span>Shop
                </a>
                <div className="menu-item-revealer"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="secondary-menu">
          <div className="menu-container">
            <div className="wrapper">
              <div className="menu-item">
                <a href="/contact">Contact Us</a>
                <div className="menu-item-revealer"></div>
              </div>
              <div className="menu-item">
                <a href="/games/dino">Time Pass</a>
                <div className="menu-item-revealer"></div>
              </div>
              <div className="menu-item">
                {userInfo === undefined ? (
                  <a href="#login" onClick={handleLogin}>
                    Orders
                  </a>
                ) : (
                  <a
                    href={`${
                      userInfo?.isDesigner ? "/seller/orders" : "/buyer/orders"
                    }`}
                  >
                    Orders
                  </a>
                )}
                <div className="menu-item-revealer"></div>
              </div>
              {/* <div className="menu-item">
                <a href="#">Chat</a>
                <div className="menu-item-revealer"></div>
              </div> */}
            </div>
            <div className="wrapper ">
              <div className="menu-item mt-[50px]">
                {userInfo === undefined ? (
                  <a href="#login" onClick={handleLogin}>
                    Login/Signup
                  </a>
                ) : (
                  <a href={`${userInfo?.isDesigner ? "/seller" : "/profile"}`}>
                    Dashboard
                  </a>
                )}
              </div>
              <div className="menu-item-revealer"></div>
            </div>
          </div>
        </div>
      </div>
      {(showLoginModal || showSignupModal) && (
        <AuthWrapper type={showLoginModal ? "login" : "signup"} />
      )}
    </div>
  );
};

export default Navbar;
