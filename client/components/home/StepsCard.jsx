import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger from gsap
import { useCookies } from "react-cookie";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const StepsCard = () => {
  const [cookies] = useCookies();
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 2500px)");
    gsap.delayedCall(!cookies.hasVisited ? 6.5 : 0, () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#steps",
          //   markers: true,
          start: "28% 50%",
          end: "200% 50%",
          scrub: 2,
          pin: true,
        },
      });
      tl.to(
        ".textSteps",
        {
          top: "-20%",
        },
        "a"
      )
        .to(
          "#card-one",
          {
            top: "20%",
          },
          "a"
        )
        .to(
          "#card-two",
          {
            top: "130%",
          },
          "a"
        )
        .to(
          "#card-two",
          {
            top: "22%",
          },
          "b"
        )
        .to(
          "#card-one",
          {
            width: "45%",
            height: "45vh",
          },
          "b"
        )
        .to(
          "#textInside",
          mediaQuery.matches
            ? {
                fontSize: "2.8rem",
                marginTop: "13rem",
                marginLeft: "13rem",
              }
            : {
                fontSize: "2rem",
                marginTop: "5rem",
                marginLeft: "8rem",
              },
          "b"
        )
        .to(
          "#stepText",
          mediaQuery.matches
            ? {
                fontSize: "1.5rem",
                translateX: "-33.5rem",
                translateY: "20rem",
              }
            : {
                fontSize: "1.5rem",
                translateX: "-20rem",
                translateY: "12rem",
              },
          "b"
        )
        .to(
          "#card-three",
          {
            top: "130%",
          },
          "b"
        )
        .to(
          "#card-three",
          {
            top: "24%",
          },
          "c"
        )
        .to(
          "#card-two",
          {
            width: "50%",
            height: "50vh",
          },
          "c"
        )
        .to(
          "#textInside2",
          mediaQuery.matches
            ? {
                fontSize: "3rem",
                marginTop: "15rem",
                marginLeft: "10rem",
              }
            : {
                fontSize: "2.2rem",
                marginTop: "5rem",
                marginLeft: "3rem",
              },
          "c"
        )
        .to(
          "#stepText2",
          mediaQuery.matches
            ? {
                fontSize: "1.5rem",
                translateX: "37.5rem",
                translateY: "20rem",
              }
            : {
                fontSize: "1.5rem",
                translateX: "22.5rem",
                translateY: "14rem",
              },
          "c"
        )
        .to(
          "#card-four",
          {
            top: "130%",
          },
          "c"
        )
        .to(
          "#card-four",
          {
            top: "26%",
          },
          "d"
        )
        .to(
          "#card-three",
          {
            width: "55%",
            height: "55vh",
          },
          "d"
        )
        .to(
          "#textInside3",
          mediaQuery.matches
            ? {
                fontSize: "2.8rem",
                marginTop: "15rem",
                marginLeft: "13rem",
              }
            : {
                fontSize: "2.4rem",
                marginTop: "5rem",
                marginLeft: "8rem",
              },
          "d"
        )
        .to(
          "#stepText3",
          mediaQuery.matches
            ? {
                fontSize: "1.5rem",
                translateX: "-41rem",
                translateY: "24rem",
              }
            : {
                fontSize: "1.5rem",
                translateX: "-24.5rem",
                translateY: "14rem",
              },
          "d"
        )
        .to(
          "#card-five",
          {
            top: "130%",
          },
          "d"
        )
        .to(
          "#card-five",
          {
            top: "28%",
          },
          "e"
        )
        .to(
          "#card-four",
          {
            width: "60%",
            height: "60vh",
          },
          "e"
        )
        .to(
          "#textInside4",
          mediaQuery.matches
            ? {
                fontSize: "3rem",
                marginTop: "15.5rem",
                marginLeft: "12rem",
              }
            : {
                fontSize: "2.6rem",
                marginTop: "5rem",
                marginLeft: "4rem",
              },
          "e"
        )
        .to(
          "#stepText4",
          mediaQuery.matches
            ? {
                fontSize: "1.5rem",
                translateX: "45rem",
                translateY: "23rem",
              }
            : {
                fontSize: "1.5rem",
                translateX: "26.5rem",
                translateY: "14rem",
              },
          "e"
        )
        .to(
          "#card-six",
          {
            top: "130%",
          },
          "e"
        )
        .to(
          "#card-six",
          {
            top: "30%",
          },
          "f"
        )
        .to(
          "#card-five",
          {
            width: "65%",
            height: "65vh",
          },
          "f"
        )
        .to(
          "#textInside5",
          mediaQuery.matches
            ? {
                fontSize: "3.5rem",
                marginTop: "16rem",
                marginLeft: "17rem",
              }
            : {
                fontSize: "3rem",
                marginTop: "8rem",
                marginLeft: "10rem",
              },
          "f"
        )
        .to(
          "#stepText5",
          mediaQuery.matches
            ? {
                fontSize: "1.5rem",
                translateX: "-33.5rem",
                translateY: "26rem",
              }
            : {
                fontSize: "1.5rem",
                translateX: "-20.5rem",
                translateY: "19rem",
              },
          "f"
        )
        .to(
          "#card-seven",
          {
            top: "130%",
          },
          "f"
        )
        .to(
          "#card-seven",
          {
            top: "32%",
          },
          "g"
        )
        .to(
          "#card-six",
          {
            width: "70%",
            height: "70vh",
          },
          "g"
        )
        .to(
          "#textInside6",
          mediaQuery.matches
            ? {
                fontSize: "4.2rem",
                marginTop: "17rem",
                marginLeft: "15rem",
              }
            : {
                fontSize: "3.2rem",
                marginTop: "5rem",
                marginLeft: "4rem",
              },
          "g"
        )
        .to(
          "#stepText6",
          mediaQuery.matches
            ? {
                fontSize: "1.5rem",
                translateX: "52rem",
                translateY: "28rem",
              }
            : {
                fontSize: "1.5rem",
                translateX: "30.5rem",
                translateY: "14rem",
              },
          "g"
        )
        .to(
          "#card-eight",
          {
            top: "130%",
          },
          "g"
        )
        .to(
          "#card-eight",
          {
            top: "34%",
          },
          "h"
        )
        .to(
          "#card-seven",
          {
            width: "75%",
            height: "75vh",
          },
          "h"
        )
        .to(
          "#textInside7",
          mediaQuery.matches
            ? {
                fontSize: "3.5rem",
                marginTop: "19rem",
                marginLeft: "19rem",
              }
            : {
                fontSize: "3rem",
                marginTop: "8rem",
                marginLeft: "10rem",
              },
          "h"
        )
        .to(
          "#stepText7",
          mediaQuery.matches
            ? {
                fontSize: "1.5rem",
                translateX: "-54.5rem",
                translateY: "28rem",
              }
            : {
                fontSize: "1.5rem",
                translateX: "-32.5rem",
                translateY: "19rem",
              },
          "h"
        );

      // .to(
      //   "#card-four",
      //   {
      //     top: "58%",
      //   },
      //   "d"
      // )
      // .to(
      //   "#card-three",
      //   {
      //     width: "75%",
      //     height: "75vh",
      //   },
      //   "d"
      // )
      // .to(
      //   "#card-four",
      //   {
      //     top: "130%",
      //   },
      //   "d"
      // );
    });
  }, []);
  return (
    <div id="steps">
      <div className="textSteps">
        <p className="text-2xl">Do you want to know</p>
        <h1 className="w-full flex justify-center text-6xl font-bold">
          How DZNS Studio Works?
        </h1>
        <p className="mt-[2rem] text-[#F4FF00] text-xl font-bold">
          Scroll down to find out
        </p>
      </div>
      <div className="cards" id="card-one">
        <h1
          className="w-full text-black text-center -translate-x-[35.5rem] translate-y-[22rem] text-4xl font-bold -rotate-90 xxl:-translate-x-[60rem] xxl:translate-y-[38rem]"
          id="stepText"
        >
          Step 1{/* Akira Font */}
        </h1>
        <h1
          className="text-6xl w-[70%] text-center mt-[10rem] ml-[13.2rem] font-bold xxl:mt-[26rem] xxl:ml-[23rem] xxl:text-7xl"
          id="textInside"
        >
          Choose the category of service from 'our shop'
        </h1>
      </div>
      <div className="cards" id="card-two">
        <h1
          className="w-full text-white text-center translate-x-[35.5rem] translate-y-[22rem] text-3xl font-bold rotate-90 xxl:translate-x-[60rem] xxl:translate-y-[38rem]"
          id="stepText2"
        >
          Step 2
        </h1>
        <h1
          className="text-6xl w-[70%] text-center mt-[10rem] ml-[7rem] text-black font-bold xxl:mt-[26rem] xxl:ml-[16rem] xxl:text-7xl"
          id="textInside2"
        >
          Choose the type of service
        </h1>
      </div>
      <div className="cards" id="card-three">
        <h1
          className="w-full text-black text-center -translate-x-[35.5rem] translate-y-[22rem] text-3xl font-bold -rotate-90 xxl:-translate-x-[60rem] xxl:translate-y-[38rem]"
          id="stepText3"
        >
          Step 3
        </h1>
        <h1
          className="text-6xl w-[70%] text-center mt-[10rem] ml-[13.2rem] font-bold xxl:mt-[26rem] xxl:ml-[23rem] xxl:text-7xl"
          id="textInside3"
        >
          Fill in the form with precise details and email address.
        </h1>
      </div>
      <div className="cards" id="card-four">
        <h1
          className="w-full text-white text-center translate-x-[35.5rem] translate-y-[22rem] text-3xl font-bold rotate-90 xxl:translate-x-[60rem] xxl:translate-y-[38rem]"
          id="stepText4"
        >
          Step 4
        </h1>
        <h1
          className="text-6xl w-[70%] text-center mt-[10rem] ml-[7rem] text-black font-bold xxl:mt-[26rem] xxl:ml-[16rem] xxl:text-7xl"
          id="textInside4"
        >
          Pay advance of Rs.500 via one of the payment methods available.
        </h1>
      </div>
      <div className="cards" id="card-five">
        <h1
          className="w-[70%] text-black text-center -translate-x-[24rem] translate-y-[22rem] text-3xl font-bold -rotate-90 xxl:-translate-x-[40rem] xxl:translate-y-[38rem]"
          id="stepText5"
        >
          Step 5
        </h1>
        <h1
          className="text-6xl w-[70%] text-center mt-[10rem] ml-[13.2rem] font-bold xxl:mt-[26rem] xxl:ml-[23rem] xxl:text-7xl"
          id="textInside5"
        >
          A link for a direct chat with a designer from DZNS will be sent to the
          registered email address
        </h1>
      </div>
      <div className="cards" id="card-six">
        <h1
          className="w-full text-white text-center translate-x-[35.5rem] translate-y-[22rem] text-3xl font-bold rotate-90 xxl:translate-x-[60rem] xxl:translate-y-[38rem]"
          id="stepText6"
        >
          Step 6
        </h1>
        <h1
          className="text-6xl w-[70%] text-center mt-[10rem] ml-[7rem] text-black font-bold xxl:mt-[26rem] xxl:ml-[16rem] xxl:text-7xl"
          id="textInside6"
        >
          Chat with the designer and exchange ideas and details
        </h1>
      </div>
      <div className="cards" id="card-seven">
        <h1
          className="w-full text-black text-center -translate-x-[35.5rem] translate-y-[22rem] text-3xl font-bold -rotate-90 xxl:-translate-x-[59rem] xxl:translate-y-[38rem]"
          id="stepText7"
        >
          Step 7
        </h1>
        <h1
          className="text-6xl w-[70%] text-center mt-[10rem] ml-[13.2rem] font-bold xxl:mt-[26rem] xxl:ml-[23rem] xxl:text-7xl"
          id="textInside7"
        >
          Make the payment
        </h1>
      </div>
      <div className="cards" id="card-eight">
        <h1
          className="w-full text-white text-center translate-x-[35.5rem] translate-y-[22rem] text-3xl font-bold rotate-90 xxl:translate-x-[60rem] xxl:translate-y-[38rem]"
          id="steptext8"
        >
          Step 8
        </h1>
        <h1
          className="text-6xl w-[70%] text-center mt-[10rem] ml-[7rem] text-black font-bold xxl:mt-[26rem] xxl:ml-[16rem] xxl:text-7xl"
          id="textInside8"
        >
          Receive the product
        </h1>
      </div>
    </div>
  );
};

export default StepsCard;
