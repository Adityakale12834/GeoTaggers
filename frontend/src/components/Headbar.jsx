
import React, { useState, useEffect } from 'react';
import Warning from './Warning'; // Assuming Warning component is in './Warning.js'

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

  const handleTrackOrderClick = () => {
    // Redirect to home page or perform any action when the track order button is clicked
    window.location.href = "http://localhost:5173/"; // Replace "/home" with the actual home page URL
  };

  return (
    <div>


      <div class="flex right-56  top-20   absolute group">
        <button data-ripple-light="true" data-tooltip-target="tooltip-left-start"
          class="bg-blue-500 text-white font-bold py-2 px-4 rounded">

          <div className="flex items-center">
            <img src="/Profile_Icons/clock.png" alt="timer logo" className="h-10" />
            <span>&ensp;{formatTime(timer)}</span>
          </div>
        </button>



        <div data-tooltip="tooltip-left-start" data-tooltip-placement="left-start"
          class="  absolute  right-32  top-12 mt-2 w-48   shadow-lg  hidden group-hover:block  z-50 whitespace-normal break-words rounded-lg  bg-white py-1.5 px-3 font-sans text-sm font-normal text-black focus:outline-none">You're currently on a Free account, granting you a play session every 5 minutes at no cost.</div>


      </div>


      {showWarning && (
        <Warning onConfirm={handleTrackOrderClick} />
      )}
    </div>

  );
}
