import React from "react";
import Link from "next/link";
import Nav from "../components/Nav";

const page = () => {
  return (
    <div className="flex flex-wrap h-screen bg-teal-800 p-7">
      <Nav/>
      <div className="w-full p-4 mb-4 bg-blue-600 sm:w-1/6 md:w-1/5 lg:w-2/6 xl:w-2/12"></div>
      <div className="w-full p-4 mb-4 bg-blue-200 sm:w-1/2 md:w-3/5 lg:w-3/6 xl:w-8/12"></div>
    </div>
  );
};

export default page;
