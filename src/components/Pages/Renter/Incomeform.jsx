import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const IncomeForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const noIncome = watch("noIncome");
  const [isModalOpen, setModalOpen] = useState(false);
  const [incomeSourceAdded, setIncomeSourceAdded] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    setModalOpen(false); // Close the modal on submit
    setIncomeSourceAdded(true); // Mark that an income source has been added
  };

  const handleCancel = () => {
    navigate("/RenterProfile");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-6">
      <div className="max-w-lg absolute left-[165px] top-[210px] rounded-lg p-6">
        <h1 className="text-xl font-semibold mb-4">Sources of income</h1>
        <p className="mb-6">
          Add all your income sources to help show you can afford the rent.
        </p>
        <form>
          <div className="mb-4">
            <button
              type="button"
              className="w-full border rounded-lg px-3 py-2 mb-4 bg-gray-100 text-gray-700"
              onClick={() => setModalOpen(true)}
              disabled={noIncome}
            >
              Add income source
            </button>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                {...register("noIncome")}
                className="form-checkbox"
              />
              <span className="ml-2">I currently don't receive any income</span>
            </label>
            {noIncome && (
              <div className="mt-4 p-4 bg-blue-100 text-blue-800 rounded">
                <p>
                  <strong>It's highly recommended</strong> to add a form of
                  income or finances to show you can afford the rent.
                </p>
                <p className="mt-2">
                  Income can refer to things like government benefits, bonuses,
                  commission, allowances or rent income.
                </p>
              </div>
            )}
          </div>

          <h2 className="text-xl font-semibold mb-4">Recent proof of income</h2>
          <p className="mb-4">
            Attach your three most recent payslips or any other supporting
            documents that prove your income.
          </p>
          <div className="mb-4">
            <input
              type="file"
              {...register("proofOfIncome", {
                required: "Please upload proof of income",
              })}
              className="w-full border rounded-lg px-3 py-2"
              accept="image/gif, image/jpeg, image/png, image/heic, application/pdf"
              disabled={noIncome}
            />
            {errors.proofOfIncome && (
              <p className="text-red-500 text-sm mt-2">
                {errors.proofOfIncome.message}
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
              className={`bg-blue-600 text-white px-4 py-2 rounded-lg ${
                !incomeSourceAdded ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={!incomeSourceAdded}
            >
              Save and back
            </button>
          </div>
        </form>

        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Income source</h2>
                <button
                  onClick={() => setModalOpen(false)}
                  className="text-gray-700"
                >
                  &times;
                </button>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <label className="block mb-2" htmlFor="incomeType">
                    What type of income is it?
                  </label>
                  <select
                    id="incomeType"
                    {...register("incomeType", {
                      required: "Please select an income type",
                    })}
                    className="w-full border rounded-lg px-3 py-2"
                  >
                    <option value="">Select</option>
                    <option value="Salary">Salary</option>
                    <option value="Family Allowance">Family Allowance</option>
                    <option value="Pensions">Pensions</option>
                    <option value="Existing Rental Income">
                      Existing Rental Income
                    </option>
                    <option value="Superannuation Income">
                      Superannuation Income
                    </option>
                    <option value="Proposed Rental Income">
                      Proposed Rental Income
                    </option>
                    <option value="Dividend Income">Dividend Income</option>
                    <option value="Overtime">Overtime</option>
                    <option value="Commission">Commission</option>
                    <option value="Child Support">Child Support</option>
                    <option value="Bonus">Bonus</option>
                  </select>
                  {errors.incomeType && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.incomeType.message}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label className="block mb-2" htmlFor="payFrequency">
                    Pay frequency
                  </label>
                  <select
                    id="payFrequency"
                    {...register("payFrequency", {
                      required: "Please select pay frequency",
                    })}
                    className="w-full border rounded-lg px-3 py-2"
                  >
                    <option value="">Select</option>
                    <option value="monthly">Monthly</option>
                    <option value="biweekly">Biweekly</option>
                    <option value="weekly">Weekly</option>
                  </select>
                  {errors.payFrequency && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.payFrequency.message}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label className="block mb-2" htmlFor="amount">
                    Amount (after tax)
                  </label>
                  <input
                    type="number"
                    id="amount"
                    {...register("amount", {
                      required: "Please enter the amount",
                    })}
                    className="w-full border rounded-lg px-3 py-2"
                    placeholder="$"
                  />
                  {errors.amount && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.amount.message}
                    </p>
                  )}
                </div>
                <div className="flex justify-between mt-8">
                  <button
                    type="button"
                    className="text-gray-700"
                    onClick={() => setModalOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-red-600 text-white px-4 py-2 rounded-lg"
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IncomeForm;
