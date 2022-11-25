import React, { useEffect, useState } from 'react';

const CountDown = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const countDownDate = new Date('Jan 1, 2024 00:00:00').getTime();
    const x = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTime(days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ');

      if (distance < 0) {
        clearInterval(x);
        setTime('COUNTDOWN FINISHED');
      }
    }, 1000);
  }, []);

  return (
    <div className="count-down">
      <h2>{time}</h2>
    </div>
  );
};

export default CountDown;
