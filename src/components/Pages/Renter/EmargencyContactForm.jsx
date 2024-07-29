import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    // handle form submission
  };

  const handleCancel = () => {
    navigate("/RenterProfile");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-6">
      <div className="max-w-lg absolute left-[165px] top-[210px]  rounded-lg p-6">
        <p className="mb-6">
          You must have this person's consent to provide their personal
          information and to be contacted by the relevant agency.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              {...register("name", { required: "Please enter the name" })}
              className="w-full border rounded-lg px-3 py-2"
              placeholder="First and Last Name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-2">{errors.name.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="relationship">
              Relationship to you
            </label>
            <select
              id="relationship"
              {...register("relationship", {
                required: "Please select the relationship",
              })}
              className="w-full border rounded-lg px-3 py-2"
            >
              <option value="">Please select</option>
              <option value="family">Family</option>
              <option value="friend">Friend</option>
              <option value="colleague">Colleague</option>
              <option value="other">Other</option>
            </select>
            {errors.relationship && (
              <p className="text-red-500 text-sm mt-2">
                {errors.relationship.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="mobile">
              Mobile number
            </label>
            <input
              id="mobile"
              {...register("mobile", {
                required: "Please enter the mobile number",
              })}
              className="w-full border rounded-lg px-3 py-2"
              placeholder="Mobile number"
            />
            {errors.mobile && (
              <p className="text-red-500 text-sm mt-2">
                {errors.mobile.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email address
            </label>
            <input
              id="email"
              type="email"
              {...register("email", {
                required: "Please enter the email address",
              })}
              className="w-full border rounded-lg px-3 py-2"
              placeholder="Email address"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-2">
                {errors.email.message}
              </p>
            )}
            <p className="text-gray-500 text-sm mt-2">
              Contact details will only be used by the relevant agency in an
              emergency or if you are unreachable
            </p>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="confirmEmail">
              Confirm email address
            </label>
            <input
              id="confirmEmail"
              type="email"
              {...register("confirmEmail", {
                required: "Please confirm the email address",
                validate: (value) =>
                  value === watch("email") || "Email addresses do not match",
              })}
              className="w-full border rounded-lg px-3 py-2"
              placeholder="Confirm email address"
            />
            {errors.confirmEmail && (
              <p className="text-red-500 text-sm mt-2">
                {errors.confirmEmail.message}
              </p>
            )}
          </div>

          <div className="flex justify-between mt-8">
            <button
              type="button"
              className="text-gray-700"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-red-600 text-white px-4 py-2 rounded-lg"
            >
              Save and back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
