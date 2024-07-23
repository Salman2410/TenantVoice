import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/image.webp";
import img2 from "../../assets/image1.webp";
import img3 from "../../assets/home.webp";
import img4 from "../../assets/image3.webp";

const properties = [
  {
    price: "$780",
    type: "House",
    address: "1/57 Eric Street, Como, WA 6152",
    image: img1, // Directly assign the imported image
    bedrooms: 3,
    bathrooms: 2,
    parking: 1,
    views: 82,
    time: "44 mins ago",
  },
  {
    price: "$650",
    type: "Apartment",
    address: "12/62 Moondine Drive, Wembley, WA 6014",
    image: img2, // Directly assign the imported image
    bedrooms: 3,
    bathrooms: 1,
    parking: 1,
    views: 47,
    time: "44 mins ago",
  },
  {
    price: "$680",
    type: "House",
    address: "15 Crowley Gardens, Somerville, WA 6430",
    image: img3, // Directly assign the imported image
    bedrooms: 3,
    bathrooms: 2,
    parking: 1,
    views: 18,
    time: "44 mins ago",
  },
  {
    price: "$1,100",
    type: "House",
    address: "9 Robinson Street, Inglewood, WA 6052",
    image: img4, // Directly assign the imported image
    bedrooms: 4,
    bathrooms: 2,
    parking: 1,
    views: 102,
    time: "44 mins ago",
  },
];
const PropertyCard = ({ property }) => {
  return (
    <div
      className="bg-beige rounded-lg overflow-hidden shadow-md m-4"
      style={{ width: "300px", height: "400px" }}
    >
      <div className="relative">
        <img
          className="w-full h-48 object-cover"
          src={property.image}
          alt="Property"
        />
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">
          {property.time}
        </span>
      </div>
      <div className="p-4">
        <div className="text-xl font-semibold text-gray-800">
          {property.price}
        </div>
        <div className="text-sm text-gray-600">{property.type}</div>
        <div className="mt-2 text-gray-600">{property.address}</div>
      </div>
      <div className="flex justify-between items-center p-4 border-t border-gray-200">
        <div className="flex items-center text-gray-600">
          <svg
            className="w-4 h-4 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 10l4.5-4.5a2 2 0 00-2.83-2.83L15 7.5M15 10v5m0 5H7a2 2 0 01-2-2V7a2 2 0 012-2h3"
            ></path>
          </svg>
          Save
        </div>
      </div>
    </div>
  );
};

const PropertyCarousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {properties.map((property, index) => (
        <PropertyCard key={index} property={property} />
      ))}
    </Slider>
  );
};

export default PropertyCarousel;
