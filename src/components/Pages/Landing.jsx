//App
import React from "react";

//Component(s)
import LandingCardComp from "../Card Component/LandingCardComp";
import LandingCardComp2 from "../Card Component/LandingCardComp2";

//Data(s)
import landingCardCompData from "../../Data/landingCardCompData.json";
import landingCardCompData2 from "../../Data/landingCardCompData2.json";

//Image(s)
import LandingImageOneM from "../../../public/CardComponentImages/LandingImageOneM.png";
import LandingImageTwoM from "../../../public/CardComponentImages/LandingImageTwoM.png";
import LandingImageOneL from "../../../public/CardComponentImages/LandingImageOneL.png";
import LandingImageTwoL from "../../../public/CardComponentImages/LandingImageTwoL.png";

const Landing = () => {
  return (
    <>
      <div>
        <section>
          <h3 className="font-bold sm:text-[36px] md:text-[60px] lg:text-[60px] sm:w-[355px] md:w-[722px] sm:mt-[99px] md:mt-[81px] lg:mt-[80px] mx-auto md:text-center">
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
        <section className="flex flex-col items-center justify-center sm:mt-[123px] md:my-[64px] lg:my-[80px]">
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
              index={index}
            />
          ))}
        </section>
        <section className="container sm:py-[40px] md:py-[64px] lg:py-[80px]">
          <h3 className="sm:text-[44px] md:text-[52px] sm:pb-[40px] md:pb-[64px] lg:pb-[80px] font-bold text-center">
            Features
          </h3>
          <div className="sm:flex sm:flex-col md:flex md:flex-col sm:items-center md:items-center">
            <div className="sm:hidden md:hidden lg:flex flex-col">
              <div className="flex items-center justify-center space-x-[32px] mb-[32px]">
                <section className="border border-transparent bg-[#F7F7F7] p-[40px] w-[495px] rounded-2xl">
                  <img src="/svg/Frame 27.svg" alt="icon" />
                  <h2 className="lg:text-xl lg:w-fit font-bold mt-[16px] mb-[11px]">
                    Fiat Conversion
                  </h2>
                  <p className="lg:text-lg lg:w-fit text-textSecondary">
                    Easily convert crypto payments to fiat (NGN, USD, EUR, etc.)
                    using the platform's transparent rates and low fees.
                  </p>
                </section>
                <section className="border border-transparent bg-[#F7F7F7] p-[40px] w-[630px] rounded-2xl">
                  <img src="/svg/Frame 27.svg" alt="icon" />
                  <h2 className="lg:text-xl lg:w-fit font-bold mt-[16px] mb-[11px]">
                    Seamless Crypto Payments
                  </h2>
                  <p className="lg:text-lg lg:w-fit text-textSecondary">
                    Manage payroll using stablecoins and cryptocurrencies for
                    employees and freelancers with timely compensation,
                    scheduling, and automation
                  </p>
                </section>
              </div>
              <div className="flex items-center justify-center space-x-[32px]">
                <section className="border border-transparent bg-[#F7F7F7] p-[40px] w-[630px] rounded-2xl">
                  <img src="/svg/Frame 28.svg" alt="icon" />
                  <h2 className="lg:text-xl lg:w-fit font-bold mt-[16px] mb-[8px]">
                    User-Friendly Dashboard
                  </h2>
                  <p className="lg:text-lg lg:w-fit text-textSecondary">
                    An intuitive interface for employers and employees that
                    allows for real-time payment and conversion tracking, as
                    well as detailed reports and analytics.
                  </p>
                </section>
                <section className="border border-transparent bg-[#F7F7F7] p-[40px] w-[495px] rounded-2xl">
                  <img src="/svg/Frame 29.svg" alt="icon" />
                  <h2 className="lg:text-xl lg:w-fit font-bold mt-[16px] mb-[8px]">
                    Global reach
                  </h2>
                  <p className="lg:text-lg lg:w-fit text-textSecondary">
                    Support for various cryptocurrencies and fiat currencies.
                    Eliminating cross-border payment complexities
                  </p>
                </section>
              </div>
            </div>
            {landingCardCompData2.map((data, index) => (
              <LandingCardComp2
                key={index}
                icon={data.icon}
                title={data.title}
                content={data.content}
                width={data.width}
                index={index}
              />
            ))}
          </div>
        </section>
        <section className="flex flex-col items-center justify-center sm:py-[40px] md:py-[64px] lg:py-[80px]">
          <h3 className="sm:text-[32px] md:text-[60px] font-bold sm:w-[333px] md:w-[722px] text-center">
            Ready to Simplify Your Crypto Payroll
          </h3>
          <p className="mt-[24px] mb-[40px] sm:text-[16px] md:text-[18px] text-textSecondary sm:w-[333px] md:w-[555px] text-center">
            Join our waitlist today and be the first to experience hassle-free
            crypto payroll management with Coinomad.
          </p>
          <div className="mt-[40px] flex sm:flex-col md:flex-row items-center justify-center sm:space-y-3 md:space-y-0 md:space-x-3">
            <input
              type="email"
              name="email"
              id="email1"
              placeholder="Email Address"
              className="border border-transparent text-landingInputText bg-landingInput focus:outline-none rounded-xl sm:w-[355px] md:w-[350px] h-[56px] px-[16px]"
            />
            <button
              className="text-white bg-buttonPrimary rounded-[8px] sm:w-[355px] md:w-[173px] h-[56px] shadow-customInset hover:bg-buttonPrimaryHover"
              type="submit"
            >
              Submit
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Landing;
