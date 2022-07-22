import React from "react";

const page = () => {
  return (
    <div className="flex flex-wrap h-screen bg-green-700">
      <div className="w-full h-screen p-4 mb-1 bg-blue-700 xl:w-1/12"></div>
      <div className="w-full h-screen p-4 mb-1 bg-blue-600 xl:w-3/12"></div>
      <div className="w-full h-screen p-4 mb-1 bg-blue-500 xl:w-8/12"></div>
    </div>
  );
};

export default page;
