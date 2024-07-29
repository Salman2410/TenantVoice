import React from "react";
import AddIDForm from "./IdentifyForm";

const Identify = () => {
  return (
    <div>
      <div className="bg-[#F6F5F7]">
        <div className="ml-[188px] pt-4 pb-8">
          <p className="text-[0.75rem] leading-[1rem] font-medium text-[#726E75]">
            RENTER PROFILE
          </p>
          <p className="text-[34px] text-[#3D3B40] font-semibold">
            Identity documents
          </p>
        </div>
      </div>
      <AddIDForm />
    </div>
  );
};

export default Identify;
