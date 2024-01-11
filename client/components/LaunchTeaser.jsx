import Image from "next/image";
import React from "react";
import Logo from "../public/DZNS_Logo.png";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
  isPlaying: true,
  size: 120,
  strokeWidth: 6,
};

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

const LaunchTeaser = () => {
  const now = new Date();
  const tomorrow = new Date(now);
  tomorrow.setDate(now.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);

  const stratTime = Math.floor(now.getTime() / 1000); // current time in seconds
  const endTime = Math.floor(tomorrow.getTime() / 1000);

  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;
  return (
    <>
      <div className="absolute w-[100vw] h-[100vh] bg-black opacity-50"></div>
      <div className="w-[100vw] h-[100vh] bg-home-bg bg-cover bg-no-repeat bg-center overflow-hidden">
        <Image
          src={Logo}
          width={80}
          height={50}
          alt="Logo"
          className="absolute top-8 left-5"
        />
        <h1 className="w-full flex justify-center items-center font-extrabold text-[#F4FF00] relative top-[40%] text-[1.6rem] left-10 max-sm:left-8 max-xs:left-1 max-xs:top-[25%] leading-8 text-center">
          You really thought <br /> this was it?
        </h1>
        <div className="flex gap-5 absolute xxl:top-[45rem] xxl:left-[41%] xl:top-[25rem] xl:left-[35%] lg:top-[22rem] lg:left-[27%] md:top-[22rem] md:left-[19%] max-xs:top-[18.5rem] max-sm:left-[18%] max-xs:grid max-xs:grid-cols-2 max-xs:left-[16%]">
          <CountdownCircleTimer
            {...timerProps}
            colors="#F4FF00"
            duration={daysDuration}
            initialRemainingTime={remainingTime}
          >
            {({ elapsedTime, color }) => (
              <span
                style={{ color, fontSize: "20px" }}
                className="xxl:text-[1.3rem] text-center"
              >
                {renderTime("days", getTimeDays(daysDuration - elapsedTime))}
              </span>
            )}
          </CountdownCircleTimer>
          <CountdownCircleTimer
            {...timerProps}
            colors="#F4FF00"
            duration={daySeconds}
            initialRemainingTime={remainingTime % daySeconds}
            onComplete={(totalElapsedTime) => ({
              shouldRepeat: remainingTime - totalElapsedTime > hourSeconds,
            })}
          >
            {({ elapsedTime, color }) => (
              <span
                style={{ color, fontSize: "20px" }}
                className="xxl:text-[1.3rem] text-center"
              >
                {renderTime("hours", getTimeHours(daySeconds - elapsedTime))}
              </span>
            )}
          </CountdownCircleTimer>
          <CountdownCircleTimer
            {...timerProps}
            colors="#F4FF00"
            duration={hourSeconds}
            initialRemainingTime={remainingTime % hourSeconds}
            onComplete={(totalElapsedTime) => ({
              shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds,
            })}
          >
            {({ elapsedTime, color }) => (
              <span
                style={{ color, fontSize: "20px" }}
                className="xxl:text-[1.3rem] text-center"
              >
                {renderTime(
                  "minutes",
                  getTimeMinutes(hourSeconds - elapsedTime)
                )}
              </span>
            )}
          </CountdownCircleTimer>
          <CountdownCircleTimer
            {...timerProps}
            colors="#F4FF00"
            duration={minuteSeconds}
            initialRemainingTime={remainingTime % minuteSeconds}
            onComplete={(totalElapsedTime) => ({
              shouldRepeat: remainingTime - totalElapsedTime > 0,
            })}
          >
            {({ elapsedTime, color }) => (
              <span
                style={{ color, fontSize: "20px" }}
                className="xxl:text-[1.3rem] text-center"
              >
                {renderTime("seconds", getTimeSeconds(elapsedTime))}
              </span>
            )}
          </CountdownCircleTimer>
        </div>
      </div>
    </>
  );
};

export default LaunchTeaser;
