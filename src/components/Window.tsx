import React from "react";
import Tabs from "./Tabs";

const Window = () => {
  return (
    <>
      <div className="row-span-4 mt-4 px-4 bg-slate-900  lg:col-span-4 lg:row-span-4 md:col-span-5 md:pr-10">
        {/* search and stuff */}
        <div className="flex flex-row justify-between w-full p-3 bg-teal-500 rounded-t-lg">
          <div>App</div>
          <div>Chat</div>
          <div>Search</div>
          <div>user pic</div>
        </div>
        {/* another bar */}
        <div className="flex justify-between w-full p-3 bg-slate-100">
          <div>Chat</div>
          <div>start a new chat</div>
        </div>
        {/* contacts container */}
        <div className="grid cols-1 md:grid-cols-6 min-h-[85%] rounded-b-lg bg-slate-100">
          <div className="bg-slate-100 rounded-bl-lg md:mr-3 md:col-span-2">
            <Tabs />
          </div>
  
          <div className="flex flex-col content-between  rounded-t-lg md:col-span-4">
            <div className="flex w-full min-h-[10%] rounded-t-lg bg-zinc-50"></div>
            <div className="flex  w-full min-h-[80%] self-end  bg-zinc-50"></div>
            <div className="flex w-full min-h-[10%] pt-2 bg-zinc-100 rounded-br-lg "></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Window;
