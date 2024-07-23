import React, { useState } from "react";
import AccountContent from "./AccountContent";
import NotificationContent from "./NotificationContent";
import PrivacySettings from "./Privacy";

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState("Account");

  const tabs = ["Account", "Notifications", "Privacy"];

  return (
    <div className="w-1/2 mx-auto my-20">
      <h1 className="text-3xl font-bold mb-4">Settings</h1>
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`${
                activeTab === tab
                  ? "border-red-500 text-red-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              } whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>
      <div className="mt-6">
        {/* Render the content of the active tab here */}
        {activeTab === "Account" && <AccountContent />}
        {activeTab === "Notifications" && <NotificationContent/>}
        {activeTab === "Privacy" && <PrivacySettings/>}
      </div>
    </div>
  );
};

export default TabsComponent;
