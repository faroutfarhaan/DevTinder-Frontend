// src/components/NoFeed.jsx
import React from "react";
import { PiUsersThreeLight } from "react-icons/pi";

const NoFeed = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-white text-center p-4 animate-fade-in">
      <PiUsersThreeLight size={100} className="text-[#FF416C] animate-bounce" />
      <h2 className="text-3xl font-semibold mt-4">No Connections Yet</h2>
      <p className="text-gray-400 mt-2">
        Seems like there’s no one to show right now.
        <br />
        Come back later to discover amazing people!
      </p>
    </div>
  );
};

export default NoFeed;
