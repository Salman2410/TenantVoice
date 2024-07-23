import React, { useState } from "react";
import Search from "./search";
import Modal from "../Modal";
import ReviewSearch from "../Review/SearchReview";
import TabButtons from "../Button/Tabbutton";

const PropertySearch = () => {
  const [activeTab, setActiveTab] = useState("propertySearch");

  return (
    <div className="w-[60%] mx-auto my-10 rounded-2xl h-80 flex flex-col items-center justify-center">
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg w-[70%] max-w-4xl mx-auto">
        <TabButtons activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === "reviewSearch" ? <ReviewSearch /> : <Search />}
      </div>
    </div>
  );
};

export default PropertySearch;
