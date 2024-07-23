import React from "react";
import { FaSearch, FaHome, FaDollarSign, FaChartLine } from "react-icons/fa";
import { GiHouse } from "react-icons/gi";
import img1 from "../../assets/property-features-mobile.png";

const Feature = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md">
    <div className="mb-2  text-gray-600">{icon}</div>
    <h3 className="text-[16px] font-semibold text-[#3D3B40]">{title}</h3>
    <p className="text-[16px] text-[#726E76]">{description}</p>
  </div>
);

const Track = () => {
  return (
    <>
      <div className=" flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-2xl font-bold mb-4">
            Monitor your property value with a{" "}
            <span className="text-red-600">realEstimate™</span>
          </h1>
          <p className="mb-6">
            Ever wondered what your property's worth? Get market-leading
            insights and data by tracking it.
          </p>
          <div className="relative mb-4">
            <FaSearch className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400" />
            <input
              type="text"
              className="w-full pl-10 p-3 border border-gray-300 rounded-md"
              placeholder="Search your address"
            />
          </div>
          <button className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700">
            Track your property
          </button>
          <p className="mt-4 text-sm text-gray-500">
            Your address will not be shared with third parties.
          </p>
        </div>
      </div>
      <div className="w-[70%] mx-auto min-h-screen  p-8 my-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-3xl font-bold mb-4">
              When it comes to owning a property, knowledge is power
            </h1>
            <p className="mb-6">
              With market leading insights from realestate.com.au, use your
              property dashboard to stay on top of:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <Feature
                icon={<FaHome className="text-2xl text-gray-600" />}
                title="How much your property's worth"
                description="A realEstimate™ can provide your estimated property value in less than a minute."
              />
              <Feature
                icon={<FaChartLine className="text-2xl text-gray-600" />}
                title="Latest insights and data on the property market"
                description="Monitor the market to make informed property decisions."
              />
              <Feature
                icon={<GiHouse className="text-2xl text-gray-600" />}
                title="What homes like yours are selling for"
                description="Check out recently sold and currently listed properties in your area."
              />
              <Feature
                icon={<FaDollarSign className="text-2xl text-gray-600" />}
                title="Whether your home loan's competitive"
                description="Track your loan to receive updates for better home loan rates and equity."
              />
            </div>
          </div>
          <div className="mt-20">
            <img className="w-auto h-3/4 object-cover" src={img1} alt="" />
          </div>
        </div>
      </div>
      <section>
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-semibold mb-2">
              What if I don't own the property?
            </h2>
            <p className="text-gray-600 mb-6">
              Search for a property to uncover its value.
            </p>
            <div className="flex">
              <input
                type="text"
                placeholder="Search address"
                className="flex-grow border border-gray-300 rounded-l-lg p-2"
              />
              <button className="bg-gray-800 text-white px-4 rounded-r-lg">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Track;
