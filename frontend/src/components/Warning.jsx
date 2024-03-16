import React from 'react';

export default function Warning() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <h1 className="text-4xl font-bold text-red-600 mb-4">Timer Limit Reached</h1>
      <p className="text-lg text-gray-800">Your free play session has ended.</p>
      <p className="text-lg text-gray-800">Please sign up for continued access.</p>
      {/* Add signup button or any other necessary action */}
    </div>
  );
}
