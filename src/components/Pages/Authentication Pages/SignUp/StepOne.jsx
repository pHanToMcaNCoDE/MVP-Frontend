import React from 'react'
import { Link } from 'react-router-dom';

const StepOne = () => {
  return (
    <section className="flex justify-center items-center gap-[90px] w-full h-screen">
      <div className="gap-[40px] h-[26.25em] w-[30.5em] flex flex-col items-center">
        <h1 className="text-[2rem] font-bold leading-[44px] tracking-[-0.72px]">
          Join as a client or Freelancer
        </h1>
        <form className="flex flex-col justify-between items-center mx-auto gap-[32px] w-[21.875em] h-[17em]">
          <div className="flex flex-col items-center w-full gap-6">
            <div className="bg-[#F7F7F7] w-full p-[24px] rounded-[8px] flex justify-between items-center">
              <p>Freelancer</p>
              <input className='custom-radio' type="radio"></input>
            </div>
            <div className="bg-[#F7F7F7] w-full p-[24px] rounded-[8px] flex justify-between items-center">
              <p>Freelancer</p>
              <input className='custom-radio' type="radio"></input>
            </div>
          </div>
          <button
            className="py-0 px-2 rounded-[8px] bg-[#2F4EED] h-14 w-full text-white"
            type="submit"
          >
            Create Account
          </button>
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
