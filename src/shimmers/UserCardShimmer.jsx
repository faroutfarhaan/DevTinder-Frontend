import React from 'react';

const UserCardShimmer = () => {
  return (
    <div className="card m-4 max-w-sm py-5 rounded-2xl shadow-lg h-screen w-full flex flex-col items-center justify-between animate-pulse p-4 bg-[#1f1f1f]">
      
      {/* Image Placeholder */}
      <div className="h-[60%] w-full bg-[#333] rounded-2xl" />

      {/* Text Placeholder */}
      <div className="h-[30%] w-full px-6 flex flex-col justify-between mt-4 ">
        <div className="bg-[#444] h-6 w-2/3 rounded" />
        <div className="bg-[#444] h-4 w-1/2 rounded" />
        <div className="bg-[#444] h-10 w-full rounded" />
      </div>

      {/* Buttons Placeholder */}
      <div className="flex justify-center px-6 mt-2 gap-2 w-full">
        <div className="bg-[#444] h-10 w-1/2 rounded-3xl" />
        <div className="bg-[#444] h-10 w-1/2 rounded-3xl" />
      </div>
    </div>
  );
};

export default UserCardShimmer;
