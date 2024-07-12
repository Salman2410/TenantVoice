import React from "react";

const PropertyCard = () => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-semibold">Grymes Hill</h4>
          <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full">
            Verified
          </span>
        </div>
        <p className="text-gray-600 mt-2">
          496 Howard Avenue #2B, Staten Island, NY 10301
        </p>
        <p className="text-2xl font-bold mt-2">$2,200</p>
        <div className="mt-4 flex items-center text-gray-600">
          <span>2 beds</span>
          <span className="mx-2">•</span>
          <span>1 bath</span>
          <span className="mx-2">•</span>
          <span>Posted by Tomer</span>
        </div>
        <p className="text-gray-600 mt-4">Active availability:</p>
        <p className="text-gray-900">Available Aug 01, 2024</p>
        <div className="mt-6 flex">
          <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg mr-2">
            Contact agent
          </button>
          <button className="border border-gray-300 text-gray-700 py-2 px-4 rounded-lg">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
