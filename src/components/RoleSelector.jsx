import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BsPersonBadge } from "react-icons/bs"; // Icon for roles

const roles = [
  {
    id: 1,
    name: "Tenant",
    description: "Find a rental home that suits your needs.",
  },
  {
    id: 2,
    name: "Landlord",
    description: "List your property and find tenants easily.",
  },
  {
    id: 3,
    name: "Rental Agency",
    description: "Manage multiple rental properties efficiently.",
  },
  {
    id: 4,
    name: "Government",
    description: "Ensure rental regulations and support.",
  },
];

const HiringCard = ({ role, onSelect, isSelected }) => {
  return (
    <label
      className={`border rounded-lg p-4 flex flex-col justify-between items-start mb-4 cursor-pointer bg-white hover:bg-gray-50 ${
        isSelected ? "border-[#1c8ce2] bg-green-100" : ""
      }`}
    >
      <div className="flex  items-center mb-2">
        <BsPersonBadge className="text-lg mr-3" />
        <span className="font-semibold">{role.name}</span>
      </div>
      <input
        type="radio"
        name="role"
        className="form-radio absolute h-5 w-5  text-blue-600 self-end"
        checked={isSelected}
        onChange={() => onSelect(role.id)}
      />
      <p className="text-gray-600 text-sm mb-2">{role.description}</p>
    </label>
  );
};

const RoleSelector = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    if (selectedRole) {
      navigate("/register"); // Navigate to '/register' when button is clicked
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-3xl font-bold mb-8">Join TenantVoice as a</h1>
      <div className="flex items-center gap-6 py-10 my-10">
        {roles.map((role) => (
          <HiringCard
            key={role.id}
            role={role}
            onSelect={setSelectedRole}
            isSelected={selectedRole === role.id}
          />
        ))}
      </div>
      <button
        className={`mt-8 px-4 py-2 rounded-lg ${
          selectedRole
            ? "bg-[#1c8ce2] text-white"
            : "bg-gray-300 text-gray-600 cursor-not-allowed"
        }`}
        disabled={!selectedRole}
        onClick={handleCreateAccount}
      >
        Create Account
      </button>
      <p className="mt-4">
        Already have an account?{" "}
        <NavLink to="/login" className="text-[#1c8ce2]">
          Log In
        </NavLink>
      </p>
    </div>
  );
};

export default RoleSelector;
