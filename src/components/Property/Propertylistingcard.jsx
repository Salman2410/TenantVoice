import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  FaBed,
  FaBath,
  FaCar,
  FaRulerCombined,
  FaShareAlt,
  FaEyeSlash,
  FaFacebook,
  FaWhatsapp,
  FaLink,
  FaStar
} from "react-icons/fa";

// ShareModal component with enhanced design
const ShareModal = ({ isOpen, onClose, shareUrl }) => {
  if (!isOpen) return null;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    alert("Link copied to clipboard!");
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-[40%] shadow-lg border border-gray-200">
        <h2 className="text-xl mb-4 font-semibold text-center">
          Share this property
        </h2>
        <div className="flex justify-around mb-4 text-lg">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 flex items-center hover:text-blue-800 transition"
          >
            <FaFacebook className="mr-2" /> Facebook
          </a>
          <a
            href={`https://api.whatsapp.com/send?text=${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 flex items-center hover:text-green-800 transition"
          >
            <FaWhatsapp className="mr-2" /> WhatsApp
          </a>
          <button
            onClick={copyToClipboard}
            className="text-gray-700 flex items-center hover:text-gray-900 transition"
          >
            <FaLink className="mr-2" /> Copy Link
          </button>
        </div>
        <button
          onClick={onClose}
          className="w-full bg-gray-500 text-white rounded px-4 py-2 hover:bg-gray-600 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const CollectionModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleCreateCollection = () => {
    // Logic to handle the creation of a new collection
    console.log("Creating new collection...");
    onClose(); // Close the modal after action
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-80 shadow-lg border border-gray-200">
        <h2 className="text-xl mb-4 font-semibold text-center">
          Create New Collection
        </h2>
        <div className="text-center">
          <button
            onClick={handleCreateCollection}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Create
          </button>
          <button
            onClick={onClose}
            className="ml-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

// PropertyCard component with enhanced design
const PropertyCard = ({
  images,
  agencyLogo,
  agentNames,
  agentImage,
  price,
  address,
  details,
  propertyType,
  status,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [collectionModalOpen, setCollectionModalOpen] = useState(false);
  const shareUrl = "http://localhost:3000/propertylisting"; // Update this with the actual URL of the property

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleShareModal = () => {
    setShareModalOpen(!shareModalOpen);
    setMenuOpen(false);
  };
  const toggleCollectionModal = () =>
    setCollectionModalOpen(!collectionModalOpen);

  return (
    <div className="py-10 max-w-lg rounded overflow-hidden shadow-lg mx-auto bg-white">
      <div className="relative">
        <Carousel showThumbs={false} showStatus={false} infiniteLoop>
          {images.map((image, index) => (
            <div key={index}>
              <img
                className="w-full h-64 object-cover"
                src={image}
                alt="Property"
              />
            </div>
          ))}
        </Carousel>
        <div className="absolute top-0 left-0 bg-[#1c8ce2] text-white px-4 py-2 rounded-br-lg">
          <div className="flex items-center">
            <img src={agencyLogo} alt="Agency Logo" className="h-8 w-8 mr-2" />
            <span>Team JP</span>
          </div>
        </div>
        <div className="absolute top-0 right-0 bg-white p-2 rounded-full shadow">
          <img
            src={agentImage}
            alt="Agent"
            className="h-12 w-12 rounded-full"
          />
        </div>
        <div className="absolute top-0 right-0 mt-14 mr-2 text-gray-800 font-semibold">
          {agentNames}
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center">
          <div>
            <div className="font-bold text-xl mb-2 text-gray-800">{price}</div>
            <p className="text-gray-700 text-base">{address}</p>
            <div className="flex items-center mt-4 text-gray-600">
              {details.map((detail, index) => (
                <div key={index} className="flex items-center mr-4">
                  {detail.icon}
                  <span className="ml-1">{detail.text}</span>
                </div>
              ))}
            </div>
            <div className="text-gray-500 mt-4">{propertyType}</div>
          </div>
          <div className="relative flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6h.01M12 12h.01M12 18h.01"
                />
              </svg>
            </button>
            <button onClick={toggleCollectionModal} className="ml-2">
              <FaStar
                className="text-yellow-500 hover:text-yellow-600"
                size="24"
              />
            </button>
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10">
                <button
                  onClick={toggleShareModal}
                  className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
                >
                  <FaShareAlt className="mr-2" /> Share
                </button>
                <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center">
                  <FaEyeSlash className="mr-2" /> Hide
                </button>
              </div>
            )}
          </div>
        </div>
        {status && <div className="text-sm text-gray-500 mt-2">{status}</div>}
      </div>

      <ShareModal
        isOpen={shareModalOpen}
        onClose={toggleShareModal}
        shareUrl={shareUrl}
      />
      <CollectionModal
        isOpen={collectionModalOpen}
        onClose={toggleCollectionModal}
      />
    </div>
  );
};

export default PropertyCard;
