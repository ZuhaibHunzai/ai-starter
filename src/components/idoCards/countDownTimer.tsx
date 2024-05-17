"use client";
import React from "react";
import Countdown, { CountdownRenderProps } from "react-countdown";
const CountdownTimer = () => {
  const targetDate = new Date("2024-06-02T01:00:00Z");

  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: CountdownRenderProps) => {
    if (completed) {
      return <span>Event has started!</span>;
    } else {
      // Render a countdown
      return (
        <div className="flex justify-between mt-4">
          <div className="flex flex-col items-center">
            <h1 className="text-[#8395F9] font-[400] text-[48px] tracking-wide">
              {days}
            </h1>
            <h2>days</h2>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-[#8395F9] font-[400] text-[48px] tracking-wide">
              {hours}
            </h1>
            <h2>hours</h2>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-[#8395F9] font-[400] text-[48px] tracking-wide">
              {minutes}
            </h1>
            <h2>minutes</h2>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-[#8395F9] font-[400] text-[48px] tracking-wide">
              {seconds}
            </h1>
            <h2>seconds</h2>
          </div>
        </div>
      );
    }
  };

  return <Countdown date={targetDate} renderer={renderer} />;
};

export default CountdownTimer;
