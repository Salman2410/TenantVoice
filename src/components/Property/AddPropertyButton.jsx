import React from "react";

const AddPropertyButton = ({ onClick }) => {
  return (
    <div className="text-center">
      <button
        onClick={onClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add New Property
      </button>
    </div>
  );
};

export default AddPropertyButton;
