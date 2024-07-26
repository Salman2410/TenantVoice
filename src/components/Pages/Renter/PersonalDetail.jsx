import React from "react";
import { useForm } from "react-hook-form";

const MyForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="max-w-xl w-full ml-40 p-4 mb-14">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-lg overflow-hidden p-5 space-y-6"
      >
        <div>
          <label
            htmlFor="firstName"
            className="block text-lg font-medium text-gray-700"
          >
            First name
          </label>
          <input
            {...register("firstName", { required: true })}
            id="firstName"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-base p-2"
          />
          {errors.firstName && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        <div>
          <label
            htmlFor="lastName"
            className="block text-lg font-medium text-gray-700"
          >
            Last name
          </label>
          <input
            {...register("lastName", { required: true })}
            id="lastName"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-base p-2"
          />
          {errors.lastName && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        <div>
          <label
            htmlFor="dob"
            className="block text-lg font-medium text-gray-700"
          >
            Date of birth
          </label>
          <div className="flex space-x-2">
            <select
              {...register("dobDay", { required: true })}
              id="dobDay"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-base p-2"
            >
              {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
            <select
              {...register("dobMonth", { required: true })}
              id="dobMonth"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-base p-2"
            >
              {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
            <select
              {...register("dobYear", { required: true })}
              id="dobYear"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-base p-2"
            >
              {Array.from(
                { length: 100 },
                (_, i) => new Date().getFullYear() - i
              ).map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          {(errors.dobDay || errors.dobMonth || errors.dobYear) && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>

        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-lg font-medium text-gray-700"
          >
            Phone number (mobile preferred)
          </label>
          <input
            {...register("phoneNumber", { required: true })}
            id="phoneNumber"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-base p-2"
          />
          {errors.phoneNumber && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
          <p className="text-gray-500 text-sm mt-1">
            Use numbers only, without spaces or other characters, e.g.
            0416222333 or 0244443333.
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
            className="bg-red-600 text-white px-6 py-3 rounded-md shadow-sm hover:bg-red-700 text-base"
          >
            Save and back
          </button>
        </div>
      </form>
    </div>
  );
};

const PersonalDetail = () => {
  return (
    <div className="w-full">
      <div className="bg-[#F6F5F7]">
        <div className="ml-[188px] pt-4 pb-8">
          <p className="text-[0.75rem] leading-[1rem] font-medium text-[#726E75]">
            RENTER PROFILE
          </p>
          <p className="text-[34px] text-[#3D3B40] font-semibold">
            Personal details
          </p>
        </div>
      </div>
      <MyForm />
    </div>
  );
};

export default PersonalDetail;
