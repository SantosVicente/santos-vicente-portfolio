"use client";

import { useState, useEffect } from "react";

const lastCoffeeDate = new Date(2021, 0, 1, 8, 0, 0);

export function CoffeeCounter() {
  const [timeElapsed, setTimeElapsed] = useState({
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = now.getTime() - lastCoffeeDate.getTime();

      const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));
      const days = Math.floor((difference / (1000 * 60 * 60 * 24)) % 365.25);
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeElapsed({ years, days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time: number) => time.toString().padStart(2, "0");

  return (
    <div className="flex flex-col items-center gap-4 text-white">
      <h3 className="text-lg md:text-xl text-neutral-300 z-30">
        Último dia sem tomar café há:
      </h3>
      <div className="flex flex-wrap justify-center gap-4 z-30">
        <div className="time-counter-item">
          <span className="time-counter-number">
            {formatTime(timeElapsed.years)}
          </span>
          <span className="time-counter-label">Anos</span>
        </div>
        <div className="time-counter-item">
          <span className="time-counter-number">
            {formatTime(timeElapsed.days)}
          </span>
          <span className="time-counter-label">Dias</span>
        </div>
        <div className="time-counter-item">
          <span className="time-counter-number">
            {formatTime(timeElapsed.hours)}
          </span>
          <span className="time-counter-label">Horas</span>
        </div>
        <div className="time-counter-item">
          <span className="time-counter-number">
            {formatTime(timeElapsed.minutes)}
          </span>
          <span className="time-counter-label">Minutos</span>
        </div>
        <div className="time-counter-item">
          <span className="time-counter-number">
            {formatTime(timeElapsed.seconds)}
          </span>
          <span className="time-counter-label">Segundos</span>
        </div>
      </div>
    </div>
  );
}
