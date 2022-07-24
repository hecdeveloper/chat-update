import Link from "next/link";
import React from "react";
import { BeakerIcon, HomeIcon, SparklesIcon } from "@heroicons/react/solid";
// import { HomeIcon } from "@heroicons/react/outline";
const Nav = () => {
  return (
    <div className="pt-10 ml-4 bg-blue-600 lg:row-span-4 lg:col-span-1 md:col-span-5">
      <nav>
        <ul className="flex flex-col">
          <li className="py-3 text-white bg-blue-700">
            <span className="flex">
              <HomeIcon className="w-5 h-5 text-white" /> Dashboard{" "}
            </span>
          </li>
          <li className="py-3 text-white bg-purple-600">
            <span className="flex">
              <SparklesIcon className="w-5 h-5 text-white" /> Online Reviews{" "}
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
