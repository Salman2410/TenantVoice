import React from "react";
import { useNavigate } from "react-router-dom";

const sections = [
  { name: "Personal details", path: "/PersonalDetail" },
  { name: "About me", path: "/Aboutme" },
  { name: "Address history", path: "/AddressHistory" },
  { name: "Employment", path: "/EmploymentStatus" },
  { name: "Income" },
  { name: "Identity documents" },
  { name: "Emergency contact" },
  {
    name: "Tenant check (recommended)",
    description:
      "Give yourself a better chance. Help property managers evaluate you faster.",
  },
];

const additionalSections = [
  { name: "People" },
  { name: "Pets" },
  { name: "Utility connection service" },
];

const ProfileSections = () => {
  const navigate = useNavigate();

  return (
    <div className="mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      {sections.map((section, index) => (
        <div key={index} className="border-b">
          <div
            className="flex items-center justify-between p-4 hover:bg-gray-100 cursor-pointer"
            onClick={() => section.path && navigate(section.path)}
          >
            <span className="text-gray-700">{section.name}</span>
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </div>
          {section.description && (
            <div className="p-4 text-sm text-gray-500 bg-gray-50">
              {section.description}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const AdditionalSections = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden mt-8">
      {additionalSections.map((section, index) => (
        <div key={index} className="border-b">
          <div
            className="flex items-center justify-between p-4 hover:bg-gray-100 cursor-pointer"
            onClick={() => section.path && navigate(section.path)}
          >
            <span className="text-gray-700">{section.name}</span>
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
};

const InfoSection = () => {
  return (
    <div className="max-w-md bg-white shadow-md rounded-lg overflow-hidden mt-8 p-6">
      <div className="mb-6">
        <h2 className="font-bold text-gray-700">Manage applications</h2>
        <p>
          <a href="#" className="text-blue-600 hover:underline">
            Manage and view rental applications
          </a>{" "}
          you’ve already started.
        </p>
      </div>
      <div className="mb-6">
        <h2 className="font-bold text-gray-700">How long we keep your data</h2>
        <p>
          To keep your Renter Profile data more secure, we delete certain
          details after 18 months (six months for users in South Australia).
          Learn more in{" "}
          <a href="#" className="text-blue-600 hover:underline">
            our help centre
          </a>
          .
        </p>
      </div>
      <div>
        <h2 className="font-bold text-gray-700">Need help?</h2>
        <p>
          Search and find answers in{" "}
          <a href="#" className="text-blue-600 hover:underline">
            our help centre
          </a>
          .
        </p>
      </div>
    </div>
  );
};

const RenterProfile = () => {
  return (
    <>
      <div className="bg-[#F6F5F7]">
        <div className="w-[70%] mx-auto flex gap-20 pt-10">
          <section className="max-w-md mb-16">
            <h2 className="text-5xl leading-[4rem] font-normal text-[#3D3B40]">
              Renter Profile
            </h2>
            <p className="text-[1rem] leading-6 font-normal ">
              Create your Renter Profile once and reuse it for all your
              applications.
            </p>
            <div>
              <h3 className="text-2xl leading-9 font-semibold text-[#3D3B40] mt-2">
                Personal
              </h3>
              <p className="text-[1rem] leading-6 text-[#3D3B40] mb-6">
                Details to help property managers validate who you are and
                assess your identity, employment and income.
              </p>
              <ProfileSections />
            </div>
            <div>
              <h2 className="text-2xl leading-9 font-semibold text-[#3D3B40] mt-4">
                Household
              </h2>
              <p className="text-[1rem] leading-6 font-normal mb-6">
                Details of who you’ll live with, pets & utility preferences.
                Adding ‘People’ and ‘Pets’ here allows you to easily add them to
                any future application.
              </p>
              <AdditionalSections />
            </div>
          </section>
          <section className="mt-[12rem]">
            <InfoSection />
          </section>
        </div>
      </div>
    </>
  );
};

export default RenterProfile;
