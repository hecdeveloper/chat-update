import React from "react";

const page = () => {
  return (
    <div className="flex flex-wrap bg-green-700">
      <div className="h-screen bg-blue-700 l xl:w-2/12"></div>
      <div className="flex flex-wrap h-screen bg-teal-700 xl:w-10/12">
        <div className="w-5/12 h-full bg-blue-600"></div>
        <div className="w-7/12 h-full bg-green-600"></div>
      </div>
      {/* <div className="w-full h-screen p-4 mb-1 bg-blue-600 xl:w-4/12"></div>
      <div className="w-full h-screen p-4 mb-1 bg-blue-500 xl:w-7/12"></div> */}
    </div>
  );
};

export default page;
