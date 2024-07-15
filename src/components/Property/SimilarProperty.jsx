import React from "react";
import img1 from "../../assets/house_1.webp";

const Card = ({ image, rating, address, price, type, availability }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <img src={image} alt="Apartment" className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex items-center mb-2">
          <span className="text-yellow-400 text-xl">★</span>
          <span className="text-sm ml-1">{rating}</span>
        </div>
        <p className="font-semibold">{address}</p>
        <p className="text-gray-600">${price}</p>
        <p className="text-gray-600">{type}</p>
        <p className="text-gray-600">{availability}</p>
      </div>
    </div>
  );
};

const SimilarProperty = () => {
  const properties = [
    {
      image: img1,
      rating: "2.9 (2)",
      address: "166-05 Highland Avenue #1, Queens, NY",
      price: "1,750",
      type: "Studio · 1 bath · Avail. Aug 01, 2024",
      availability: "Verified",
    },
    {
      image: img1,
      rating: "3.5 (10)",
      address: "166-05 Highland Avenue #2, Queens, NY",
      price: "1,825",
      type: "Studio · 1 bath · Avail. Immediately",
      availability: "Future",
    },
    {
      image: img1,
      rating: "4.0 (8)",
      address: "166-05 Highland Avenue #3, Queens, NY",
      price: "1,900",
      type: "Studio · 1 bath · Est. Dec 2024",
      availability: "Verified",
    },
    {
      image: img1,
      rating: "4.2 (5)",
      address: "166-05 Highland Avenue #4, Queens, NY",
      price: "1,950",
      type: "Studio · 1 bath · Avail. Immediately",
      availability: "Verified",
    },
    {
      image: img1,
      rating: "3.8 (4)",
      address: "166-05 Highland Avenue #5, Queens, NY",
      price: "2,000",
      type: "Studio · 1 bath · Avail. Aug 01, 2024",
      availability: "Future",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {properties.map((property, index) => (
          <Card
            key={index}
            image={property.image}
            rating={property.rating}
            address={property.address}
            price={property.price}
            type={property.type}
            availability={property.availability}
          />
        ))}
      </div>
    </div>
  );
};

export default SimilarProperty;
