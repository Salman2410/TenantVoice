import React from "react";

const AddReviewButton = ({ onClick }) => {
  return (
    <div className="text-center">
      <button
        onClick={onClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add a review
      </button>
    </div>
  );
};

export default AddReviewButton;
