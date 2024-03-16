import React, { useState, useEffect } from 'react';
import Warning from './Warning';

export default function Headbar() {
  const [timer, setTimer] = useState(3); // 300 seconds = 5 minutes
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        setShowWarning(true); // Display warning when timer reaches zero
        clearInterval(intervalId); // Stop the timer
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timer]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <header>
      <nav className="border-gray-200 px-4 text-white lg:px-6 py-2.5 h-16 bg-opacity-50 bg-slate-700">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div><img src="/Profile_Icons/geo4.png" alt="logo" className="h-10" /></div>
          <div><h3>You're currently on a Free account, granting you a play session every 5 minutes at no cost</h3></div>
          <div className="flex items-center">
            <img src="/Profile_Icons/clock.png" alt="timer logo" className="h-10" />
            <span>&ensp;{formatTime(timer)}</span>
          </div>
        </div>
      </nav>
      {showWarning && (
        <div className="bg-red-500 text-white text-center py-2">
          Your free play session has ended. Please sign up for continued access.
        </div>
      )}
    </header>
  );
}
