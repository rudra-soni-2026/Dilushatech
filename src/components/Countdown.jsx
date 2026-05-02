import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const calculateTimeLeft = () => {
    const TEN_DAYS_MS = 10 * 24 * 60 * 60 * 1000;
    const now = Date.now();
    const difference = TEN_DAYS_MS - (now % TEN_DAYS_MS);

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timerComponents = Object.keys(timeLeft).map((interval) => (
    <div className="countdown-item" key={interval}>
      <span className="countdown-value">
        {timeLeft[interval] < 10 ? `0${timeLeft[interval]}` : timeLeft[interval]}
      </span>
      <span className="countdown-label">{interval}</span>
    </div>
  ));

  return (
    <div className="countdown-container">
      {timerComponents}
    </div>
  );
};

export default Countdown;
