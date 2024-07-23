import React, { useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import Modal from "../Modal";
import Propertyfilterform from "./Propertyfilterform";

const mockSuggestions = [
  { type: "postcode", value: "2770" },
  { type: "postcode", value: "2773" },
  { type: "postcode", value: "2774" },
  { type: "postcode", value: "2775" },
  { type: "postcode", value: "2776" },
  { type: "postcode", value: "2777" },
  { type: "postcode", value: "2778" },
  // Add more mock suggestions for suburbs and states if needed
];

const containerStyle = {
  width: "100%",
  height: "400px",
  borderRadius: "8px",
  overflow: "hidden",
};

const center = {
  lat: -25.274398,
  lng: 133.775136,
};

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleSubmitFilter = () => {
    console.log("Filter Submitted", selectedItems);
    handleCloseModal();
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length > 2) {
      const filteredSuggestions = mockSuggestions.filter((suggestion) =>
        suggestion.value.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSelectSuggestion = (suggestion) => {
    if (!selectedItems.some((item) => item.value === suggestion.value)) {
      setSelectedItems([...selectedItems, suggestion]);
      setSearchTerm("");
      setSuggestions([]);
    }
  };

  const handleRemoveSelectedItem = (value) => {
    setSelectedItems(selectedItems.filter((item) => item.value !== value));
  };

  const handleSearch = () => {
    // Implement search functionality
    console.log("Search:", selectedItems);
  };

  return (
    <div className="">
      <div className="w-full max-w-2xl p-4  shadow-md rounded-lg mb-8">
        <div className="flex flex-wrap gap-2 mb-2">
          {selectedItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center bg-gray-200 p-2 rounded-lg"
            >
              {item.value}
              <button
                className="ml-2 text-red-500"
                onClick={() => handleRemoveSelectedItem(item.value)}
              >
                &times;
              </button>
            </div>
          ))}
        </div>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-lg mb-2"
          placeholder="Search by suburb, postcode, or state"
          value={searchTerm}
          onChange={handleInputChange}
        />
        {suggestions.length > 0 && (
          <ul className="bg-white border border-gray-300 rounded-lg shadow-lg mb-2 max-h-40 overflow-y-auto">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="p-2 cursor-pointer hover:bg-gray-200"
                onClick={() => handleSelectSuggestion(suggestion)}
              >
                {suggestion.value}
              </li>
            ))}
          </ul>
        )}
        <div className="flex justify-between">
          <button
            className="bg-gray-200 p-2 rounded-lg"
            onClick={handleOpenModal}
          >
            Filters
          </button>
          <Modal isVisible={isModalVisible} onClose={handleCloseModal}>
            <Propertyfilterform onSubmit={handleSubmitFilter} />
          </Modal>
          <button
            className="bg-red-500 text-white p-2 rounded-lg"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      <div className="relative mt-4 mb-4 w-full max-w-2xl mx-auto">
        <LoadScript
          googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
          key={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={4}
          >
            {/* Child components, such as markers, info windows, etc. */}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default Search;
