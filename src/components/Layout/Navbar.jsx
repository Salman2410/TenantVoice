import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              TenantVoice
            </span>
          </NavLink>
          <div className="hidden w-full md:block md:w-auto">
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
              <li>
                <NavLink
                  to="/reviews"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  Reviews
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/anonymous"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  Anonymous Reviews
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
