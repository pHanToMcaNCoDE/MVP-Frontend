import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import CustomRadioField from '../../../formFields/CustomRadioField';

const StepOne = () => {
    const [optionClicked, setOptionClicked] = useState("");

    const handleChange = () => {
      setOptionClicked(option);
    };
  return (
    <section className="flex justify-center items-center gap-[90px] w-full h-screen">
      <div className="gap-[40px] h-[26.25em] w-[30.5em] flex flex-col items-center">
        <h1 className="text-[2rem] font-bold leading-[44px] tracking-[-0.72px]">
          Join as a client or Freelancer
        </h1>
        <form className="flex flex-col justify-between items-center mx-auto gap-[32px] w-[21.875em] h-[17em]">
          <div className="flex flex-col items-center w-full gap-6">
            <div
              onChange={handleChange}
              onClick={() => setOptionClicked("Client")}
              className={`w-full p-[24px] rounded-[8px] flex justify-between items-center ${
                optionClicked === "Client"
                  ? "border-[1.5px] border-[#2F4EED] bg-[#EAEDFD]"
                  : "bg-[#F7F7F7] border-[1.5px] border-[#F7F7F7]"
              }`}
            >
              <p className="text-[1.5rem] font-semibold leading-8 tracking-[-0.48px]">
                Client
              </p>
              <div className="relative flex justify-center items-center">
                <input
                  className={
                    optionClicked === "Client"
                      ? `focus:outline-none checked:border-transparent checked:bg-[#2F4EED] relative w-5 h-5 bg-transparent appearance-none border border-[#E7E7E7] rounded-full focus:bg-transparent cursor-pointer`
                      : `focus:outline-none relative w-5 h-5 bg-transparent appearance-none border border-[#E7E7E7] rounded-full focus:bg-transparent cursor-pointer`
                  }
                  type="radio"
                  checked={optionClicked === "Client"}
                ></input>
                <div
                  className={
                    optionClicked === "Client" &&
                    "bg-white w-2 rounded-full h-2 absolute top-[6px] left-[6px] cursor-pointer"
                  }
                ></div>
              </div>
            </div>

            <div
              onChange={handleChange}
              onClick={() => setOptionClicked("Freelancer")}
              className={`w-full p-[24px] rounded-[8px] flex justify-between items-center ${
                optionClicked === "Freelancer"
                  ? "border-[1.5px] border-[#2F4EED] bg-[#EAEDFD]"
                  : "bg-[#F7F7F7] border-[1.5px] border-[#F7F7F7]"
              }`}
            >
              <p className="text-[1.5rem] font-semibold leading-8 tracking-[-0.48px]">
                Freelancer
              </p>
              <div className="relative flex justify-center items-center">
                <input
                  className={
                    optionClicked === "Freelancer"
                      ? `focus:outline-none checked:border-transparent checked:bg-[#2F4EED] relative w-5 h-5 bg-transparent appearance-none border border-[#E7E7E7] rounded-full focus:bg-transparent cursor-pointer`
                      : `focus:outline-none relative w-5 h-5 bg-transparent appearance-none border border-[#E7E7E7] rounded-full focus:bg-transparent cursor-pointer`
                  }
                  type="radio"
                  checked={optionClicked === "Freelancer"}
                ></input>
                <div
                  className={
                    optionClicked === "Freelancer" &&
                    "bg-white w-2 rounded-full h-2 absolute top-[6px] left-[6px] cursor-pointer"
                  }
                ></div>
              </div>
            </div>
          </div>
          <Link to={`/sign-up/step-2`}
            className="py-0 px-2 text-center flex justify-center items-center rounded-[8px] bg-[#2F4EED] h-14 w-full text-white"
            type="submit"
          >
            Create Account
          </Link>
        </form>
        <div className="w-full text-center text-[1rem] leading-6 font-normal flex flex-col sm:flex-row gap-x-3 justify-center items-center">
          <p className="text-[#101010]">Already have an account?</p>
          <Link className="text-[#2F4EED]" to="/sign-in">
            Sign In
          </Link>
        </div>
      </div>
    </section>
  );
}

export default StepOne
