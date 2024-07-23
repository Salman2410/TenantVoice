import React, { useState } from "react";
import Modal from "../Modal";
import Propertyfilterform from "./Propertyfiterform";

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

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isMapVisible, setIsMapVisible] = useState(false);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleSubmitFilter = (data) => {
    console.log("Filter Submitted", data);
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
    <div>
      <div className="w-full max-w-2xl p-4 bg-white shadow-md rounded-lg">
        <div className="flex flex-wrap gap-2 mb-2">
          {selectedItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center bg-gray-200 p-2 rounded-lg"
            >
              {item.value}
              <button
                className="ml-2 text-[#1c8ce2]"
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
          onClick={() => setIsMapVisible(true)} // Show map when input is clicked
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
        {isMapVisible && (
          <div className="relative mt-2">
            <div
              className="relative"
              style={{ height: "400px", width: "100%" }}
            >
              <iframe
                title="Google Map of Australia"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35382498.28868245!2d133.775136!3d-25.274398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2b44d0a3afc69f3b%3A0x400f6376577c8f0!2sAustralia!5e0!3m2!1sen!2sus!4v1627877763966!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
              <button
                className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-lg"
                onClick={() => setIsMapVisible(false)}
              >
                Close Map
              </button>
            </div>
          </div>
        )}
        <div className="flex justify-between mt-4">
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
            className="bg-[#1c8ce2] text-white p-2 rounded-lg"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
