//App
import React from "react";

//Component(s)
import LandingCardComp from "../Card Component/LandingCardComp";

//Data(s)
import landingCardCompData from "../../Data/landingCardCompData.json";

//Image(s)
import LandingImageOneM from "../../assets/LandingImageOneM.png";
import LandingImageTwoM from "../../assets/LandingImageTwoM.png";
import LandingImageOneL from "../../assets/LandingImageOneL.png";
import LandingImageTwoL from "../../assets/LandingImageTwoL.png";

const Landing = () => {
  return (
    <>
      <div>
        <section>
          <h3 className="font-bold sm:text-[36px] md:text-[60px] lg:text-[60px] sm:w-[355px] md:w-[722px] mx-auto md:text-center">
            Simplifying Payroll for Crypto Projects
          </h3>
          <h4 className="sm:text-[16px] md:text-[18px] sm:w-[355px] md:w-[555px] text-textSecondary text-center mx-auto mt-[24px]">
            Effortlessly manage payroll with seamless crypto payments and easy
            fiat conversions.
          </h4>
          <div className="mt-[40px] flex sm:flex-col md:flex-row items-center justify-center sm:space-y-3 md:space-y-0 md:space-x-3">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              className="border border-transparent text-landingInputText bg-landingInput focus:outline-none rounded-xl sm:w-[355px] md:w-[350px] h-[56px] px-[16px]"
            />
            <button
              className="text-white bg-buttonPrimary rounded-[8px] sm:w-[355px] md:w-[148px] h-[56px] shadow-customInset hover:bg-buttonPrimaryHover"
              type="submit"
            >
              Submit
            </button>
          </div>
          <div className="flex items-center justify-center md:space-x-6 lg:space-x-8 md:mt-[64px] lg:mt-[80px]">
            <img
              src={LandingImageOneM}
              alt="LandingImageOne"
              className="sm:hidden md:block lg:hidden"
            />
            <img
              src={LandingImageTwoM}
              alt="LandingImageTwo"
              className="sm:hidden md:block lg:hidden"
            />
            <img
              src={LandingImageOneL}
              alt="LandingImageOne"
              className="sm:hidden md:hidden lg:block"
            />
            <img
              src={LandingImageTwoL}
              alt="LandingImageTwo"
              className="sm:hidden md:hidden lg:block"
            />
          </div>
        </section>
        <section className="flex flex-col items-center justify-center sm:mt-[123px] md:mt-[88px]">
          <h3 className="font-bold sm:text-[36px] md:text-[52px] sm:w-[335px] md:w-[613px] text-center">
            Unlock the Future of Payroll
          </h3>
          <p className="text-textSecondary text-lg text-center sm:w-[335px] md:w-[708px]">
            Coinomad streamlines payroll management for crypto projects,
            offering seamless payments, effortless fiat conversions, and a
            user-friendly platform designed to benefit founders, hiring
            managers, employees, and freelancers
          </p>
        </section>
        <section className="flex flex-col items-center justify-center">
          {landingCardCompData.map((data, index) => (
            <LandingCardComp
              key={index}
              image1={data.image1}
              image2={data.image2}
              image3={data.image3}
              title={data.title}
              use={data.use}
              description={data.description}
              list={data.list}
              reverse={index % 2 !== 0}
            />
          ))}
        </section>
      </div>
    </>
  );
};

export default Landing;
