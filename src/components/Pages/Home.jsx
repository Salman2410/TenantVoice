import React, { useState } from "react";
import Search from "../Property/search";
import CardContainer from "../Property/Card-property";
import ReviewSearch from "../Review/SearchReview";
import TabButtons from "../Button/Tabbutton";
import PropertyCarousel from "./HomeCard";

const categories = ["Buying", "Renting", "Selling", "Researching"];

const Home = () => {
  const [activeCategory, setActiveCategory] = useState("Buying");
  const [activeTab, setActiveTab] = useState("propertySearch");

  return (
    <div className="min-h-screen bg-gray-400 py-10">
      <div className="w-[80%] mx-auto my-10 rounded-2xl flex flex-col items-center justify-center bg-gray-800 shadow-lg">
        <div className="bg-gray-800 p-4 rounded-lg  w-1/2 mx-auto">
          <TabButtons activeTab={activeTab} setActiveTab={setActiveTab} />
          {activeTab === "reviewSearch" ? <ReviewSearch /> : <Search />}
        </div>
      </div>
      <div className="w-[80%] mx-auto mt-8">
        <h2 className="text-3xl text-gray-800 font-bold mb-6">
          Discover Properties
        </h2>
        <div className="flex space-x-4 my-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full border transition-colors duration-300 ${
                activeCategory === category
                  ? "border-2 border-dark-cerulean text-black"
                  : "border-black text-gray-500 hover:border-bleu-de-france hover:text-black"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <PropertyCarousel/>
      </div>
    </div>
  );
};

export default Home;
