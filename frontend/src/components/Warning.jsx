// Warning.js
import React from 'react';

const Warning = ({ onConfirm }) => {
  const handleConfirmClick = () => {
    onConfirm(); // Call the onConfirm function passed from the parent component
  };

  return (
    <div className="flex min-h-screen items-center justify-center backdrop-blur-sm ">

      <div className="rounded-lg bg-gray-50 px-16 py-14">
        <div className="flex justify-center">
          <div className="rounded-full bg-red-200 p-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-500 p-4">
            <img src="/Profile_Icons/crossed (1).png"  />

            </div>
          </div>
        </div>
        <h3 className="my-4 text-center text-3xl font-semibold text-gray-700">Sorry!!!</h3>
        <p className="w-[230px] text-center font-normal text-gray-600">Your time limit has expired, therefore you are unable to continue playing the game.</p>
        <button className="mx-auto mt-4 block rounded-xl border-4 border-transparent bg-red-500 px-6 py-3 text-center text-base font-medium text-red-100 outline-8 hover:outline hover:duration-300" onClick={handleConfirmClick}>Go Back to Home</button>
      </div>

    </div>
  );
};

export default Warning;
