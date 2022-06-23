import React, { useEffect, useState } from "react";

const SetTime = () => {
  const [start, setStart] = useState(false);
  const [running, setRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    while (start) {
      let timer;
      timer = setInterval(() => {
        setSeconds(seconds + 1);
        if (seconds === 59) {
          setMinutes(minutes + 1);
          setSeconds(0);
        }
      }, 500);
      return () => clearInterval(timer);
    }
  });

  const go = () => {
    setStart(!start);
    setRunning(true);
  };

  const restart = () => {
    setRunning(false);
    setStart(false);
    setSeconds(0);
    setMinutes(0);
  };

  const genText = () => {
    if (start && running) {
      return "Pause";
    }
    if (!start && running) {
      return "Resume";
    }
    return "Start";
  };

  return (
    <>
      <div>SetTime</div>
      <div className="container">
        <h1>
          {minutes}:{seconds}
        </h1>
        <button onClick={go}> {genText()}</button>
        <button onClick={restart}> Restart</button>
      </div>
    </>
  );
};

export default SetTime;