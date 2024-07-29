import React from "react";
import { useForm } from "react-hook-form";

const EmploymentForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const employmentType = watch("employmentType");
  const notEmployed = watch("notEmployed");

  const onSubmit = (data) => {
    console.log(data);
  };

  // Arrays for months and years
  const months = [
    { value: "01", label: "01-Jan" },
    { value: "02", label: "02-Feb" },
    { value: "03", label: "03-Mar" },
    { value: "04", label: "04-Apr" },
    { value: "05", label: "05-May" },
    { value: "06", label: "06-Jun" },
    { value: "07", label: "07-Jul" },
    { value: "08", label: "08-Aug" },
    { value: "09", label: "09-Sep" },
    { value: "10", label: "10-Oct" },
    { value: "11", label: "11-Nov" },
    { value: "12", label: "12-Dec" },
  ];

  const years = Array.from(new Array(50), (val, index) => {
    const year = 2024 - index;
    return { value: year, label: year };
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-6">
      <div className="max-w-lg w-full absolute left-[165px] top-[210px] rounded-lg p-6">
        <h1 className="text-xl font-semibold mb-4">Employment</h1>
        <p className="mb-6">
          Add your current employment information and help verify your details
          with a valid reference.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                {...register("notEmployed")}
                className="form-checkbox"
              />
              <span className="ml-2">I am currently not employed</span>
            </label>
          </div>
          <div className="mb-6">
            <label className="block mb-2" htmlFor="employmentType">
              What's the employment type?
            </label>
            <select
              id="employmentType"
              {...register("employmentType", {
                required: !notEmployed && "Please select an employment type",
              })}
              className="w-full border rounded-lg px-3 py-2"
              disabled={notEmployed}
            >
              <option value="">Select</option>
              <option value="employed">Employed</option>
              <option value="selfEmployed">Self-employed</option>
            </select>
            {errors.employmentType && !notEmployed && (
              <p className="text-red-500 text-sm mt-2">
                {errors.employmentType.message}
              </p>
            )}
          </div>
          {employmentType === "employed" && (
            <>
              <div className="mb-6">
                <label className="block mb-2" htmlFor="companyName">
                  What's the name of the company?
                </label>
                <input
                  id="companyName"
                  {...register("companyName", {
                    required: "Please enter the company name",
                  })}
                  className="w-full border rounded-lg px-3 py-2"
                />
                {errors.companyName && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.companyName.message}
                  </p>
                )}
              </div>
              <div className="mb-6">
                <label className="block mb-2" htmlFor="jobTitle">
                  What's your job title?
                </label>
                <input
                  id="jobTitle"
                  {...register("jobTitle", {
                    required: "Please enter your job title",
                  })}
                  className="w-full border rounded-lg px-3 py-2"
                />
                {errors.jobTitle && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.jobTitle.message}
                  </p>
                )}
              </div>
              <div className="mb-6">
                <label className="block mb-2">
                  When did you start working here?
                </label>
                <div className="flex space-x-4">
                  <select
                    {...register("startMonth", {
                      required: "Please select the start month",
                    })}
                    className="w-1/2 border rounded-lg px-3 py-2 z-50"
                  >
                    <option value="">Month</option>
                    {months.map((month) => (
                      <option key={month.value} value={month.value}>
                        {month.label}
                      </option>
                    ))}
                  </select>
                  <select
                    {...register("startYear", {
                      required: "Please select the start year",
                    })}
                    className="w-1/2 border rounded-lg px-3 py-2 z-50"
                  >
                    <option value="">Year</option>
                    {years.map((year) => (
                      <option key={year.value} value={year.value}>
                        {year.label}
                      </option>
                    ))}
                  </select>
                </div>
                {(errors.startMonth || errors.startYear) && (
                  <p className="text-red-500 text-sm mt-2">
                    Please enter the start date
                  </p>
                )}
              </div>
              <div className="mb-6">
                <label className="block mb-2" htmlFor="referenceType">
                  Reference type
                </label>
                <select
                  id="referenceType"
                  {...register("referenceType", {
                    required: "Please select a reference type",
                  })}
                  className="w-full border rounded-lg px-3 py-2 z-50"
                >
                  <option value="">Please select</option>
                  <option value="owner">Owner</option>
                  <option value="manager">Manager</option>
                  <option value="accountant">Accountant</option>
                  <option value="other">Other</option>
                </select>
                {errors.referenceType && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.referenceType.message}
                  </p>
                )}
              </div>
              <div className="mb-6">
                <label className="block mb-2" htmlFor="referenceName">
                  Full name
                </label>
                <input
                  id="referenceName"
                  {...register("referenceName", {
                    required: "Please enter the full name",
                  })}
                  className="w-full border rounded-lg px-3 py-2"
                />
                {errors.referenceName && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.referenceName.message}
                  </p>
                )}
              </div>
              <div className="mb-6">
                <label className="block mb-2" htmlFor="referenceEmail">
                  Email
                </label>
                <input
                  id="referenceEmail"
                  type="email"
                  {...register("referenceEmail", {
                    required: "Please enter the email",
                  })}
                  className="w-full border rounded-lg px-3 py-2"
                />
                {errors.referenceEmail && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.referenceEmail.message}
                  </p>
                )}
              </div>
              <div className="mb-6">
                <label className="block mb-2" htmlFor="referencePhone">
                  Phone number
                </label>
                <input
                  id="referencePhone"
                  type="tel"
                  {...register("referencePhone", {
                    required: "Please enter the phone number",
                  })}
                  className="w-full border rounded-lg px-3 py-2"
                />
                {errors.referencePhone && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.referencePhone.message}
                  </p>
                )}
              </div>
            </>
          )}
          {employmentType === "selfEmployed" && (
            <>
              <div className="mb-6">
                <label className="block mb-2" htmlFor="companyName">
                  What's the name of the company?
                </label>
                <input
                  id="companyName"
                  {...register("companyName", {
                    required: "Please enter the company name",
                  })}
                  className="w-full border rounded-lg px-3 py-2"
                />
                {errors.companyName && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.companyName.message}
                  </p>
                )}
              </div>
              <div className="mb-6">
                <label className="block mb-2" htmlFor="abnAcn">
                  ABN / ACN
                </label>
                <input
                  id="abnAcn"
                  {...register("abnAcn", {
                    required: "Please enter the ABN / ACN",
                  })}
                  className="w-full border rounded-lg px-3 py-2"
                />
                {errors.abnAcn && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.abnAcn.message}
                  </p>
                )}
              </div>
              <div className="mb-6">
                <label className="block mb-2" htmlFor="jobTitle">
                  What's your job title?
                </label>
                <input
                  id="jobTitle"
                  {...register("jobTitle", {
                    required: "Please enter your job title",
                  })}
                  className="w-full border rounded-lg px-3 py-2"
                />
                {errors.jobTitle && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.jobTitle.message}
                  </p>
                )}
              </div>
              <div className="mb-6">
                <label className="block mb-2">
                  When did you start working here?
                </label>
                <div className="flex space-x-4">
                  <select
                    {...register("startMonth", {
                      required: "Please select the start month",
                    })}
                    className="w-1/2 border rounded-lg px-3 py-2 z-50"
                  >
                    <option value="">Month</option>
                    {months.map((month) => (
                      <option key={month.value} value={month.value}>
                        {month.label}
                      </option>
                    ))}
                  </select>
                  <select
                    {...register("startYear", {
                      required: "Please select the start year",
                    })}
                    className="w-1/2 border rounded-lg px-3 py-2 z-50"
                  >
                    <option value="">Year</option>
                    {years.map((year) => (
                      <option key={year.value} value={year.value}>
                        {year.label}
                      </option>
                    ))}
                  </select>
                </div>
                {(errors.startMonth || errors.startYear) && (
                  <p className="text-red-500 text-sm mt-2">
                    Please enter the start date
                  </p>
                )}
              </div>
              <div className="mb-6">
                <label className="block mb-2" htmlFor="referenceType">
                  Reference type
                </label>
                <select
                  id="referenceType"
                  {...register("referenceType", {
                    required: "Please select a reference type",
                  })}
                  className="w-full border rounded-lg px-3 py-2 z-50"
                >
                  <option value="">Please select</option>
                  <option value="owner">Owner</option>
                  <option value="manager">Manager</option>
                  <option value="accountant">Accountant</option>
                  <option value="other">Other</option>
                </select>
                {errors.referenceType && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.referenceType.message}
                  </p>
                )}
              </div>
              <div className="mb-6">
                <label className="block mb-2" htmlFor="referenceName">
                  Full name
                </label>
                <input
                  id="referenceName"
                  {...register("referenceName", {
                    required: "Please enter the full name",
                  })}
                  className="w-full border rounded-lg px-3 py-2"
                />
                {errors.referenceName && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.referenceName.message}
                  </p>
                )}
              </div>
              <div className="mb-6">
                <label className="block mb-2" htmlFor="referenceEmail">
                  Email
                </label>
                <input
                  id="referenceEmail"
                  type="email"
                  {...register("referenceEmail", {
                    required: "Please enter the email",
                  })}
                  className="w-full border rounded-lg px-3 py-2"
                />
                {errors.referenceEmail && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.referenceEmail.message}
                  </p>
                )}
              </div>
              <div className="mb-6">
                <label className="block mb-2" htmlFor="referencePhone">
                  Phone number
                </label>
                <input
                  id="referencePhone"
                  type="tel"
                  {...register("referencePhone", {
                    required: "Please enter the phone number",
                  })}
                  className="w-full border rounded-lg px-3 py-2"
                />
                {errors.referencePhone && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.referencePhone.message}
                  </p>
                )}
              </div>
            </>
          )}
          <div className="flex justify-between mt-8">
            <button type="button" className="text-gray-700">
              Cancel
            </button>
            <button
              type="submit"
              className={`bg-blue-600 text-white px-4 py-2 rounded-lg ${
                !(employmentType || notEmployed)
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              disabled={!(employmentType || notEmployed)}
            >
              Save and back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmploymentForm;
