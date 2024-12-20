import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((pTimer) => {
        if (pTimer == 0) {
          clearInterval(interval);
          return pTimer;
        }

        return pTimer - 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const bgColor = () => (timer <= 5 ? 'orange' : 'green');

  return (
    <div className="conatiner">
      <div
        className="progress-bar"
        style={{
          backgroundColor: bgColor(),
          width: `${timer * 10}%`,
          transition: 'width 1s linear',
        }}
      ></div>
      <div className="timer-text">Place your bets - {timer} </div>
    </div>
  );
}
