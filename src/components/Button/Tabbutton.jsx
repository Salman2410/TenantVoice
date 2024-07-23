// src/Button/TabButtons.js

import React from "react";
import { useNavigate } from "react-router-dom";

const TabButtons = ({ activeTab, setActiveTab }) => {
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === "reviewSearch") {
      navigate("/reviewpage");
    }
  };

  return (
    <div className="flex justify-center space-x-8 my-4">
      <button
        onClick={() => handleTabClick("reviewSearch")}
        className={`text-lg font-medium pb-1 ${
          activeTab === "reviewSearch"
            ? "text-bleu-de-france border-b-2 border-bleu-de-france"
            : "text-gray-400"
        } hover:text-bleu-de-france rounded`}
      >
        Read Reviews
      </button>
      <button
        onClick={() => handleTabClick("propertySearch")}
        className={`text-lg font-medium pb-1 ${
          activeTab === "propertySearch"
            ? "text-bleu-de-france border-b-2 border-bleu-de-france"
            : "text-gray-400"
        } hover:text-bleu-de-france rounded`}
      >
        Find Properties
      </button>
    </div>
  );
};

export default TabButtons;
