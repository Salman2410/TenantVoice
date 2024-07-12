import React from 'react'

const AppleButton = () => {
  return (
    <button className="flex items-center justify-center w-full py-2 px-4 mt-6 border border-gray-400 rounded-lg shadow-sm text-sm font-medium text-black bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
      <img
        src="https://img.icons8.com/ios-filled/20/000000/mac-os.png"
        alt="Apple Icon"
        className="mr-2"
      />
      Continue with Apple
    </button>
  );
};

export default AppleButton