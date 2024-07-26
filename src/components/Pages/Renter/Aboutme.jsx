import React from "react";
import { useForm } from "react-hook-form";

const IntroductionForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const introductionText = watch("introduction", "");

  return (
    <div className="max-w-2xl ml-[172px] p-4">
      <h1 className="text-2xl font-bold mb-4">Introduce yourself</h1>
      <p className="text-gray-700 mb-4">
        Share with the agent and landlord why you are the best fit for the
        property.
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded-lg overflow-hidden p-6 space-y-6"
      >
        <div>
          <label
            htmlFor="introduction"
            className="block text-lg font-medium text-gray-700"
          >
            Include details about yourself, any hobbies and why you want this
            property.
          </label>
          <textarea
            {...register("introduction", { required: true, maxLength: 3000 })}
            id="introduction"
            rows="10"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-base p-4"
          ></textarea>
          {errors.introduction && (
            <span className="text-red-500 text-sm">
              This field is required and should be less than 3000 characters
            </span>
          )}
        </div>
        <div className="text-right text-gray-500 text-sm">
          {introductionText.length}/3000
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">
            Optional supporting documents
          </h2>
          <p className="text-gray-700 mb-4">
            Attach any supporting document you’d like e.g. letters of
            recommendation, tenant ledgers or company guarantees.
          </p>
          <input
            type="file"
            {...register("supportingDocuments")}
            id="supportingDocuments"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-base p-4"
            accept=".gif,.jpg,.jpeg,.png,.heic,.pdf"
          />
          <p className="text-gray-500 text-sm mt-1">
            Max. 10MB - GIF, JPG, JPEG, PNG, HEIC, PDF
          </p>
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            className="bg-white text-gray-700 px-6 py-3 border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 text-base"
          >
            Cancel
          </button>
          <button
            type="submit"
            className={`px-6 py-3 rounded-md shadow-sm text-base ${
              introductionText
                ? "bg-red-600 text-white hover:bg-red-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            disabled={!introductionText}
          >
            Save and back
          </button>
        </div>
      </form>
    </div>
  );
};

const Aboutme = () => {
  return (
    <div className="w-full">
      <div className="bg-[#F6F5F7]">
        <div className="ml-[188px] pt-4 pb-8">
          <p className="text-[0.75rem] leading-[1rem] font-medium text-[#726E75]">
            RENTER PROFILE
          </p>
          <p className="text-[34px] text-[#3D3B40] font-semibold">About me</p>
        </div>
      </div>
      <IntroductionForm />
    </div>
  );
};

export default Aboutme;
