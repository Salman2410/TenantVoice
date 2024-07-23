import React, { useState } from "react";
import { FaBars, FaTimes, FaStar, FaBell, FaUser } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="https://via.placeholder.com/50"
            alt="Logo"
            className="h-10 w-10 mr-2"
          />
          <span className="text-xl font-bold">realestate.com.au</span>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FaTimes className="text-xl" />
            ) : (
              <FaBars className="text-xl" />
            )}
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row items-center w-full md:w-auto`}
        >
          <a href="#" className="block px-4 py-2 text-black">
            Buy
          </a>
          <a href="#" className="block px-4 py-2 text-black">
            Rent
          </a>
          <a href="#" className="block px-4 py-2 text-black">
            Sold
          </a>
          <a href="#" className="block px-4 py-2 text-black">
            Share
          </a>
          <a href="#" className="block px-4 py-2 text-black">
            New homes
          </a>
          <a href="#" className="block px-4 py-2 text-black">
            Find agents
          </a>
          <a href="#" className="block px-4 py-2 text-black">
            Home loans
          </a>
          <a href="#" className="block px-4 py-2 text-black">
            News
          </a>
          <a href="#" className="block px-4 py-2 text-black">
            Commercial
          </a>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <button className="relative">
            <FaStar className="text-xl" />
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-600" />
          </button>
          <button className="relative">
            <FaBell className="text-xl" />
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-600" />
          </button>
          <FaUser className="text-xl" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
