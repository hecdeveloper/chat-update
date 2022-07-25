import React from 'react'

export const icons = () => {
  return (
    <div>
          <li className="w-96 h-72 bg-indigo-700 p-20
            active:before:content-['Hello'] before:text-sky-300 before:text-4xl
            active:after:content-['Goodbye'] after:text-amber-300 after:text-4xl
            "></li>

        <>
        <span className="flex">
              <SparklesIcon className="w-5 h-5 text-white" /> Online Reviews{" "}
            </span>
            <span className="flex">
              <BeakerIcon className="w-5 h-5 text-white" /> Analytics{" "}
            </span>
            <span className="flex">
              <BeakerIcon className="w-5 h-5 text-white" /> Guest Feedback{" "}
            </span>
            <span className="flex">
              <BeakerIcon className="w-5 h-5 text-white" /> SMS Actions{" "}
            </span>
            <span className="flex">
              <BeakerIcon className="w-5 h-5 text-white" /> Chat{" "}
            </span>
            <span className="flex">
              <HomeIcon className="w-5 h-5 text-white" /> Payments{" "}
            </span>
            <span className="flex">
              <BeakerIcon className="w-5 h-5 text-white" /> Sales Insights{" "}
            </span>
        </>
    </div>
  )
}
