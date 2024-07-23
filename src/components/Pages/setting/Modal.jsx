import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

const Modal = ({ show, onClose, title, description }) => {
  const [isEmailEnabled, setIsEmailEnabled] = useState(false);

  if (!show) {
    return null;
  }

  const handleToggle = () => {
    setIsEmailEnabled(!isEmailEnabled);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button onClick={onClose} className="text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <p className="mb-4">{description}</p>
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <svg
              className="w-6 h-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 12H8m4-4v8"
              />
            </svg>
            <span className="font-medium">Email</span>
            <FormControlLabel
              control={
                <Switch checked={isEmailEnabled} onChange={handleToggle} />
              }
              label=""
              className="ml-auto"
            />
          </div>
          <div className="flex items-center text-gray-400">
            <svg
              className="w-6 h-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 12H8m4-4v8"
              />
            </svg>
            <span>Push</span>
            <span className="ml-auto">
              Download the{" "}
              <a href="#" className="text-blue-500">
                Android
              </a>{" "}
              or{" "}
              <a href="#" className="text-blue-500">
                iOS
              </a>{" "}
              app for push notifications
            </span>
          </div>
        </div>
        <a href="#" className="text-blue-500 mb-4 block">
          Manage individual saved searches
        </a>
        <div className="flex justify-end">
          <button
            className={`px-4 py-2 rounded ${
              isEmailEnabled
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-600 cursor-not-allowed"
            }`}
            disabled={!isEmailEnabled}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
