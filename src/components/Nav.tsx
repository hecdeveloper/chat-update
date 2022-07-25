import Link from "next/link";
import React from "react";
import { BeakerIcon, HomeIcon, SparklesIcon } from "@heroicons/react/solid";

const Nav = () => {
  return (
    <>
      <aside
        className="p-4 bg-blue-400 t-10 lg:row-span-4 lg:col-span-1 md:col-span-5"
        aria-label="Sidebar"
      >
        <ul className="flex flex-col space-y-2 rounded">
          <Link href="/elstrim">
            <li className="flex items-center p-2 text-base font-normal text-gray-900 rounded-l-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <a className="flex ml-3 ">
                <HomeIcon className="w-5 h-5 mr-2 text-white" /> Dashboard{" "}
              </a>
            
            </li>
          </Link>
          <li className="py-3 text-slate-500 rounded-l-full bg-blue-100">
            <a className="flex ml-3">
              <SparklesIcon className="w-5  h-5 text-white" /> Online Reviews{" "}
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Nav;
