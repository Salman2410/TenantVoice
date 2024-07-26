// src/AddressModal.js
import React from "react";
import { useForm } from "react-hook-form";

const AddressModal = ({ isOpen, onClose, onSave }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    onSave(data);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Current address</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900"
          >
            &times;
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <input
              {...register("address", { required: true })}
              id="address"
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
              placeholder="Search for your address"
            />
            <p className="text-blue-600 hover:underline mt-1 cursor-pointer">
              Enter Australian or overseas address manually
            </p>
          </div>
          <div className="flex space-x-2">
            <div>
              <label
                htmlFor="moveInMonth"
                className="block text-sm font-medium text-gray-700"
              >
                When did you move in?
              </label>
              <select
                {...register("moveInMonth", { required: true })}
                id="moveInMonth"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
              >
                {[
                  "Month",
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ].map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="moveInYear"
                className="block text-sm font-medium text-gray-700"
              >
                &nbsp;
              </label>
              <select
                {...register("moveInYear", { required: true })}
                id="moveInYear"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
              >
                {[
                  "Year",
                  ...Array.from(
                    { length: 50 },
                    (_, i) => new Date().getFullYear() - i
                  ),
                ].map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Do you own the property?
            </label>
            <div className="flex space-x-4 mt-1">
              <label className="inline-flex items-center">
                <input
                  {...register("ownProperty", { required: true })}
                  type="radio"
                  value="No"
                  className="form-radio"
                />
                <span className="ml-2">No</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  {...register("ownProperty", { required: true })}
                  type="radio"
                  value="Yes"
                  className="form-radio"
                />
                <span className="ml-2">Yes</span>
              </label>
            </div>
          </div>
          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={onClose}
              className="bg-white text-gray-700 px-6 py-3 border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 text-base"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-red-600 text-white px-6 py-3 rounded-md shadow-sm hover:bg-red-700 text-base"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddressModal;
