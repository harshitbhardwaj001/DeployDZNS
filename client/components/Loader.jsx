import React from "react";
import gsap from "gsap";
import { useEffect } from "react";

const Loader = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power4.out", duration: 0.7 },
    });
    const paths = document.querySelectorAll("#Dots .cls-1");
    
    gsap.to("g", { autoAlpha: 1 });

    gsap.to("svg", {
      scale: 1.2,
      duration: 4,
    });
    gsap.to("#Dots .cls-1", {
      visibility: "hidden",
      fill: "#191919",
    })
    paths.forEach((path, index) => {
      gsap.to(path, {
        duration: 1,
        repeat: -1,
        ease: "power2.in",
        delay: .8 + index * .1, // Stagger the delay
        fill: "#F4FF00",
      });
    })
    tl.from("#TextTop .cls-1", {
      yPercent: -200,
      stagger: 0.03,
      skewY: 60,
      skewX: 30,
      scaleY: 0.9,
      opacity: 0,
    })
      .from(
        "#TextBottom .cls-1",
        {
          yPercent: 215,
          stagger: 0.03,
          skewY: 60,
          skewX: 30,
          scaleY: 0.5,
          opacity: 0,
        },
        "-=.7"
      )

      .to("#Dots .cls-1", {
        visibility: "visible",
      })
    
      .to(
        "#TextTop .cls-1",
        {
          skewY: 10,
          y:100,
          stagger: 0.02,
          opacity: 0,
          duration: 0.15,
        },
        "+=.5"
      )
      .to(
        "#TextBottom .cls-1",
        {
            skewY: 10,
            y:-100,
            stagger: 0.02,
            opacity: 0,
            duration: 0.15,
        },
        "<"
      )
      .to("#Dots", {
        opacity: 0,
        ease: "bounce.out"
      }, "<")
      .from(
        "#Arrow .cls-1",
        {
          xPercent: -107,
          opacity: 0,
          ease: "elastic.out(1, .5)",
        },
        "<"
      )
      .to(
        "#Arrow",
        {
          xPercent: 300,
          duration: 1.8,
          ease: "elastic.out(1, .3)",
        },
        "<"
      )
      .to(
        "#Arrow",
        {
          rotateZ: -90,
          transformOrigin: "center",
        },
        "-=.1"
      )
      .to(
        "#Arrow",
        {
          yPercent: 500,
          duration: 1.3,
        },
        "-=.5"
      )
      .to(
        "#Arrow",
        {
          yPercent: -3200,
          ease: "back.in(1)",
          duration: 0.5,
        },
        "-=.3"
      )
      .to(
        ".reveal",
        {
          scaleY: 0,
          transformOrigin: "top",
          duration: 1.2,
          ease: "power4.inOut",
        },
        "-=.6"
      );
  });
  return (
    <div className="grid justify-center place-content-center h-[100vh] overflow-visible z-2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1424.36 246.97" className="w-[50vw] overflow-visible">
        <defs>
          <style>{`.cls-1{fill:#F4FF00;}`}</style>
        </defs>
        <g id="Arrow" className="invisible">
          <rect className="cls-1" y="104.79" width="126" height="39" />
          <polygon
            className="cls-1"
            points="188.14 124.47 104.65 172.67 104.65 76.27 188.14 124.47"
          />
        </g>
        <g id="TextTop" className="invisible">
          <path
            className="cls-1"
            d="M211,45.66h22.65v15H211V91.41h28.5v15h-45V1.41h45v15H211Z"
            transform="translate(0 -0.21)"
          />
          <path
            className="cls-1"
            d="M266.78,30.36v76.05H251.93V1.41h20.7l16.95,62.85V1.41h14.7v105H287.33Z"
            transform="translate(0 -0.21)"
          />
          <path
            className="cls-1"
            d="M313.73,1.41h51v15H347.48v90H331v-90H313.73Z"
            transform="translate(0 -0.21)"
          />
          <path
            className="cls-1"
            d="M390.82,45.66h22.65v15H390.82V91.41h28.5v15h-45V1.41h45v15h-28.5Z"
            transform="translate(0 -0.21)"
          />
          <path
            className="cls-1"
            d="M466.42,106.41q-.3-1.05-.6-2a15.18,15.18,0,0,1-.52-2.25,27.68,27.68,0,0,1-.3-3.45c-.05-1.4-.08-3.15-.08-5.25V77q0-7.35-2.55-10.35t-8.25-3h-5.7v42.75h-16.5V1.41h24.9q12.9,0,18.68,6t5.77,18.15v8.25q0,16.2-10.8,21.3a14.78,14.78,0,0,1,8.63,8.33,37.57,37.57,0,0,1,2.32,14v16.2a67.94,67.94,0,0,0,.3,6.83,21.93,21.93,0,0,0,1.5,5.92Zm-18-90V48.66h6.45a10.39,10.39,0,0,0,7.28-2.4q2.63-2.4,2.62-8.7V27.21q0-5.7-2-8.25t-6.38-2.55Z"
            transform="translate(0 -0.21)"
          />
          <path
            className="cls-1"
            d="M494.62,1.41h16.5v105h-16.5Z"
            transform="translate(0 -0.21)"
          />
          <path
            className="cls-1"
            d="M540.22,30.36v76.05H525.37V1.41h20.7L563,64.26V1.41h14.7v105h-17Z"
            transform="translate(0 -0.21)"
          />
          <path
            className="cls-1"
            d="M616.72,47.91h23.1v33.3q0,12.75-6.23,19.58t-18.37,6.82q-12.15,0-18.38-6.82t-6.22-19.58V26.61q0-12.75,6.22-19.57T615.22.21Q627.37.21,633.59,7t6.23,19.57v10.2h-15.6V25.56q0-5.7-2.33-8a9.48,9.48,0,0,0-12.45,0q-2.33,2.33-2.32,8v56.7q0,5.7,2.32,7.95a9.74,9.74,0,0,0,12.45,0q2.33-2.25,2.33-7.95V62.91h-7.5Z"
            transform="translate(0 -0.21)"
          />
          <path
            className="cls-1"
            d="M673.72,1.41h51v15H707.47v90H691v-90H673.72Z"
            transform="translate(0 -0.21)"
          />
          <path
            className="cls-1"
            d="M750.82,106.41h-16.5V1.41h16.5v45h18.75v-45h16.8v105h-16.8v-45H750.82Z"
            transform="translate(0 -0.21)"
          />
          <path
            className="cls-1"
            d="M817.26,45.66h22.66v15H817.26V91.41h28.5v15h-45V1.41h45v15h-28.5Z"
            transform="translate(0 -0.21)"
          />
          <path
            className="cls-1"
            d="M920.61,50.46l-6,56H892l-11.7-105h16l8.85,82.8,8-82.8H929l8.25,83.4,8.55-83.4h14.4l-11.7,105h-21.9Z"
            transform="translate(0 -0.21)"
          />
          <path
            className="cls-1"
            d="M969.51,26.61Q969.51,13.86,976,7T994.56.21q12.15,0,18.6,6.83t6.45,19.57v54.6q0,12.75-6.45,19.58t-18.6,6.82q-12.15,0-18.6-6.82t-6.45-19.58ZM986,82.26q0,5.7,2.33,8a9.51,9.51,0,0,0,12.45,0q2.33-2.33,2.32-8V25.56q0-5.7-2.32-8a9.48,9.48,0,0,0-12.45,0q-2.33,2.33-2.33,8Z"
            transform="translate(0 -0.21)"
          />
          <path
            className="cls-1"
            d="M1067.16,106.41q-.3-1.05-.6-2a15.18,15.18,0,0,1-.52-2.25,27.68,27.68,0,0,1-.3-3.45c-.06-1.4-.08-3.15-.08-5.25V77q0-7.35-2.55-10.35t-8.25-3h-5.7v42.75h-16.5V1.41h24.9q12.9,0,18.68,6T1082,25.56v8.25q0,16.2-10.8,21.3a14.81,14.81,0,0,1,8.63,8.33,37.57,37.57,0,0,1,2.32,14v16.2a67.94,67.94,0,0,0,.3,6.83,21.93,21.93,0,0,0,1.5,5.92Zm-18-90V48.66h6.45a10.39,10.39,0,0,0,7.28-2.4c1.74-1.6,2.62-4.5,2.62-8.7V27.21q0-5.7-2-8.25t-6.38-2.55Z"
            transform="translate(0 -0.21)"
          />
          <path
            className="cls-1"
            d="M1095.36,1.41h16.5v90H1139v15h-43.65Z"
            transform="translate(0 -0.21)"
          />
          <path
            className="cls-1"
            d="M1148.61,1.41h26.1q12.45,0,18.52,6.6t6.08,19.35v53.1q0,12.75-6.08,19.35t-18.52,6.6h-26.1Zm16.5,15v75h9.3a8.31,8.31,0,0,0,6.15-2.25q2.25-2.25,2.25-8V26.61q0-5.7-2.25-7.95a8.31,8.31,0,0,0-6.15-2.25Z"
            transform="translate(0 -0.21)"
          />
          <path
            className="cls-1"
            d="M1236.51,26.61q0-12.75,6.45-19.57t18.6-6.83q12.15,0,18.6,6.83t6.45,19.57v54.6q0,12.75-6.45,19.58t-18.6,6.82q-12.15,0-18.6-6.82t-6.45-19.58ZM1253,82.26q0,5.7,2.32,8a9.51,9.51,0,0,0,12.45,0q2.33-2.33,2.33-8V25.56q0-5.7-2.33-8a9.48,9.48,0,0,0-12.45,0q-2.32,2.33-2.32,8Z"
            transform="translate(0 -0.21)"
          />
          <path
            className="cls-1"
            d="M1316.16,48.06h21.3v15h-21.3v43.35h-16.5V1.41h43.65v15h-27.15Z"
            transform="translate(0 -0.21)"
          />
        </g>
        <g id="Dots" className="invisible">
          <path
            className="cls-1"
            d="M1368.56,231.1V247h-15.9V231.1Z"
            transform="translate(0 -0.21)"
          />
          <path
            className="cls-1"
            d="M1396.46,231.1V247h-15.9V231.1Z"
            transform="translate(0 -0.21)"
          />
          <path
            className="cls-1"
            d="M1424.36,231.1V247h-15.9V231.1Z"
            transform="translate(0 -0.21)"
          />
        </g>
        <g id="TextBottom" className="invisible">
          <path
            className="cls-1"
            d="M194.49,140.83h26.1q12.45,0,18.52,6.6t6.08,19.35v53.1q0,12.75-6.08,19.35t-18.52,6.6h-26.1Zm16.5,15v75h9.3a8.31,8.31,0,0,0,6.15-2.25q2.25-2.25,2.25-8V166q0-5.7-2.25-7.95a8.31,8.31,0,0,0-6.15-2.25Z"
            transform="translate(0 -0.21)"
          />
          <path
            className="cls-1"
            d="M301.44,140.83v14.7l-31.35,75.3h31.35v15h-48.3v-14.7l31.35-75.3H254.64v-15Z"
            transform="translate(0 -0.21)"
          />
          <path
            className="cls-1"
            d="M325.89,169.78v76.05H311v-105h20.7l16.95,62.85V140.83h14.7v105H346.44Z"
            transform="translate(0 -0.21)"
          />
          <path
            className="cls-1"
            d="M373.13,166q0-12.75,6.08-19.57t18.22-6.83q12.15,0,18.23,6.83T421.73,166v3.3h-15.6V165q0-5.7-2.17-8a9.08,9.08,0,0,0-12.15,0q-2.18,2.32-2.18,8a18.61,18.61,0,0,0,2.4,9.53,39.65,39.65,0,0,0,6,7.8q3.6,3.67,7.73,7.35a73.31,73.31,0,0,1,7.72,8,40.85,40.85,0,0,1,6,9.9,32.69,32.69,0,0,1,2.4,13q0,12.75-6.22,19.58T397.28,247q-12.15,0-18.37-6.82t-6.23-19.58v-6.45h15.6v7.5q0,5.7,2.33,7.95a9.74,9.74,0,0,0,12.45,0q2.32-2.25,2.32-7.95a18.57,18.57,0,0,0-2.4-9.52,39.65,39.65,0,0,0-6-7.8q-3.6-3.68-7.72-7.35a73.5,73.5,0,0,1-7.73-8,40.85,40.85,0,0,1-6-9.9A32.69,32.69,0,0,1,373.13,166Z"
            transform="translate(0 -0.21)"
          />
          <path
            className="cls-1"
            d="M479.48,226.48l12.6-85.65h15.15l-16.2,105h-24.6l-16.2-105h16.65Z"
            transform="translate(0 -0.21)"
          />
          <path
            className="cls-1"
            d="M514.88,140.83h16.5v105h-16.5Z"
            transform="translate(0 -0.21)"
          />
          <path
            className="cls-1"
            d="M541.28,166q0-12.75,6.07-19.57t18.23-6.83q12.15,0,18.22,6.83T589.88,166v3.3h-15.6V165q0-5.7-2.18-8A9.07,9.07,0,0,0,560,157c-1.46,1.55-2.18,4.22-2.18,8a18.61,18.61,0,0,0,2.4,9.53,39.65,39.65,0,0,0,6,7.8q3.6,3.67,7.72,7.35a73.4,73.4,0,0,1,7.73,8,40.85,40.85,0,0,1,6,9.9,32.69,32.69,0,0,1,2.4,13q0,12.75-6.23,19.58T565.43,247q-12.15,0-18.38-6.82t-6.22-19.58v-6.45h15.6v7.5q0,5.7,2.32,7.95a9.75,9.75,0,0,0,12.46,0c1.54-1.5,2.32-4.15,2.32-7.95a18.57,18.57,0,0,0-2.4-9.52,39.65,39.65,0,0,0-6-7.8q-3.6-3.68-7.73-7.35a73.41,73.41,0,0,1-7.72-8,40.85,40.85,0,0,1-6-9.9A32.69,32.69,0,0,1,541.28,166Z"
            transform="translate(0 -0.21)"
          />
          <path
            className="cls-1"
            d="M615.23,140.83v81q0,5.7,2.32,7.95a9.74,9.74,0,0,0,12.45,0q2.32-2.25,2.33-7.95v-81h15.6v79.95q0,12.75-6.23,19.58t-18.37,6.82q-12.15,0-18.38-6.82t-6.22-19.58V140.83Z"
            transform="translate(0 -0.21)"
          />
          <path
            className="cls-1"
            d="M712.58,245.83H695.93l-2.85-19.05H672.83L670,245.83H654.83l16.8-105h24.15Zm-37.65-33.3h15.9l-8-53.1Z"
            transform="translate(0 -0.21)"
          />
          <path
            className="cls-1"
            d="M720.23,140.83h16.5v90h27.15v15H720.23Z"
            transform="translate(0 -0.21)"
          />
          <path
            className="cls-1"
            d="M810.83,185.08h22.65v15H810.83v30.75h28.5v15h-45v-105h45v15h-28.5Z"
            transform="translate(0 -0.21)"
          />
          <path
            className="cls-1"
            d="M904.58,140.83l-17.25,51,18.45,54h-17.4l-13.5-41.55-13.65,41.55H845.78l18.45-54-17.25-51h17.1l12.45,38.7,12.75-38.7Z"
            transform="translate(0 -0.21)"
          />
          <path
            className="cls-1"
            d="M938.32,140.83q12.45,0,18.53,6.6t6.07,19.35v13.65q0,12.75-6.07,19.35t-18.53,6.6h-7.8v39.45H914v-105Zm-7.8,15v35.55h7.8a8.12,8.12,0,0,0,6-2.1q2.1-2.1,2.1-7.8V165.73q0-5.7-2.1-7.8a8.12,8.12,0,0,0-6-2.1Z"
            transform="translate(0 -0.21)"
          />
          <path
            className="cls-1"
            d="M987.07,185.08h22.65v15H987.07v30.75h28.5v15h-45v-105h45v15h-28.5Z"
            transform="translate(0 -0.21)"
          />
          <path
            className="cls-1"
            d="M1060.27,245.83q-.3-1.05-.6-2a15.18,15.18,0,0,1-.52-2.25,27.68,27.68,0,0,1-.3-3.45c0-1.4-.08-3.15-.08-5.25v-16.5q0-7.35-2.55-10.35t-8.25-3h-5.7v42.75h-16.5v-105h24.9q12.9,0,18.68,6t5.77,18.15v8.25q0,16.2-10.8,21.3a14.78,14.78,0,0,1,8.63,8.33,37.57,37.57,0,0,1,2.32,14v16.2a67.94,67.94,0,0,0,.3,6.83,21.93,21.93,0,0,0,1.5,5.92Zm-18-90v32.25h6.45a10.39,10.39,0,0,0,7.28-2.4q2.63-2.4,2.62-8.7V166.63q0-5.7-2-8.25t-6.38-2.55Z"
            transform="translate(0 -0.21)"
          />
          <path
            className="cls-1"
            d="M1086.07,140.83h16.5v105h-16.5Z"
            transform="translate(0 -0.21)"
          />
          <path
            className="cls-1"
            d="M1131.07,185.08h22.65v15h-22.65v30.75h28.5v15h-45v-105h45v15h-28.5Z"
            transform="translate(0 -0.21)"
          />
          <path
            className="cls-1"
            d="M1184.47,169.78v76.05h-14.85v-105h20.7l17,62.85V140.83H1222v105h-17Z"
            transform="translate(0 -0.21)"
          />
          <path
            className="cls-1"
            d="M1281.67,206.68v13.95q0,12.75-6.23,19.58T1257.07,247q-12.15,0-18.38-6.82t-6.22-19.58V166q0-12.75,6.22-19.57t18.38-6.83q12.15,0,18.37,6.83t6.23,19.57v10.2h-15.6V165q0-5.7-2.33-8a9.48,9.48,0,0,0-12.45,0q-2.32,2.32-2.32,8v56.7q0,5.7,2.32,7.95a9.74,9.74,0,0,0,12.45,0q2.33-2.25,2.33-7.95v-15Z"
            transform="translate(0 -0.21)"
          />
          <path
            className="cls-1"
            d="M1308.22,185.08h22.65v15h-22.65v30.75h28.5v15h-45v-105h45v15h-28.5Z"
            transform="translate(0 -0.21)"
          />
        </g>
      </svg>

      <div className="reveal absolute h-[100vh] w-full top-0 left-0 z-[-1] bg-[#191919]"></div>
    </div>
  );
};

export default Loader;
