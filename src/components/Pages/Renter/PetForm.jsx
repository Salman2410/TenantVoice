import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const PetForm = () => {
  const { register, handleSubmit, watch } = useForm();
  const navigate = useNavigate();
  const [selectedDogs, setSelectedDogs] = useState("0");
  const [selectedCats, setSelectedCats] = useState("0");
  const [selectedOtherPets, setSelectedOtherPets] = useState("0");

  const onSubmit = (data) => {
    console.log(data);
    navigate("/RenterProfile");
  };

  const handleCancel = () => {
    navigate("/RenterProfile");
  };

  const petOptions = ["0", "1", "2", "3", "4+"];

  const showDescription =
    selectedDogs !== "0" || selectedCats !== "0" || selectedOtherPets !== "0";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white py-12 px-4">
      <div className="relative w-full max-w-md p-8 rounded  mt-12 mb-12">
        <h2 className="text-xl font-bold mb-4">
          Let the property manager know if you have pets.
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex flex-col mb-4">
            <label className="mb-2 font-medium">Dogs</label>
            <div className="flex space-x-2">
              {petOptions.map((option) => (
                <label
                  key={option}
                  className={`px-4 py-2 border cursor-pointer ${
                    selectedDogs === option
                      ? "bg-gray-800 text-white"
                      : "bg-white text-gray-800"
                  }`}
                >
                  <input
                    type="radio"
                    value={option}
                    {...register("dogs", { required: true })}
                    className="hidden"
                    onChange={() => setSelectedDogs(option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 font-medium">Cats</label>
            <div className="flex space-x-2">
              {petOptions.map((option) => (
                <label
                  key={option}
                  className={`px-4 py-2 border cursor-pointer ${
                    selectedCats === option
                      ? "bg-gray-800 text-white"
                      : "bg-white text-gray-800"
                  }`}
                >
                  <input
                    type="radio"
                    value={option}
                    {...register("cats", { required: true })}
                    className="hidden"
                    onChange={() => setSelectedCats(option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 font-medium">Other pets</label>
            <div className="flex space-x-2">
              {petOptions.map((option) => (
                <label
                  key={option}
                  className={`px-4 py-2 border cursor-pointer ${
                    selectedOtherPets === option
                      ? "bg-gray-800 text-white"
                      : "bg-white text-gray-800"
                  }`}
                >
                  <input
                    type="radio"
                    value={option}
                    {...register("otherPets", { required: true })}
                    className="hidden"
                    onChange={() => setSelectedOtherPets(option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
          {showDescription && (
            <div className="mt-4">
              <div className="flex flex-col mb-4">
                <label className="mb-2 font-medium">
                  Describe your pets in more detail
                </label>
                <textarea
                  {...register("petDetails", { required: true })}
                  placeholder="Include breed or type, weight, age and temperament, or a pet profile link if you have one."
                  maxLength="3000"
                  className="w-full h-48 px-4 py-2 border rounded"
                />
                <div className="text-right text-gray-500">0/3000</div>
              </div>
              <div className="p-4 bg-gray-100 rounded">
                <h3 className="font-bold mb-2">Declaring pets</h3>
                <p className="text-gray-700">
                  Use this space to tell them more about your pets. It's a good
                  opportunity to explain how amazing your pet is.
                </p>
              </div>
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
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Save and back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PetForm;
