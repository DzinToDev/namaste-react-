import React from "react";

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {/* Search Box */}
      <div className="flex justify-between mb-6">
        <input type="text" className="border px-2 py-1" placeholder="" />
        <button className="filer-shimmer border px-4 w-42 py-1 bg-gray-300"></button>
      </div>

      {/* Shimmer Cards */}
      <div className="flex flex-wrap justify-evenly gap-6">
        {Array(8).fill("").map((_, index) => (
          <div key={index} className="w-72 h-80 bg-gray-300 rounded-lg shimmer"></div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
