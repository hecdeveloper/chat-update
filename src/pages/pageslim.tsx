import Link from "next/link";
import Nav from "../components/Nav";

const pageslim = () => {
  return (
    <div className="grid h-screen grid-cols-12 grid-rows-6 bg-slate-900">
    <Nav/>
      <div className="col-span-11 col-start-2 mt-6 mr-5 rounded-t-lg shadow-inner bg-slate-100">
        {/* <div className="container flex h-full bg-black w-100"></div> */}
      </div>
      <div className="col-span-2 col-start-2 row-span-6 mt-1 mb-6 rounded-bl-lg box-shadow: 0 3px 15px rgb(0 0 0 / 7%) bg-slate-100">
        Chat
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          <li className="mr-2">
            <a
              href="#"
              className="inline-block px-4 py-3 text-white bg-blue-600 rounded-lg active"
              aria-current="page"
            >
              All
            </a>
          </li>
          <li className="mr-2">
            <a
              href="#"
              className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
            >
              Tab 2
            </a>
          </li>
          <li className="mr-2">
            <a
              href="#"
              className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
            >
              Tab 3
            </a>
          </li>
        </ul>
      </div>
      <div className="col-span-9 col-start-4 row-span-5 mb-6 mr-5 rounded-br-lg bg-slate-50">
        {/* 
        <div className="container">

         <textarea placeholder="Message"
                className="block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
                name="message" required />
                </div> */}

        <textarea
          className="h-[46px] m-5  form-control dark:bg-darkmode-600 h-16 resize-none border-transparent px-5 py-3 shadow-none focus:border-transparent focus:ring-0"
          placeholder="Type your message..."
        ></textarea>
      </div>
    </div>
  );
};

export default pageslim;
