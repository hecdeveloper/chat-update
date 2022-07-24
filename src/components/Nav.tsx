import Link from "next/link";
import React from "react";
import { BeakerIcon } from "@heroicons/react/solid";
const Nav = () => {
  return (
    <div className="m-4 bg-blue-600 lg:row-span-4 lg:col-span-1 md:col-span-5">
      <nav>
        <ul className="flex flex-col justify-center">
          <li className="text-white">
            <span className="flex">
              <BeakerIcon className="w-5 h-5 text-white" /> Dashboard{" "}
            </span>
            <span className="flex">
              <BeakerIcon className="w-5 h-5 text-white" /> Dashboard{" "}
            </span>
            <span className="flex">
              <BeakerIcon className="w-5 h-5 text-white" /> Dashboard{" "}
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
