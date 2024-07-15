import React, { useState } from "react";
import img1 from "../../assets/map.webp";
import Neighborhood from "./Neighbor";

const Amenities = () => {
  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Amenities</h2>

      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">Building amenities</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center">
            <svg
              className="w-6 h-6 text-purple-600 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 17h16M4 21h16M4 13h16m-7-8l5 5m0 0l-5 5m5-5H4"
              ></path>
            </svg>
            <span>Parking</span>
          </div>
          <div className="flex items-center">
            <svg
              className="w-6 h-6 text-purple-600 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14M12 5v14"
              ></path>
            </svg>
            <span>Doorman</span>
          </div>
          <div className="flex items-center">
            <svg
              className="w-6 h-6 text-purple-600 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 16l4-4m0 0l4 4m-4-4v12m0-12L3 8m0 0l4-4m0 0l4 4M3 8h18"
              ></path>
            </svg>
            <span>Laundry Room</span>
          </div>
          <div className="flex items-center">
            <svg
              className="w-6 h-6 text-purple-600 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14m-7-7v14"
              ></path>
            </svg>
            <span>Elevator</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Unit amenities</h3>
        <div className="flex items-center">
          <svg
            className="w-6 h-6 text-purple-600 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 10l2-2m0 0l2-2m-2 2l2 2m-2-2v6a3 3 0 01-6 0v-6m0 0l-2-2m0 0l-2-2m2 2l-2 2"
            ></path>
          </svg>
          <span>Pets Allowed</span>
        </div>
      </div>
    </div>
  );
};

const PropertyInfo = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="max-w-2xl mx-auto h-[80vh] overflow-y-auto p-4 bg-gray-50">
      <h3 className="text-lg font-semibold mb-2">About this building:</h3>
      <div className="bg-white border-2 p-4 rounded-lg shadow-md">
        <div className="flex items-center">
          <div className="w-1/3">
            <img src={img1} alt="Map" className="w-full h-auto rounded" />
          </div>
          <div className="w-2/3 pl-4">
            <p className="text-sm">Jamaica Hills</p>
            <p className="font-semibold">
              166-05 Highland Avenue, Queens, NY 11432
            </p>
            <p className="text-sm">189 Units · 8 Floors</p>
            <div className="flex items-center mt-1">
              <span className="text-yellow-400 text-xl">★</span>
              <span className="text-sm ml-1">2.9 (2)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="my-4">
        <h3 className="text-lg text-[#061938] font-bold">
          Have a question about this building? Ask current and former tenants
          what they think
        </h3>

        <p className="py-4 text-[16px] text-[#253858] font-normal">
          Questions are typically answered within 20 minutes. We'll notify you!
        </p>
        <button className="bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
          Read and ask questions
        </button>
      </div>
      <div className="my-4 h-px bg-gray-200"></div>
      <div className="max-w-xl mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4">Description</h2>
        <p className="text-gray-700">
          Renovated and Spacious Rent-Stabilized studio apartment!
        </p>
        <p className="text-gray-700">The apartment features:</p>
        <ul className="text-gray-700 list-disc list-inside">
          <li>
            Kitchen with stainless steel appliances, gas burning stove and ample
            cabinet space
          </li>
          <li>Spacious living space</li>
          <li>Lots of closet space throughout the apartment</li>
          <li>Hardwood floors throughout</li>
          <li>Updated tiles bathroom</li>
        </ul>
        {!isExpanded && (
          <button
            onClick={() => setIsExpanded(true)}
            className="text-purple-600 mt-2 focus:outline-none"
          >
            Read More <span className="text-sm">▼</span>
          </button>
        )}
        {isExpanded && (
          <button
            onClick={() => setIsExpanded(false)}
            className="text-purple-600 mt-2 focus:outline-none"
          >
            Read Less <span className="text-sm">▲</span>
          </button>
        )}
      </div>
      <div className="my-4 h-px bg-gray-200"></div>
      <Amenities />
      <Neighborhood />
    </div>
  );
};

export default PropertyInfo;
