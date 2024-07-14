import React from "react";
import PropertyList from "./Propertylist";

const Propertylisting = () => {
  return (
    <section className="w-[50%] mx-auto">
      <div className="flex justify-between items-center p-4 bg-gray-100 border border-gray-300 rounded">
        <div>
          <h1 className="text-lg font-semibold">
            Rental Properties and Real Estate in NSW 2770 and other locations
          </h1>
          <p className="text-sm text-gray-500">1-25 of 1,105 properties</p>
        </div>
        <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded hover:bg-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M8.5 3.5a5 5 0 100 10h3a5 5 0 100-10h-3zM6 8.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zM12.5 6h.5a2.5 2.5 0 010 5h-.5a5.5 5.5 0 100-10h-1a2.5 2.5 0 010 5h1a5 5 0 000-10h-3a5 5 0 000 10h3z" />
          </svg>
          Save search
        </button>
      </div>
      <div className="flex justify-between items-center p-4 bg-gray-100 border border-gray-300 rounded">
        <div className="flex space-x-4">
          <button className="flex items-center text-[#1c8ce2] border-b-2 border-[#1c8ce2]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M3 4a1 1 0 000 2h14a1 1 0 100-2H3zM3 8a1 1 0 000 2h14a1 1 0 100-2H3zM3 12a1 1 0 000 2h14a1 1 0 100-2H3zM3 16a1 1 0 000 2h14a1 1 0 100-2H3z" />
            </svg>
            List
          </button>
          <button className="flex items-center text-gray-500 hover:text-[#1c8ce2]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.05 3.05a7 7 0 117.9 7.9A7.001 7.001 0 019.05 3.05zM8 14a6 6 0 100-12 6 6 0 000 12zm0 2a7.978 7.978 0 01-4.34-1.34 1 1 0 00-1.32 1.5A9.971 9.971 0 008 18a9.971 9.971 0 005.66-1.84 1 1 0 00-1.32-1.5A7.978 7.978 0 018 16z" />
            </svg>
            Map
          </button>
          <button className="flex items-center text-gray-500 hover:text-[#1c8ce2]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.854 3.146a.5.5 0 00-.707 0L5 8.293V12.5a.5.5 0 00.5.5H9.5a.5.5 0 00.5-.5V9h1v3.5a.5.5 0 00.5.5H14.5a.5.5 0 00.5-.5V8.293l-5.354-5.147zM3 14v1a1 1 0 001 1h12a1 1 0 001-1v-1H3z" />
            </svg>
            Inspections
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-gray-500">Sort</span>
          <select className="border border-gray-300 rounded px-3 py-2 bg-white">
            <option>Featured</option>
            {/* Add more options as needed */}
          </select>
        </div>
      </div>
      <PropertyList />
    </section>
  );
};

export default Propertylisting;
