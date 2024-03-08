import { homePageStyles } from "@/app/Styles/HomePageStyles";
import React, { useState, useEffect } from "react";
import { AccordionRightSideDiv } from "../AccordionRightSideDiv/AccordionRightSideDiv";

export function RightSideDiv() {
  const targetDate = new Date("January 1, 2025 00:00:00"); // Target date: New Year's Day 2025

  const calculateTimeLeft = () => {
    const difference = targetDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000); // Update every second

    return () => clearInterval(timer);
  });

  return (
    <>
      <div className="countdown-timer">
        <div className="countdown-days flex justify-center">
          <h2 className={`${homePageStyles.countDownStyle} flex items-end`}>
            {timeLeft.days}
          </h2>

          <div className="flex items-center ">
            {" "}
            <p className="text-[25px] font-[500]">Days</p>
          </div>
        </div>
        <div
          className={`${homePageStyles.countDownStyleSmallerIntervals}countdown-intervals flex justify-center`}
        >
          <div className="flex">
            <h3>{timeLeft.hours}</h3>
            <p>:</p>
          </div>
          <div className="flex">
            <h3>{timeLeft.minutes}</h3>
            <p>:</p>
          </div>
          <div className="flex">
            <h3>
              {timeLeft.seconds < 10
                ? `0${timeLeft.seconds}`
                : timeLeft.seconds}
            </h3>
          </div>
        </div>
      </div>
      <AccordionRightSideDiv />
    </>
  );
}
