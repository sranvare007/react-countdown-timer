import React, { useEffect } from "react";

export default function TimerScroll(props) {
  const timerArray = Array.from(Array(props.limit).keys());

  useEffect(() => {
    document
      .getElementById("scroll-container")
      .addEventListener("scroll", (scroll) => {
        const topOffset = document.getElementById("scroll-container").scrollTop;
        const num = topOffset % 49;
        console.log(`Num: ${num * 49}`);
        document.getElementById("scroll-container").scrollTo(0, num * 49);
      });
  }, []);

  return (
    <div
      className={`flex flex-col items-center h-40 overflow-y-scroll bg-blue-300`}
      id="scroll-container"
    >
      {timerArray.map((item, index) => (
        <p key={index} className={`p-3 text-white border-t border-white`}>
          {item}
        </p>
      ))}
      <div
        className={`fixed h-10 w-10 mt-1 bg-red-700 border-2 border-white`}
      ></div>
    </div>
  );
}
