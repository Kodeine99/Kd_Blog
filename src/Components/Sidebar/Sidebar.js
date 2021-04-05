import React from "react";
import { Link } from "react-router-dom";

// Font Awesome

function Sidebar() {
  return (
    <div className="sidebar">
      <nav className="hidden bg-gray-200 sm:block md:left-0 md:block md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-no-wrap md:overflow-hidden flex flex-wrap items-center justify-between py-4 px-4 ">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-no-wrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Brand */}
          <Link
            className="md:block text-left md:pb-2 text-gray-700 mr-0 inline-block whitespace-no-wrap text-sm font-bold p-4 px-0"
            to="/"
          >
            Hello,{" "}
            <h2 className="text-base font-normal leading-normal mt-0 mb-2 text-red-800">
              Kodeine
            </h2>
          </Link>
          {/* Collapse */}
          <div
            className={
              "hidden md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded "
            }
          >
            {/* Navigation */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link
                  className="text-blue-500 hover:text-pink-600 text-xs uppercase py-3 font-bold block"
                  to="/dashboard"
                >
                  <i className="fab fa-react opacity-75 mr-2 text-sm"></i>{" "}
                  ReactJs
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className="text-gray-800 hover:text-gray-600 text-xs uppercase py-3 font-bold block"
                  to="/"
                >
                  <i className="fab fa-js-square text-gray-500 mr-2 text-sm"></i>{" "}
                  Javascript
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className="text-gray-800 hover:text-gray-600 text-xs uppercase py-3 font-bold block"
                  to="/"
                >
                  <i className="fas fa-code text-gray-500 mr-2 text-sm"></i>{" "}
                  Tips Code
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className="text-gray-800 hover:text-gray-600 text-xs uppercase py-3 font-bold block"
                  to="/"
                >
                  <i className="fab fa-node-js text-gray-500 mr-2 text-sm"></i>{" "}
                  NodeJs
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className="text-gray-800 hover:text-gray-600 text-xs uppercase py-3 font-bold block"
                  to="/"
                >
                  <i className="fab fa-git-alt text-gray-500 mr-2 text-sm"></i>{" "}
                  Git
                </Link>
              </li>
            </ul>
            {/* Divider */}
            <hr className="my-4 md:min-w-full border-t-2 border-gray-500" />
            {/* Heading */}
            <h6 className="md:min-w-full text-gray-600 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              My Tags
            </h6>
            {/* Navigation */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="inline-flex">
                <Link
                  className="text-gray-500 hover:text-gray-600 text-sm block mb-4 no-underline font-semibold"
                  to="/"
                >
                  #Styles
                </Link>
              </li>

              <li className="inline-flex">
                <Link
                  className="text-gray-500 hover:text-gray-600 text-sm block mb-4 no-underline font-semibold"
                  to="/"
                >
                  #CssComponents
                </Link>
              </li>

              <li className="inline-flex">
                <Link
                  className="text-gray-500 hover:text-gray-600 text-sm block mb-4 no-underline font-semibold"
                  to="/"
                >
                  #Git
                </Link>
              </li>

              <li className="inline-flex">
                <Link
                  className="text-gray-500 hover:text-gray-600 text-sm block mb-4 no-underline font-semibold"
                  to="/"
                >
                  #React
                </Link>
              </li>

              <li className="inline-flex">
                <Link
                  className="text-gray-500 hover:text-gray-600 text-sm block mb-4 no-underline font-semibold"
                  to="/"
                >
                  #npm
                </Link>
              </li>

              <li className="inline-flex">
                <Link
                  className="text-gray-500 hover:text-gray-600 text-sm block mb-4 no-underline font-semibold"
                  to="/"
                >
                  #Javascript
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
