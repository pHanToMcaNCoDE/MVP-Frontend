import React from "react";

// image(s)
import MailBox from "../../../../public/svg/MailBox.svg";

const PasswordVerificationCheck = () => {
  return (
    <section className="flex flex-col items-center h-screen">
      <img src={MailBox} alt="mailbox-icon" width={100} height={100} className="mb-[40px]"/>
      <h1 className="text-[#101010] text-[2rem] leading-10 font-bold mb-[16px]">
        Password Resest
      </h1>
      <p className="text-[#9C9C9C] text-[1.125rem] text-center font-semibold sm:w-[335px] md:w-[700px]">
        An email has been sent to your email. Just follow the instructions to
        reset your password if you don’t get the email, please contact
        <span className="font-bold text-[#151515]"> support@coinomad.com</span>
      </p>
    </section>
  );
};

export default PasswordVerificationCheck;
