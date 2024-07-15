import React from "react";

const AnonymousReview = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Which building do you want to anonymously review?
        </h1>
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search any US address..."
            className="pl-4 pr-20 py-3 border-2 border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-500 transition-colors"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
            Search
          </button>
        </div>
        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have a review to share at the moment?
        </p>
        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg w-full transition-colors">
          Subscribe for $4.99 and gain full access to the platform
        </button>
      </div>
    </div>
  );
};

export default AnonymousReview;
