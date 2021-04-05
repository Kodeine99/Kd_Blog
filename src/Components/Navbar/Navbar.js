import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  return (
    <div className="navbar ">
      <nav className="bg-gray-800 fixed z-50 w-full">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-expanded="false"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <RouterLink
                  to="/"
                  className="block lg:hidden text-white font-bold align-middle"
                >
                  <p>KD Blogs</p>
                </RouterLink>
                <RouterLink
                  to="/"
                  className="hidden lg:block text-white font-bold align-middle items-center"
                >
                  <p>KD Blogs</p>
                </RouterLink>
              </div>
              <form className="md:flex hidden flex-row flex-wrap items-center ml-auto mr-3">
                <div className="relative flex w-full flex-wrap items-stretch">
                  <span className="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                    {/* <i className="fas fa-search"></i> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </span>
                  <input
                    type="text"
                    placeholder="Search here..."
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"
                  />
                </div>
              </form>
            </div>

            {/* Before login */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button className="hidden sm:block bg-gray-800 p-1 text-white hover:text-white focus:outline-none">
                <RouterLink to="/login" className="">
                  Login
                </RouterLink>
              </button>
              <div className="ml-3 relative">
                <div>
                  <button
                    className="hidden sm:block bg-blue-600 flex p-1.5 rounded-sm text-white hover:bg-blue-700 focus:outline-none"
                    id="user-menu"
                    aria-haspopup="true"
                  >
                    <span className="">Create Account</span>
                  </button>
                </div>
              </div>
            </div>

            {/* After Login */}
            <div className="hidden absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                className="hidden sm:block bg-purple-600 flex p-1.5 rounded-sm text-white hover:bg-purple-700 focus:outline-none"
                id="user-menu"
                aria-haspopup="true"
              >
                <span className="">Write a post</span>
              </button>
              <div className="ml-3 relative">
                <div>
                  <button
                    className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    id="user-menu"
                    aria-haspopup="true"
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
                </div>
                {userMenuOpen ? (
                  <></>
                ) : (
                  <div
                    className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu"
                  >
                    <a
                      href="#link"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Your Profile
                    </a>
                    <a
                      href="#link"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Settings
                    </a>
                    <a
                      href="#link"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Sign out
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={"item-center" + (navbarOpen ? " " : " hidden")}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-500">
            <form className="md:flex flex-row flex-wrap items-center ml-auto">
              <div className="relative flex w-full flex-wrap items-stretch">
                <span className="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                  {/* <i className="fas fa-search"></i> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="Search here..."
                  className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"
                />
              </div>
            </form>
            <a
              href="#link"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              // className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              ReactJs
            </a>
            <a
              href="#link"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Javascript
            </a>
            <a
              href="#link"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Tips
            </a>
            <a
              href="#link"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Login / Register
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
