import React, { useState } from "react";
import PropertySearch from "../Property/PropertySearch";
import CardContainer from "../Property/Card-property";
import ReviewSearch from "../Review/SearchReview";

const categories = ["Buying", "Renting", "Selling", "Researching"];

const Home = () => {
  const [activeCategory, setActiveCategory] = useState("Buying");
  const [activeTab, setActiveTab] = useState("propertySearch"); // Default to propertySearch

  return (
    <div>
      <div className=" flex justify-center space-x-8 my-4">
        <button
          onClick={() => setActiveTab("reviewSearch")} // Set activeTab to reviewSearch
          className={`text-lg font-medium pb-1 ${
            activeTab === "reviewSearch"
              ? " text-purple-900 border-b-2 border-purple-900"
              : " text-gray-400"
          } hover: hover:text-purple-900 rounded`}
        >
          Read Reviews
        </button>
        <button
          onClick={() => setActiveTab("propertySearch")} // Set activeTab to propertySearch
          className={`text-lg font-medium pb-1 ${
            activeTab === "propertySearch"
              ? " text-purple-900 border-b-2 border-purple-900"
              : " text-gray-400"
          } hover: hover:text-purple-900 rounded`}
        >
          Rent Apartments
        </button>
      </div>
      {activeTab === "reviewSearch" ? <ReviewSearch /> : <PropertySearch />}
      <div className="w-[70%] mx-auto">
        <h2 className="text-2xl text-[#3D3B40] font-bold">
          Explore all things property
        </h2>
        <div className="flex space-x-4 my-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full border transition-colors duration-300 ${
                activeCategory === category
                  ? "border-2 border-[#104f7f] text-black"
                  : "border-black text-gray-500 hover:border-[#1c8ce2] hover:text-black"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <CardContainer />
      </div>
    </div>
  );
};

export default Home;
