import React from 'react';

const RequestShimmer = () => {
  return (
    <div className="shadow shadow-black rounded-full flex items-center p-4 m-4 animate-pulse bg-[#1f1f1f] max-w-3xl mx-auto">
      
      {/* Avatar shimmer */}
      <div className="w-14 h-14 bg-[#333] rounded-full flex-shrink-0" />

      {/* User Info shimmer */}
      <div className="flex flex-col justify-center mx-4 flex-grow">
        <div className="h-4 w-32 bg-[#444] rounded mb-2" />
        <div className="h-3 w-48 bg-[#444] rounded" />
      </div>

      {/* Buttons shimmer */}
      <div className="flex gap-2">
        <div className="h-8 w-20 bg-[#444] rounded-3xl" />
        <div className="h-8 w-20 bg-[#444] rounded-3xl" />
      </div>
    </div>
  );
};

export default RequestShimmer;
