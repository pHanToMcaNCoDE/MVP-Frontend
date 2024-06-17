import React from "react";
import { Link } from "react-router-dom";

// image(s)
import SuccessCheck from "../../../../public/svg/SuccessCheck.svg";

const SuccessVerificationCheck = () => {
  return (
    <section className="flex flex-col items-center h-screen">
      <img
        src={SuccessCheck}
        alt="SuccessCheck-icon"
        width={100}
        height={100}
        className="mb-[24px]"
      />
      <h1 className="text-[#101010] text-[2rem] leading-10 font-bold mb-[16px]">
        Success
      </h1>
      <p className="text-[#9C9C9C] text-[1.125rem] text-center font-semibold w-[350px] md:mb-[64px]">
        Your password has been updated and is secure You can now log in again
      </p>
      <Link to="/sign-in">
        <button className="bg-[#2F4EED] px-2 py-2 rounded-lg w-[350px] text-[16px] text-white h-[3.5em]">
          Return to login
        </button>
      </Link>
    </section>
  );
};

export default SuccessVerificationCheck;
