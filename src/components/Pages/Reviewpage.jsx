import React from "react";
import img1 from "../../assets/map2x.webp";
import img2 from "../../assets/house_3.webp";
import img3 from "../../assets/lock.svg";

const Reviewpage = () => {
  return (
    <>
      <div className="w-[75%] my-10 mx-auto p-4 bg-white shadow-md rounded-md">
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <div>
            <h1 className="text-xl font-bold">1487 Shore Parkway,</h1>
            <h2 className="text-gray-600">Brooklyn, NY 11214</h2>
            <p className="mt-2 text-blue-600">Bath Beach</p>
          </div>
          <div className="text-yellow-500">
            <span className="text-2xl font-semibold">4.1</span> / 5
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p>
              <strong>Units:</strong> 42
            </p>
            <p>
              <strong>Built:</strong> 1949
            </p>
            <p>
              <strong>Floors:</strong> 6
            </p>
          </div>
          <div className="flex items-center">
            <span className="bg-green-100 text-green-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">
              Rent Stabilized Units: Yes
            </span>
          </div>
        </div>
        <div className="flex flex-wrap mt-4">
          <span className="bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">
            Good Cause Eviction: Yes
          </span>
          <span className="bg-yellow-100 text-yellow-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">
            Evictions: 6
          </span>
          <span className="bg-red-100 text-red-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">
            Litigation History: Yes
          </span>
          <span className="bg-yellow-100 text-yellow-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">
            1 Year Bedbug History: Yes
          </span>
          <span className="bg-gray-100 text-gray-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">
            Pet Friendly: Unknown
          </span>
        </div>
      </div>

      <section className="w-[75%] mx-auto flex gap-20 items-center">
        <div className="text-center basis-1/4 m-5 border-2">
          <div className="w-[15%] py-2  mx-auto">
            <img src={img3} alt="" />
          </div>
          <p className=" text-[14px] text-[#061938] p-4">
            Once you submit an anonymous review for this building (or any other)
            you will gain access to the entire openigloo platform
          </p>
          <button className="text-white bg-purple-700 py-2 px-4 m-1 mb-4 mx-auto inline-flex cursor-pointer justify-center items-center text-sm text-center rounded-3xl">
            Write Review
          </button>
        </div>
        <div className="basis-3/4">
          <img
            src={img1}
            className="w-[677.34px] h-[244px] object-cover rounded-2xl"
            alt=""
          />
          <a href="" className="text-purple-300 underline">
            Upload a photo of what is building look like
          </a>
        </div>
      </section>

      <div className="w-[75%] mx-auto bg-gray-100 h-[2px] my-5"></div>
      <section className="w-[75%] mx-auto">
        <h2 className="text-xl font-semibold mb-4">
          Available Listings In 1487 Shore Parkway
        </h2>
        <div className="max-w-lg p-4 bg-white rounded-lg shadow-md border border-gray-200">
          <div className="flex">
            <img src={img2} alt="Listing" className="w-1/3 h-auto rounded-lg" />
            <div className="pl-4">
              <h3 className="text-md font-medium text-gray-700">Bath Beach</h3>
              <p className="text-lg font-bold text-gray-900">
                1487 Shore Parkway #1B
              </p>
              <p className="text-lg font-bold text-gray-900">$1,925</p>
              <p className="text-gray-600">
                1 bed · 1 bath · Avail. Immediately
              </p>
              <a
                href="#contact"
                className="text-purple-600 hover:underline mt-2 block"
              >
                Contact agent &gt;
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="w-[75%] mx-auto bg-gray-100 h-[2px] my-5"></div>
      <section className="my-10 w-[75%] mx-auto">
        <div className="bg-purple-50 p-2 rounded-t-lg w-1/4">
          <h2 className="text-purple-700 text-sm font-semibold">
            ⚡ Hey smart renter!
          </h2>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md border border-gray-200">
          <div className="p-4">
            <p className="text-gray-600">
              In the past three years, this building had:
            </p>
            <p className="text-3xl font-bold text-gray-900 my-2">
              371 complaints
            </p>
            <p className="text-gray-600">
              See all complaints about this building in a rental report
            </p>
          </div>
          <div className="flex justify-end p-4">
            <button className="bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
              Get report
            </button>
          </div>
        </div>
      </section>
      <div className="w-[75%] mx-auto bg-gray-100 h-[2px] my-5"></div>
      <section className="w-[75%] mx-auto">
        <h2 className="text-xl font-semibold text-dark-900">Open Voilations</h2>
        <h4 className="pt-2 text-sm text-dark-700">
          Duration in the past 10 years
        </h4>
        <h4 className="pt-2 text-sm text-dark-700">
          Data last updated a month ago
        </h4>
        <div class="grid grid-cols-2 items-center gap-4 pt-4 sm:flex sm:gap-0 sm:space-x-4">
          <div class="h-full rounded-lg bg-gray-200 p-4">
            <div class="text-xs font-semibold text-mid-400">
              BUILDING AVERAGE:
            </div>
            <div class="pt-2 font-semibold text-dark-900">
              "0" "violations per unit"
            </div>
          </div>
          <div class="h-full rounded-lg bg-gray-200 p-4">
            <div class="text-xs font-semibold text-mid-400">
              "NEW YORK" "CITY AVERAGE:"
            </div>
            <div class="pt-2 font-semibold text-dark-900">
              "Less than" "0.01" "violation per unit"
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviewpage;
