import React, { useEffect, useState } from "react";
import { ProgressFill } from "./ProgressFill";

export default function TimerView(props) {
  const [milliseconds, setMilliseconds] = useState(props.timerVal);

  const [hoursRemaining, setHoursRemaining] = useState("00");
  const [minutesRemaining, setMinutesRemaining] = useState("00");
  const [secondsRemaining, setSecondsRemaining] = useState("00");

  useEffect(() => {
    let timeout;
    if (milliseconds >= 0) {
      timeout = setInterval(() => {
        var msec = milliseconds;
        var hh = Math.floor(msec / 1000 / 60 / 60);
        msec -= hh * 1000 * 60 * 60;
        var mm = Math.floor(msec / 1000 / 60);
        msec -= mm * 1000 * 60;
        var ss = Math.floor(msec / 1000);
        msec -= ss * 1000;

        setHoursRemaining(
          hh.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })
        );
        setMinutesRemaining(
          mm.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })
        );
        setSecondsRemaining(
          ss.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })
        );
        setMilliseconds(milliseconds - 1000);
      }, 1000);
    }
    return () => clearTimeout(timeout);
  }, [milliseconds]);

  return (
    <div className={`relative h-72 w-72 rounded-full`}>
      <div className={`h-72 w-72 rounded-full bg-white p-[16px] shadow-outer`}>
        <div
          className={`flex justify-center items-center h-64 w-64 rounded-full bg-white shadow-inner`}
        >
          <div
            className={`flex flex-row items-center justify-center font-extrabold`}
          >
            <p className={`w-22 text-5xl text-center`}>{hoursRemaining}</p>
            <p className={`text-5xl mx-1`}>:</p>
            <p className={`w-22 text-5xl text-center`}>{minutesRemaining}</p>
            <p className={`text-5xl mx-1`}>:</p>
            <p className={`w-22 text-5xl text-center`}>{secondsRemaining}</p>
          </div>
        </div>
      </div>
      <div className={`absolute h-72 w-72 top-0 left-0`}>
        <ProgressFill initVal={props.timerVal} timerVal={milliseconds} />
      </div>
    </div>
  );
}
