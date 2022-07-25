import React from "react";
import Aside from "../components/Aside";
import Nav from "../components/Nav";
import Window from "../components/Window";


const elstrim = () => {
  return (
    <div className="grid h-screen grid-rows-4 overflow-hidden bg-blue-900 lg:grid-cols-5 cols-1">
      {/* main nav */}
      <Nav/>   
      {/* main window */}
      <Window/>
    </div>
  );
};

export default elstrim;
