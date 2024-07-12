import React, { useState } from "react";
import Search from "./search";
import img1 from "../../assets/Propertysearch.avif";

const tabs = ["Buy", "Rent", "Sold", "Address", "Agents"];

const PropertySearch = () => {
  const [activeTab, setActiveTab] = useState("Buy");

  return (
    <div
      className="w-[70%] mx-auto my-10 rounded-2xl bg-cover bg-center h-80 flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${img1})` }}
    >
      <h2 className="text-2xl font-bold mb-4 text-center">
        Properties to call home
      </h2>
      <div className="bg-white p-4 rounded-lg shadow-lg w-[70%] max-w-4xl mx-auto">
        <div className="flex justify-center mb-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`mx-2 px-4 py-2 ${
                activeTab === tab
                  ? "border-b-4 border-red-500 text-black"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <Search />
      </div>
    </div>
  );
};

export default PropertySearch;
