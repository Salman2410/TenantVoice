import React from "react";
import CardGrid from "../card/CardGrid";

const UserDashboard = () => {
  return (
    <>
      <section className="bg-[#F6F5F7] py-10">
        <div className="w-[70%] mx-auto ">
          <div className="w-[95%] mx-auto flex justify-between">
            <h2 className="text-[34px] text-[#3D3B40] font-bold">Profile</h2>
            <button className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none">
              Log out
            </button>
          </div>
          <CardGrid />
        </div>
      </section>
    </>
  );
};

export default UserDashboard;
