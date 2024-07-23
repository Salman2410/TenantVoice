import React, { useState } from "react";
import Modal from "./Modal";

const alertData = {
  propertyAlerts: {
    title: "Property alerts",
    description:
      "Discover homes we think you’ll like based on your browsing — even ones your saved searches may miss.",
    items: [
      {
        title: "Saved searches",
        email: "On",
        push: "Off",
        description:
          "Never miss when a new property hits the market in your saved search areas.",
      },
      {
        title: "Property updates",
        push: "Off",
        description: "Get updates on properties.",
      },
      {
        title: "Promoted residential properties",
        email: "On",
        description: "Promoted residential properties.",
      },
      {
        title: "Promoted off-the-plan properties",
        email: "On",
        description: "Promoted off-the-plan properties.",
      },
    ],
  },
  adviceAndInsights: {
    title: "Advice and insights",
    description:
      "Stay on top of the latest results and trends to take the next big step in your property journey.",
    items: [
      {
        title: "Your property journey",
        email: "On",
        description: "Your property journey.",
      },
      {
        title: "Market updates and trends",
        email: "On",
        description: "Market updates and trends.",
      },
      {
        title: "Sales and auction results",
        push: "Off",
        description: "Sales and auction results.",
      },
      {
        title: "News, guides and lifestyle",
        email: "On",
        description: "News, guides and lifestyle.",
      },
      {
        title: "Property finance",
        email: "On",
        description: "Property finance.",
      },
    ],
  },
};

const PropertyAlerts = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    description: "",
  });

  const handleItemClick = (item) => {
    setModalContent({ title: item.title, description: item.description });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">{data.title}</h2>
      <p className="mb-6">{data.description}</p>
      <div className="space-y-4">
        {data.items.map((item, index) => (
          <AlertItem
            key={index}
            item={item}
            onClick={() => handleItemClick(item)}
          />
        ))}
      </div>
      <Modal
        show={showModal}
        onClose={closeModal}
        title={modalContent.title}
        description={modalContent.description}
      />
    </div>
  );
};

const AlertItem = ({ item, onClick }) => {
  return (
    <div
      className="flex justify-between items-center p-4 border rounded-lg shadow-sm cursor-pointer"
      onClick={onClick}
    >
      <div>
        <h3 className="font-medium">{item.title}</h3>
        <p className="text-sm text-gray-600">
          {item.email && `Email: ${item.email}`}
          {item.email && item.push && `, `}
          {item.push && `Push: ${item.push}`}
        </p>
      </div>
      <button className="text-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};
const NotificationContent = () => {
  return (
    <div>
      <PropertyAlerts data={alertData.propertyAlerts} />
      <PropertyAlerts data={alertData.adviceAndInsights} />
    </div>
  );
};

export default NotificationContent;
