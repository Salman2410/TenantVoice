import React from "react";
import "tailwindcss/tailwind.css";
import img1 from "../../assets/track-property.avif"; 
import img2 from "../../assets/explore.avif"; 
import img3 from "../../assets/homeloan.avif"; 

const cards = [
  {
    id: 1,
    image: img1,
    title: "Get estimated property prices with a realEstimate™",
    description:
      "See how much your property's worth whether you own it or want to buy it.",
    linkText: "Check property values",
    linkUrl: "#",
  },
  {
    id: 2,
    image: img2,
    title: "Need help with a mortgage?",
    description: "Compare your finance options to make an informed call.",
    linkText: "Explore home loans",
    linkUrl: "#",
  },
  {
    id: 3,
    image: img3,
    title: "Explore suburb profiles",
    description:
      "Check out different suburb profiles and find one that’s right for you.",
    linkText: "Research suburbs",
    linkUrl: "#",
  },
];

const Card = ({ image, title, description, linkText, linkUrl }) => {
  return (
    <div className="border rounded-lg p-4 flex flex-col items-start bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
      <img src={image} alt={title} className="w-16 h-16 mb-4" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href={linkUrl} className="text-blue-500 font-semibold hover:underline">
        {linkText}
      </a>
    </div>
  );
};

const CardContainer = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
