import React from 'react';

const NoRequests = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#121212] text-center text-white px-4">
      
      {/* Animated Bubble Circle */}
      <div className="relative w-48 h-48 mb-6">
        <div className="absolute inset-0 bg-[#FF416C] rounded-full animate-ping opacity-30"></div>
        <div className="absolute inset-4 bg-[#FF416C] rounded-full animate-pulse opacity-70"></div>
        <div className="absolute inset-8 bg-[#FF4B2B] rounded-full"></div>
      </div>

      {/* Text */}
      <h2 className="text-3xl font-bold text-[#FF416C] mb-2">No Requests Yet</h2>
      <p className="text-gray-400 max-w-md">
        You're all caught up! Looks like nobody sent a request — maybe you're too awesome to ignore 😉.
      </p>
    </div>
  );
};

export default NoRequests;
