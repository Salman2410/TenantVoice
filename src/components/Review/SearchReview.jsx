import React from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate

const ReviewSearch = () => {
  const navigate = useNavigate();  // Create a navigate function instance

  const handleReviewStart = () => {
    navigate("/anonymous");  // Use navigate to change the route
  };

  return (
    <>
      <div className="py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-semibold text-purple-900 mb-4">
            Read & Anonymously Share Rental Experiences
          </h2>
          <div className="relative max-w-lg mx-auto">
            <input
              type="text"
              placeholder="🔍 Search address..."
              className="w-full border border-gray-300 rounded-full py-3 px-5 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
          </div>
        </div>
      </div>
      <div className="my-5 border-2 bg-white p-8 rounded-lg shadow-md max-w-sm mx-auto">
        <h1 className="text-xl font-semibold mb-4">
          Rate your landlord (anonymously)
        </h1>
        <p className="text-gray-600 mb-6">
          Search for an address, read & anonymously share rental experiences,
          and access real-time city data on buildings and landlords.
        </p>
        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
          onClick={handleReviewStart}  // Add an onClick event handler
        >
          Start your anonymous review
        </button>
      </div>
    </>
  );
};

export default ReviewSearch;
