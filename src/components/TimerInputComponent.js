import React from "react";

export default function TimerInputComponent({
  hoursInput,
  setHoursInput,
  minutesInput,
  setMinutesInput,
  secondsInput,
  setSecondsInput,
}) {
  return (
    <div
      className={`w-full flex flex-row gap-x-6 items-center justify-between`}
    >
      <input
        type={"number"}
        value={hoursInput}
        min={"0"}
        max={"23"}
        onChange={(e) => {
          if (e.target.value <= 23 && e.target.value >= 0) {
            setHoursInput(e.target.value);
          }
        }}
        className={`border border-[#B2B2B2] h-20 w-20 rounded-md text-4xl pl-4`}
      />
      <input
        type={"number"}
        value={minutesInput}
        min={"0"}
        max={"59"}
        onChange={(e) => {
          if (e.target.value <= 59 && e.target.value >= 0) {
            setMinutesInput(e.target.value);
          }
        }}
        className={`border border-[#B2B2B2] h-20 w-20 rounded-md text-4xl pl-4`}
      />
      <input
        type={"number"}
        value={secondsInput}
        min={"0"}
        max={"59"}
        onChange={(e) => {
          if (e.target.value <= 59 && e.target.value >= 0) {
            setSecondsInput(e.target.value);
          }
        }}
        className={`border border-[#B2B2B2] h-20 w-20 rounded-md text-4xl pl-4`}
      />
    </div>
  );
}
