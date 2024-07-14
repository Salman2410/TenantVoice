import React, { useState } from "react";
import PropertySearch from "../Property/PropertySearch";
import CardContainer from "../Property/Card-property";

const categories = ["Buying", "Renting", "Selling", "Researching"];

const Home = () => {
  const [activeCategory, setActiveCategory] = useState("Buying");

  return (
    <div>
      <PropertySearch />
      <div className="w-[70%] mx-auto">
        <h2 className="text-2xl text-[#3D3B40] font-bold">
          Explore all things properly
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
        <h2 className="text-2xl text-[#3D3B40] font-bold">
          Latest Property News
        </h2>
      </div>
    </div>
  );
};

export default Home;
