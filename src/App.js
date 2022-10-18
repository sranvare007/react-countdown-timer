import "./App.css";
import TimerInputComponent from "./components/TimerInputComponent";
import { AiFillPlayCircle } from "react-icons/ai/index";
import { useState } from "react";
import TimerView from "./components/TimerView";

function App() {
  const [startTimer, setStartTimer] = useState(false);
  const [hoursInput, setHoursInput] = useState("00");
  const [minutesInput, setMinutesInput] = useState("00");
  const [secondsInput, setSecondsInput] = useState("00");

  const [milliseconds, setMilliseconds] = useState(0);
  return (
    <div
      className={`h-screen w-screen flex flex-col justify-center items-center no-scrollbar bg-[#e3edf7]`}
    >
      {!startTimer && (
        <div className={`relative h-[500px] w-[500px] rounded-full`}>
          <div
            className={`h-[500px] w-[500px] rounded-full p-[16px] shadow-outer bg-gradient-to-r from-purple-500 to-pink-500`}
          >
            <div
              className={`flex justify-center items-center h-[436px] w-[436px] rounded-full bg-[#e3edf7] shadow-inner`}
            >
              <div
                className={`flex flex-col items-center justify-center font-extrabold`}
              >
                <TimerInputComponent
                  hoursInput={hoursInput}
                  setHoursInput={setHoursInput}
                  minutesInput={minutesInput}
                  setMinutesInput={setMinutesInput}
                  secondsInput={secondsInput}
                  setSecondsInput={setSecondsInput}
                />
                <AiFillPlayCircle
                  className={`h-16 w-16 mt-8 cursor-pointer text-white shadow-outer rounded-full`}
                  onClick={() => {
                    if (
                      parseInt(hoursInput) > 0 ||
                      parseInt(minutesInput) > "00" ||
                      parseInt(secondsInput) > "00"
                    ) {
                      setMilliseconds(
                        hoursInput * 60 * 60 * 1000 +
                          minutesInput * 60 * 1000 +
                          secondsInput * 1000
                      );
                      setStartTimer(true);
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {startTimer && (
        <TimerView timerVal={milliseconds} setStartTimer={setStartTimer} />
      )}
    </div>
  );
}

export default App;
