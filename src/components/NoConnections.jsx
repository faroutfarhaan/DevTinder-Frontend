import React from 'react';

const NoConnections = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#121212] text-center text-white px-4">
      
      {/* Animated Linked Circles */}
      <div className="relative w-48 h-48 mb-6">
        {/* Outer pulse ring */}
        <div className="absolute inset-0 rounded-full border-4 border-[#FF416C] animate-ping opacity-20"></div>

        {/* Interlinked circles */}
        <div className="absolute left-1/4 top-1/4 w-10 h-10 bg-[#FF416C] rounded-full animate-bounce"></div>
        <div className="absolute right-1/4 bottom-1/4 w-10 h-10 bg-[#FF4B2B] rounded-full animate-bounce animation-delay-200"></div>

        {/* Central icon */}
        <div className="absolute inset-1/4 w-20 h-20 bg-[#FF416C] rounded-full flex items-center justify-center shadow-lg">
          <span className="text-white text-xl font-bold">🤝</span>
        </div>
      </div>

      {/* Text Section */}
      <h2 className="text-3xl font-bold text-[#FF416C] mb-2">No Connections Yet</h2>
      <p className="text-gray-400 max-w-md">
        You haven’t connected with anyone yet. Once you match, your connections will appear here!
      </p>
    </div>
  );
};

export default NoConnections;
