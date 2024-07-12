import React from "react";
import AppleButton from "../Button/AppleButton";
import GoogleButton from "../Button/GoogleButton";

const Signup = () => {
  return (
    <section>
      <h2 className="text-center text-[36px] md:text-[32px] font-semibold text-[#181818]">
        Sign up to find the land you love
      </h2>
      <div className="flex">
        <div className="w-1/4">
        <AppleButton/>
        </div>
        <div className="w-1/4">
        <GoogleButton/>
        </div>
        
      </div>
    </section>
  );
};

export default Signup;
