import React from "react";
import Card from "./Card";

import image1 from "../../assets/dashboard/track.svg";
import image2 from "../../assets/dashboard/saved.svg";
import image3 from "../../assets/dashboard/saved-searches-.svg";
import image4 from "../../assets/dashboard/renter-profile-.svg";
import image5 from "../../assets/dashboard/rental-applications-.svg";
import image6 from "../../assets/dashboard/finances-.svg";
import image7 from "../../assets/dashboard/settings.svg";
import image8 from "../../assets/dashboard/my-profile.svg";
import image9 from "../../assets/dashboard/private-landlord.svg";

const cardData = [
  {
    title: "Track your property",
    description: "Stay up to date with your home or properties you own.",
    imgSrc: image1,
    link: "/track",
  },
  {
    title: "My saved properties",
    description: "View open times and auctions for properties you've saved.",
    imgSrc: image2,
    link: "/Collection",
  },
  {
    title: "Saved searches & alerts",
    description: "View your saved searches and configure their alerts.",
    imgSrc: image3,
    link: "/page1",
  },
  {
    title: "Renter Profile",
    description: "Create or update your Renter Profile.",
    imgSrc: image4,
    link: "/RenterProfile",
  },
  {
    title: "Rental applications",
    description: "Track the status and view your rental applications.",
    imgSrc: image5,
    link: "/page1",
  },
  {
    title: "My finances",
    description: "Financial tools to help you make better property decisions.",
    imgSrc: image6,
    link: "/page1",
  },
  {
    title: "Settings",
    description:
      "Manage your login details, notifications and privacy settings.",
    imgSrc: image7,
    link: "/Setting",
  },
  {
    title: "My profile",
    description: "Manage your personal details and property needs.",
    imgSrc: image8,
    link: "/page1",
  },
  {
    title: "My rental listings",
    description: "Create and manage your rental property listings.",
    imgSrc: image9,
    link: "/page1",
  },
];

const CardGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {cardData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          imgSrc={card.imgSrc}
          link={card.link}
        />
      ))}
    </div>
  );
};

export default CardGrid;
