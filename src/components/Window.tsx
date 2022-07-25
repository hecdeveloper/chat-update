import React from "react";
import Tabs from "./Tabs";

const Window = () => {
  return (
    <>
      <div className="row-span-3 mt-4 bg-blue-900 rounded-lg lg:col-span-4 lg:row-span-4 md:col-span-5">
        {/* search and stuff */}
        <div className="flex flex-row justify-between w-full p-3 bg-blue-100 rounded-t-lg">
          <div>App</div>
          <div>Chat</div>
          <div>Search</div>
          <div>user pic</div>
        </div>
        {/* another bar */}
        <div className="flex justify-between w-full p-3 bg-blue-100">
          <div>Chat</div>
          <div>start a new chat</div>
        </div>
        {/* contacts container */}
        <div className="grid cols-1 md:grid-cols-6 min-h-[85%] rounded-b-lg bg-blue-200">
          <div className="bg-blue-100 rounded-bl-lg md:mr-3 md:col-span-2">
            

            <Tabs />
           
          </div>
          {/* conversation */}
          <div className="flex flex-col content-between bg-yellow-100 rounded-t-lg md:col-span-4">
            <div className="flex w-full min-h-[10%] rounded-t-lg bg-zinc-50"></div>
            <div className="flex  w-full min-h-[80%] self-end  bg-zinc-50"></div>
            <div className="flex w-full min-h-[10%] pt-2 bg-blue-300"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Window;
