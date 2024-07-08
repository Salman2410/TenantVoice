import React from "react";

const GoogleButton = () => {
  return (
    <button className="flex items-center justify-center w-full py-2 px-4 my-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      <div className="bg-white rounded-l-md flex items-center justify-center p-2">
        <img
          src="https://img.icons8.com/color/20/000000/google-logo.png"
          alt="Google Icon"
          className="h-4 w-4"
        />
      </div>
      <span className="ml-3">Continue with Google</span>
    </button>
  );
};

const AppleButton = () => {
  return (
    <button className="flex items-center justify-center w-full py-2 px-4 mt-6 border border-gray-400 rounded-lg shadow-sm text-sm font-medium text-black bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
      <img
        src="https://img.icons8.com/ios-filled/20/000000/mac-os.png"
        alt="Apple Icon"
        className="mr-2"
      />
      Continue with Apple
    </button>
  );
};

const Login = () => {
  return (
    <>
      <section className="mx-auto my-20 px-4 py-8 bg-white border border-gray-300 rounded-lg max-w-md">
        <h2 className="text-center text-xl md:text-2xl text-gray-900 font-semibold">
          Log in to TenantVoice
        </h2>
        <form className="space-y-6">
          <div className="mt-8 ">
            <input
              type="text"
              placeholder="Username or Email"
              className="w-full p-2 text-gray-700 border border-gray-300 rounded-lg outline-none"
            />
            <button className="w-full mt-4 bg-green-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              Continue
            </button>
          </div>
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
