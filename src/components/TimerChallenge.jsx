import { useState } from "react";

export default function TimerChallenge({ title, targetTime }) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timeExpired, setTimeExpired] = useState(false);

  function handleStart() {
    setTimeout(() => {
      setTimeExpired(true);
    }, targetTime * 1000);

    setTimerStarted(true);
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timeExpired && <p>You Lost!</p>}
      <p className="challenge-time">
        {targetTime} Second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={handleStart}>
          {timerStarted ? "stop" : "start"} Challenge
        </button>
      </p>
      <p className={timerStarted ? "active" : "undefined"}>
        {timerStarted ? "Timer Is Runing..." : "Timer Inactive"}
      </p>
    </section>
  );
}
