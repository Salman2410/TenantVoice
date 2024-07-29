import React from "react";
import ContactForm from "./EmargencyContactForm";

const EmergencyContacts = () => {
  return (
    <div>
      <div className="bg-[#F6F5F7]">
        <div className="ml-[188px] pt-4 pb-8">
          <p className="text-[0.75rem] leading-[1rem] font-medium text-[#726E75]">
            RENTER PROFILE
          </p>
          <p className="text-[34px] text-[#3D3B40] font-semibold">
            Emergency contact
          </p>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default EmergencyContacts;
