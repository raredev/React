import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const modalRef = useRef();
  const [isChallengeOn, setChallengeToggler] = useState(false);
  const [isTimerExpired, setTimerExpired] = useState(false);

  function startChallenge() {
    setChallengeToggler(true);
    setTimerExpired(false);
    // Storing the timeout instance in timer ref
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      setChallengeToggler(false);
      modalRef.current.showModal();
    }, targetTime * 1000);
  }

  function stopChallenge() {
    clearTimeout(timer.current); // This built in function clears the timeout with timer instance
    setChallengeToggler(false);
  }

  return (
    <>
      <ResultModal targetTime={targetTime} result="lost" ref={modalRef} />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 && "s"}
        </p>
        <p>
          <button onClick={isChallengeOn ? stopChallenge : startChallenge}>
            {isChallengeOn ? "Stop Challenge" : "Start Challenge"}
          </button>
        </p>
        <p className={isChallengeOn ? "active" : ""}>
          {isChallengeOn ? "Timer is running..." : "Timer is inactive"}
        </p>
      </section>
    </>
  );
}
