import React from "react";

const GoogleButton = () => {
  return (
    <button className="flex items-center justify-center w-full py-2 px-4 my-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      <div className="bg-white rounded-l-md flex items-center justify-center p-2">
        <img
          src="https://img.icons8.com/color/20/000000/google-logo.png"
          alt="Google Icon"
          className="h-4 w-4"
        />
      </div>
      <span className="ml-3">Continue with Google</span>
    </button>
  );
};

export default GoogleButton;
