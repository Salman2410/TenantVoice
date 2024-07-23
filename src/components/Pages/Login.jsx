import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppleButton from "../Button/AppleButton";
import GoogleButton from "../Button/GoogleButton";

// Dummy credentials for testing
const DUMMY_CREDENTIALS = {
  username: "testuser",
  email: "testuser@example.com",
  password: "password123",
};

const Login = () => {
  const [inputValue, setInputValue] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      (inputValue === DUMMY_CREDENTIALS.username ||
        inputValue === DUMMY_CREDENTIALS.email) &&
      "password123" === DUMMY_CREDENTIALS.password
    ) {
      localStorage.setItem("isLoggedIn", "true");
      setMessage("Logged in successfully!");
      navigate("/tenantdashboard");
    } else {
      setMessage("Invalid credentials. Please try again.");
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <section className="mx-auto my-20 px-4 py-8 bg-white border border-gray-300 rounded-lg max-w-md">
        <h2 className="text-center text-xl md:text-2xl text-gray-900 font-semibold">
          Log in to TenantVoice
        </h2>
        <form className="space-y-6" onSubmit={handleLogin}>
          <div className="mt-8 ">
            <input
              type="text"
              placeholder="Username or Email"
              value={inputValue}
              onChange={handleInputChange}
              className="w-full p-2 text-gray-700 border border-gray-300 rounded-lg outline-none"
            />
            <button
              type="submit"
              className="w-full mt-4 bg-green-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Continue
            </button>
          </div>
          {message && <p className="text-center text-red-500">{message}</p>}
          <div className="flex items-center justify-center my-4">
            <div className="border-t border-gray-300 flex-grow mr-3"></div>
            <span className="text-gray-500">or</span>
            <div className="border-t border-gray-300 flex-grow ml-3"></div>
          </div>
          <GoogleButton />
          <AppleButton />
          <div className="flex items-center justify-center my-4 pt-16">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500">
              Don't have a TenantVoice account?
            </span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <button className="w-full py-2 px-4 border border-green-600 text-green-600 rounded-lg text-sm font-medium bg-white hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
            Sign Up
          </button>
        </form>
      </section>
    </>
  );
};

export default Login;
