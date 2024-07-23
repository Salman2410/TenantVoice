import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, description, imgSrc, link }) => {
  return (
    <Link to={link}>
      <div className="max-w-sm overflow-hidden shadow-lg bg-white p-4 m-2 rounded-2xl cursor-pointer transition-transform transform hover:scale-105">
        <div className="flex justify-center mb-4">
          <img src={imgSrc} alt={title} className="h-16 w-16" />
        </div>
        <div className="text-center">
          <h2 className="text-lg font-bold mb-2">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
