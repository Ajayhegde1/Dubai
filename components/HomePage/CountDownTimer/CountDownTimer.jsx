// PomodoroTimer.js
import React, { useState, useEffect } from "react";
import "./HelperCountDown.css";

function CountDownTimer() {
  const [workTime, setWorkTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);
  const [minutes, setMinutes] = useState(workTime);
  const [seconds, setSeconds] = useState(0);
  const [isWorking, setIsWorking] = useState(true);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            if (isWorking) {
              setMinutes(breakTime);
              setIsWorking(false);
            } else {
              setMinutes(workTime);
              setIsWorking(true);
            }
          } else {
            setMinutes((prevMinutes) => prevMinutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, minutes, seconds, isWorking, workTime, breakTime]);

  const startTimer = () => {
    setIsActive(true);
  };

  const resetTimer = () => {
    setIsActive(false);
    setIsWorking(true);
    setMinutes(workTime);
    setSeconds(0);
  };

  return (
    <div className="pomodoro-container">
      <h1 className="pomodoro-title">Pomodoro Timer</h1>
      <div className="pomodoro-painel">
        <p className={`pomodoro-text ${isWorking ? "active" : ""}`}>Work</p>
        <p className={`pomodoro-text ${!isWorking ? "active" : ""}`}>Break</p>
      </div>
      <div className="pomodoro-timer">
        <div className="pomodoro-circle">
          <div className="pomodoro-time">
            <p className="pomodoro-time-text">
              {minutes < 10 ? `0${minutes}` : minutes}:
              {seconds < 10 ? `0${seconds}` : seconds}
            </p>
          </div>
        </div>
      </div>
      <div className="pomodoro-controls">
        <button
          className="pomodoro-button"
          onClick={startTimer}
          disabled={isActive}
        >
          Start
        </button>
        <button
          className="pomodoro-button"
          onClick={resetTimer}
          disabled={!isActive}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default CountDownTimer;
