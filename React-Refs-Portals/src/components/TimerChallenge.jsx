import { useState } from "react";

export default function TimerChallenge({ title, targetTime }) {
  const [isTimerOn, setTimerValue] = useState(false);

  function onClickHandler() {
    setTimerValue((prevValue) => !prevValue);
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 && "s"}
      </p>
      <p>
        <button onClick={onClickHandler}>
          {isTimerOn ? "Stop" : "Start"}
        </button>
      </p>
      <p className={isTimerOn && "active"}>
        {isTimerOn ? "Timer is On" : "Timer Inactive"}
      </p>
    </section>
  );
}
