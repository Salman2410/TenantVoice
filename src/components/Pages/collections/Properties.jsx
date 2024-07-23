import React from "react";

const CardComponent = () => {
  return (
    <div className="max-w-sm mx-auto bg-gray-100 rounded-lg shadow-md overflow-hidden cursor-pointer">
      <div className="p-6 text-center">
        <svg
          className="w-12 h-12 mx-auto text-gray-500 mb-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16h6m-6-6h6m-6 6v-4m0 4v-4m6 4v-4m0 4v-4M3 8l7-3 7 3 7-3v13a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"
          />
        </svg>
        <p className="text-gray-600">
          Tap the star{" "}
          <span role="img" aria-label="star">
            ⭐
          </span>{" "}
          on any property to add it to this Collection.
        </p>
      </div>
      <div className="bg-white py-3 px-6 border-t border-gray-200">
        <p className="text-gray-800 font-semibold">My Saved Properties</p>
      </div>
    </div>
  );
};

const SavedProperties = () => {
  return (
    <div className="w-full h-full">
      <div>
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full flex items-center justify-center">
          <span className="mr-2">+</span>
          <span>Create</span>
        </button>
      </div>
      <CardComponent />
      
    </div>
  );
};

export default SavedProperties;
