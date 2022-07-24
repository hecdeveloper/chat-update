import React from "react";
import Nav from "../components/Nav";

const newgrid = () => {
  return (
    <div className="grid grid-cols-6 gap-4">
    <div className="col-span-4 col-start-2 bg-slate-600">01</div>
    <div className="col-start-1 col-end-3 bg-slate-500">02</div>
    <div className="col-span-2 col-end-7 bg-slate-400">03</div>
    <div className="col-start-1 col-end-7 bg-slate-500">04</div>
  </div>
  );
};

export default newgrid;
