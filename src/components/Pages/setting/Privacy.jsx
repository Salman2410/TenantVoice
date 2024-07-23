import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

const PrivacySettings = () => {
  const [settings, setSettings] = useState({
    suggestedProperties: false,
    propertyUpdates: false,
    personalisedAds: false,
  });

  const handleToggle = (setting) => {
    setSettings({ ...settings, [setting]: !settings[setting] });
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <NotificationItem
        title="Suggested properties"
        description="We use your latest property searches to suggest relevant properties on our website and app. Turning this off means you’ll no longer see those suggestions."
        checked={settings.suggestedProperties}
        onChange={() => handleToggle("suggestedProperties")}
      />
      <NotificationItem
        title="Property updates via push/in-app notification"
        description="What you do when viewing a property allows us to spot your favourites and update you on any changes via the Property update push/in-app notification. With this turned off, you won’t receive those updates."
        checked={settings.propertyUpdates}
        onChange={() => handleToggle("propertyUpdates")}
      />
      <NotificationItem
        title="Personalised ads"
        description="Allows us to use your activity and info to tailor the ads shown on our site. With this turned off, you’ll still see ads they’ll just be less relevant."
        additionalInfo={
          <p className="text-sm text-gray-600">
            To opt out of receiving personalised ads on other sites based on
            your activity here, visit our service providers:
            <br />
            <a href="#" className="text-blue-500">
              ID5 Opt Out
            </a>
            <br />
            <a href="#" className="text-blue-500">
              Liveramp Permanent Opt Out
            </a>
            <br />
            <a href="#" className="text-blue-500">
              Liveramp Cookie Opt Out
            </a>
            <br />
            <a href="#" className="text-blue-500">
              Unified ID 2.0 (UID2) Opt Out
            </a>
          </p>
        }
        checked={settings.personalisedAds}
        onChange={() => handleToggle("personalisedAds")}
      />
    </div>
  );
};

const NotificationItem = ({
  title,
  description,
  additionalInfo,
  checked,
  onChange,
}) => {
  return (
    <div className="mb-6 border-b pb-4">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
          {additionalInfo && additionalInfo}
        </div>
        <FormControlLabel
          control={<Switch checked={checked} onChange={onChange} />}
          label=""
          className="ml-2"
        />
      </div>
    </div>
  );
};

export default PrivacySettings;
