import { useState } from "react";
import React from "react";
import { FaChevronDown } from "react-icons/fa";

const countries = [
  "Northern Mariana Islands",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestinian Territories",
  "Panama",
  // Add more countries as needed
];

const GoogleButton = () => {
  return (
    <button className="flex items-center justify-center w-full max-w-xs py-2 px-3 my-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      <div className="bg-white rounded-l-md flex items-center justify-center p-1.5">
        <img
          src="https://img.icons8.com/color/20/000000/google-logo.png"
          alt="Google Icon"
          className="h-3 w-3"
        />
      </div>
      <span className="ml-2 text-sm">Continue with Google</span>
    </button>
  );
};

const AppleButton = () => {
  return (
    <button className="flex items-center justify-center w-full max-w-xs py-2 px-3 my-2 border border-gray-400 rounded-md shadow-sm text-sm font-medium text-black bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 h-10">
      <img
        src="https://img.icons8.com/ios-filled/20/000000/mac-os.png"
        alt="Apple Icon"
        className="h-3 w-3 mr-2"
      />
      <span className="text-sm">Continue with Apple</span>
    </button>
  );
};

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("Pakistan");
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const filteredCountries = countries.filter((country) =>
    country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    if (
      newPassword.length < 8 ||
      !/[!@#$%^&*(),.?":{}|<>]/g.test(newPassword)
    ) {
      setPasswordError(
        "Password should be at least 8 characters, with a symbol or letter"
      );
    } else {
      setPasswordError("");
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <div>
        <h2 className="text-center text-3xl font-bold text-gray-900 mt-10">
          Sign up to TenantVoice
        </h2>
      </div>
      <div className="w-[40%] mx-auto my-8">
        <form action="">
          <div className="rounded-md shadow-sm space-y-4">
            <div className="flex justify-center gap-10">
              <AppleButton />
              <GoogleButton />
            </div>
            <div className="flex items-center justify-center my-4">
              <div className="border-t border-gray-300 flex-grow mr-3"></div>
              <span className="text-gray-500">or</span>
              <div className="border-t border-gray-300 flex-grow ml-3"></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="span-6 mt-3x">
                <label
                  htmlFor="first-name"
                  className="block mb-1x text-sm font-medium text-gray-700"
                >
                  First name
                </label>
                <div className="air3-input-group">
                  <input
                    type="text"
                    id="first-name"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="span-6 mt-3x">
                <label
                  htmlFor="last-name"
                  className="block mb-1x text-sm font-medium text-gray-700"
                >
                  Last name
                </label>
                <div className="air3-input-group">
                  <input
                    type="text"
                    id="last-name"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-full mx-auto py-8 space-y-6">
            <div>
              <label
                htmlFor="work-email"
                className="block text-sm font-medium text-gray-700"
              >
                Work email address
              </label>
              <input
                type="email"
                id="work-email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Password (8 or more characters)"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <span
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? (
                    <span className="text-gray-500">hide</span>
                  ) : (
                    <span className="text-gray-500">See Password</span>
                  )}
                </span>
              </div>

              {passwordError && (
                <p className="mt-2 text-sm text-yellow-600">{passwordError}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700">Country</label>
              <div
                className="mt-1 flex items-center justify-between border border-gray-300 rounded-md shadow-sm cursor-pointer"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <input
                  type="text"
                  value={selectedCountry}
                  readOnly
                  className="w-full px-3 py-2 bg-white border-none rounded-md focus:outline-none cursor-pointer"
                />
                <FaChevronDown className="mr-2 text-gray-500" />
              </div>
              {showDropdown && (
                <div className="absolute z-10 w-1/4 mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none"
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <ul className="max-h-60 overflow-y-auto">
                    {filteredCountries.map((country, index) => (
                      <li
                        key={index}
                        className="px-3 py-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => {
                          setSelectedCountry(country);
                          setShowDropdown(false);
                          setSearchTerm("");
                        }}
                      >
                        {country}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="flex items-center text-[16px]">
              <input
                type="checkbox"
                id="agreement"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                className="form-checkbox h-5 w-5 text-green-600"
              />
              <label htmlFor="agreement" className="ml-2 text-gray-700">
                Yes, I understand and agree to the
                <a
                  href="https://www.upwork.com/legal#terms-of-service"
                  className="text-green-600 underline ml-1"
                >
                  Upwork Terms of Service
                </a>
                , including the
                <a
                  href="https://www.upwork.com/legal#user-agreement"
                  className="text-green-600 underline mx-1"
                >
                  User Agreement
                </a>
                and
                <a
                  href="https://www.upwork.com/legal#privacy-policy"
                  className="text-green-600 underline ml-1"
                >
                  Privacy Policy
                </a>
                .
              </label>
            </div>
            <div className="w-[35%] mx-auto">
              <button
                type="button"
                className=" bg-green-500 text-center text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-green-600"
              >
                Create my account
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
