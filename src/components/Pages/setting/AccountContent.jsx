import React from "react";

const AccountContent = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold">Email</h2>
        <div className="flex items-center space-x-2">
          <i className="far fa-envelope"></i>
          <span>salmanwaheed2410@gmail.com</span>
          <a href="#" className="text-blue-600 hover:underline">
            Change email
          </a>
        </div>
        <span className="text-green-600">Verified</span>
      </div>

      <div>
        <h2 className="text-lg font-semibold">Password</h2>
        <p>
          Looking to update your password? We've gone password-less. Simply
          enter your email address when you log in to receive your unique
          verification code.
        </p>
      </div>

      <div>
        <h2 className="text-lg font-semibold">Sign out everywhere</h2>
        <p>
          Lost a device or signed in from a public computer? Sign out on all
          devices to protect your account from unauthorised access.
        </p>
        <button className="mt-2 px-4 py-2 border border-gray-300 rounded-md">
          Sign out on all devices
        </button>
      </div>

      <div>
        <button className="text-red-600 hover:underline">Delete account</button>
      </div>
    </div>
  );
};

export default AccountContent;
