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
      className={`h-screen w-screen flex flex-col justify-center items-center no-scrollbar bg-black`}
    >
      {!startTimer && (
        <div
          className={`flex flex-col items-center w-7/12 md:w-1/4 px-6 py-6 border border-white rounded-md`}
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
            className={`h-16 w-16 mt-8 cursor-pointer text-white`}
            onClick={() => {
              setMilliseconds(
                hoursInput * 60 * 60 * 1000 +
                  minutesInput * 60 * 1000 +
                  secondsInput * 1000
              );
              setStartTimer(true);
            }}
          />
        </div>
      )}
      {startTimer && <TimerView timerVal={milliseconds} />}
    </div>
  );
}

export default App;
