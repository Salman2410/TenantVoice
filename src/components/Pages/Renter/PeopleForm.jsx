import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const OccupantForm = () => {
  const { register, handleSubmit, watch } = useForm();
  const navigate = useNavigate();
  const occupants = watch("occupants");
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isAdult, setIsAdult] = useState(null);

  const onSubmit = (data) => {
    console.log(data);
  };

  const onModalSubmit = (modalData) => {
    console.log(modalData);
    setShowModal(false);
  };

  const handleCancel = () => {
    navigate("/RenterProfile");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div className="absolute left-[165px] top-[210px] max-w-md p-8 rounded ">
        <h2 className="text-xl font-bold mb-4">People</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex flex-col">
            <label className="mb-2 font-medium">
              Will you live with other occupants who are not on the lease?
            </label>
            <div className="flex">
              <label
                className={`px-4 py-2 border rounded-l cursor-pointer ${
                  occupants === "Yes"
                    ? "bg-gray-800 text-white"
                    : "bg-white text-gray-800"
                }`}
              >
                <input
                  type="radio"
                  value="Yes"
                  {...register("occupants", { required: true })}
                  className="hidden"
                  onChange={() => setShowAdditionalInfo(true)}
                />
                Yes
              </label>
              <label
                className={`px-4 py-2 border rounded-r cursor-pointer ${
                  occupants === "No"
                    ? "bg-gray-800 text-white"
                    : "bg-white text-gray-800"
                }`}
              >
                <input
                  type="radio"
                  value="No"
                  {...register("occupants", { required: true })}
                  className="hidden"
                  onChange={() => setShowAdditionalInfo(false)}
                />
                No
              </label>
            </div>
          </div>
          {showAdditionalInfo && (
            <div className="mt-4">
              <p className="text-gray-700 mb-2">
                Leaseholders can’t be added to a Renter Profile at the moment.
                We’ll remind you to add them when you apply for a rental.
              </p>
              <p className="text-gray-700 mb-4">
                Add details of other occupants so the agent knows who you plan
                to live with.
              </p>
              <button
                type="button"
                className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-100"
                onClick={() => setShowModal(true)}
              >
                Add occupant
              </button>
            </div>
          )}
          <div className="flex justify-between mt-4">
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`px-4 py-2 rounded ${
                occupants
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
              disabled={!occupants}
            >
              Save and back
            </button>
          </div>
        </form>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Add person</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
            </div>
            <form onSubmit={handleSubmit(onModalSubmit)}>
              <div className="flex flex-col mb-4">
                <label className="mb-2 font-medium">
                  Is the occupant 18 years of age or over?
                </label>
                <div className="flex">
                  <label
                    className={`px-4 py-2 border rounded-l cursor-pointer ${
                      isAdult === "Yes"
                        ? "bg-gray-800 text-white"
                        : "bg-white text-gray-800"
                    }`}
                  >
                    <input
                      type="radio"
                      value="Yes"
                      {...register("ageStatus", { required: true })}
                      className="hidden"
                      onChange={() => setIsAdult("Yes")}
                    />
                    Yes
                  </label>
                  <label
                    className={`px-4 py-2 border rounded-r cursor-pointer ${
                      isAdult === "No"
                        ? "bg-gray-800 text-white"
                        : "bg-white text-gray-800"
                    }`}
                  >
                    <input
                      type="radio"
                      value="No"
                      {...register("ageStatus", { required: true })}
                      className="hidden"
                      onChange={() => setIsAdult("No")}
                    />
                    No
                  </label>
                </div>
              </div>
              {isAdult !== null && (
                <>
                  <div className="flex flex-col mb-4">
                    <label className="mb-2 font-medium">
                      Occupant's given name
                    </label>
                    <input
                      type="text"
                      {...register("occupantName", { required: true })}
                      placeholder="Enter name"
                      className="px-4 py-2 border rounded"
                    />
                  </div>
                  {isAdult === "No" && (
                    <div className="flex flex-col mb-4">
                      <label className="mb-2 font-medium">
                        Occupant's years of age (optional)
                      </label>
                      <input
                        type="number"
                        {...register("occupantAge", { min: 0, max: 17 })}
                        placeholder="Enter age"
                        className="px-4 py-2 border rounded"
                      />
                      <small className="text-gray-500">
                        Use numbers between 0 and 17.
                      </small>
                    </div>
                  )}
                </>
              )}
              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default OccupantForm;
