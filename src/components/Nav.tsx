import Link from "next/link";
import React from "react";
import { BeakerIcon, HomeIcon, SparklesIcon, AnnotationIcon, ChatAlt2Icon, ChartPieIcon } from "@heroicons/react/solid";

const Nav = () => {
  return (
    <>
      <aside
        className="hidden pt-6 pl-4 bg-slate-900 t-10 lg:row-span-4 lg:col-span-1 md:col-span-5 md:block"
        aria-label="Sidebar"
      >
        <ul className="flex flex-col space-y-2 rounded">
          <Link href="/">
            <li className="flex items-center p-2 py-3 text-base font-normal text-white rounded-l-full hover:bg-teal-400">
              <a className="flex ml-3 ">
                <HomeIcon className="w-5 h-5 mr-2 " /> Dashboard{" "}
              </a>
            
            </li>
          </Link>
          <Link href="/">
            <li className="flex items-center p-2 py-3 text-base font-normal text-white rounded-l-full hover:bg-teal-400">
              <a className="flex ml-3 ">
                <ChartPieIcon className="w-5 h-5 mr-2 " /> Analytics{" "}
              </a>
            
            </li>
          </Link>
          <Link href="/">
            <li className="flex items-center p-2 py-3 text-base font-normal text-white rounded-l-full hover:bg-teal-400">
              <a className="flex ml-3 ">
                <AnnotationIcon className="w-5 h-5 mr-2 " /> SMS Actions{" "}
              </a>
            
            </li>
          </Link>
          <li className="py-3 rounded-l-full text-slate-500 bg-slate-100">
            <a className="flex ml-3">
              <ChatAlt2Icon className="w-5 h-5 text-slate-500" /> Chat{" "}
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Nav;
