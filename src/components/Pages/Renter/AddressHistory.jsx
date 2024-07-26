import React, { useState } from "react";
import AddressModal from "./AddressModal";

const AddressHistoryForm = () => {
  const [addresses, setAddresses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddAddress = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveAddress = (data) => {
    setAddresses([...addresses, { id: addresses.length + 1, ...data }]);
  };

  return (
    <div className="max-w-2xl ml-[175px] p-4 mt-4 mb-44">
      <h1 className="text-2xl font-bold mb-4">Address history</h1>
      <p className="text-gray-700 mb-2">
        Add two or more years of your most recent address history and help
        verify your details with a valid reference.
      </p>
      <p className="text-gray-700 mb-6">
        Your history could include living with parents or the property you own.
      </p>
      <div className="space-y-4">
        {addresses.map((address) => (
          <div
            key={address.id}
            className="p-4 border border-gray-300 rounded-md"
          >
            {address.address}
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={handleAddAddress}
        className="mt-4 w-full text-center bg-white text-gray-700 px-6 py-3 border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 text-base"
      >
        Add current address
      </button>
      <div className="flex justify-between mt-6">
        <button
          type="button"
          className="bg-white text-gray-700 px-6 py-3 border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 text-base"
        >
          Cancel
        </button>
        <button
          type="submit"
          className={`px-6 py-3 rounded-md shadow-sm text-base ${
            addresses.length
              ? "bg-red-600 text-white hover:bg-red-700"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
          disabled={addresses.length === 0}
        >
          Save and back
        </button>
      </div>
      <AddressModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveAddress}
      />
    </div>
  );
};

const AddressHistory = () => {
  return (
    <div className="w-full">
      <div className="bg-[#F6F5F7]">
        <div className="ml-[188px] pt-4 pb-8">
          <p className="text-[0.75rem] leading-[1rem] font-medium text-[#726E75]">
            Address history
          </p>
          <p className="text-[34px] text-[#3D3B40] font-semibold">
            Personal details
          </p>
        </div>
      </div>
      <AddressHistoryForm />
    </div>
  );
};

export default AddressHistory;
