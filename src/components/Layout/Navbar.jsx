import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loggedInStatus === "true");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* {isLoggedIn ? (
        <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <NavLink
              to="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Flowbite
              </span>
            </NavLink>
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-hamburger"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              className={`w-full ${isMenuOpen ? "block" : "hidden"}`}
              id="navbar-hamburger"
            >
              <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <li>
                  <NavLink
                    to="/"
                    className="block py-2 px-3 text-white bg-blue-700 rounded dark:bg-blue-600"
                    aria-current="page"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/pricing"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Pricing
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            <button onClick={handleLogout} className="text-white font-medium">
              Logout
            </button>
          </div>
        </nav>
      ) : ( */}
        <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-center gap-28 mx-auto p-4">
            <NavLink
              to="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                TenantVoice
              </span>
            </NavLink>
            <div
              className={`hidden w-full md:block md:w-auto ${
                isMenuOpen ? "block" : "hidden"
              }`}
            >
              <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <NavLink
                    to="/"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                    aria-current="page"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/sell"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                  >
                    Sell
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/tenant"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                  >
                    Tenant
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/owner"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                  >
                    Owner/Landlord
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/role"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                  >
                    Role Selector
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/propertylisting"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                  >
                    Property Listings
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="flex justify-center items-center space-x-4">
              <NavLink to="/login">
                <button className="text-white font-medium">Sign in</button>
              </NavLink>
              <NavLink to="/role">
                <button className="bg-[#89c3f0] text-white font-medium py-2 px-4 rounded-full hover:bg-[#1c8ce2] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
                  Join
                </button>
              </NavLink>
            </div>
          </div>
        </nav>
      {/* )} */}
    </>
  );
};

export default Navbar;
