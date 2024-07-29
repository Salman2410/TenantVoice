import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const UtilityForm = () => {
  const { register, handleSubmit, watch } = useForm();
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);

  const onSubmit = (data) => {
    console.log(data);
    navigate("/RenterProfile");
  };

  const handleCancel = () => {
    navigate("/RenterProfile");
  };

  const selectedServiceOption = watch("serviceOption");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white py-12 px-4">
      <div className="max-w-3xl absolute left-[165px] top-[210px] mt-12 mb-12  p-8 rounded">
        <h2 className="text-xl font-bold mb-4">
          Would you like to be contacted about{" "}
          <span className="text-blue-600">
            moving or utility connection services
          </span>{" "}
          (for the purposes of arranging your energy plan and other services) if
          your application is successful?
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex flex-col mb-4">
            <div className="flex space-x-2">
              <label
                className={`px-8 py-2 border rounded-l cursor-pointer transition-all duration-200 ${
                  selectedServiceOption === "Yes" || selectedOption === "Yes"
                    ? "bg-black text-white"
                    : "bg-white text-gray-800 hover:bg-gray-800 hover:text-white"
                }`}
              >
                <input
                  type="radio"
                  value="Yes"
                  {...register("serviceOption", { required: true })}
                  className="hidden"
                  onChange={() => setSelectedOption("Yes")}
                />
                Yes
              </label>
              <label
                className={`px-8 py-2 border rounded-r cursor-pointer transition-all duration-200 ${
                  selectedServiceOption === "No" || selectedOption === "No"
                    ? "bg-black text-white"
                    : "bg-white text-gray-800 hover:bg-gray-800 hover:text-white"
                }`}
              >
                <input
                  type="radio"
                  value="No"
                  {...register("serviceOption", { required: true })}
                  className="hidden"
                  onChange={() => setSelectedOption("No")}
                />
                No
              </label>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-gray-700 mb-4">
              If ‘Yes’, the agency managing this property will share your
              contact information with their preferred moving and utility
              connection service. Speak to the agency to find out more about
              their preferred providers.
            </p>
            <p className="text-gray-700 mb-4">
              If ‘No’, you won’t be contacted about utilities and connections
              services. However, successful applicants for properties based in
              Victoria may still be contacted for water connections services as
              per Victoria’s State guidelines.
            </p>
          </div>
          <div className="flex justify-between mt-4">
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition-all duration-200"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`px-4 py-2 rounded transition-all duration-200 ${
                selectedOption
                  ? "bg-red-500 text-white hover:bg-red-600"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
              disabled={!selectedOption}
            >
              Save and back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UtilityForm;
