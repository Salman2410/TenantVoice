import React from "react";
import PropertyCard from "./Propertylistingcard";
import { FaBed, FaBath, FaCar, FaRulerCombined } from "react-icons/fa";
import img1 from "../../assets/house_1.webp";
import img2 from "../../assets/house_2.webp";
import img3 from "../../assets/house_3.webp";

const properties = [
  {
    images: [img1, img2, img3],
    agencyLogo: "https://via.placeholder.com/40",
    agentNames: "Janice Nankivell & Petals Waite",
    agentImage: "https://via.placeholder.com/40",
    price: "$850 per week",
    address: "7 Wendy Court, Wheelers Hill",
    details: [
      { icon: <FaBed />, text: "4" },
      { icon: <FaBath />, text: "2" },
      { icon: <FaCar />, text: "2" },
      { icon: <FaRulerCombined />, text: "180m²" },
    ],
    propertyType: "House",
    status: "Deposit taken",
  },
  // Add more property objects as needed
];

const PropertyList = () => {
  return (
    <div className="flex flex-col space-y-6">
      {properties.map((property, index) => (
        <PropertyCard
          key={index}
          images={property.images}
          agencyLogo={property.agencyLogo}
          agentNames={property.agentNames}
          agentImage={property.agentImage}
          price={property.price}
          address={property.address}
          details={property.details}
          propertyType={property.propertyType}
          status={property.status}
        />
      ))}
    </div>
  );
};

export default PropertyList;
