import React from "react";

const LandingCardComp = ({
  image1,
  image2,
  image3,
  title,
  use,
  description,
  list,
  reverse,
}) => {
  return (
    <div className="flex sm:flex-col md:flex-col lg:flex-row lg:items-center  my-8 text-white bg-landingCardBg rounded-[16px] sm:p-[24px] md:p-[24px] lg:p-[32px] sm:w-[335px] md:w-[632px] lg:w-[1176px]">
      <picture className={`lg:w-1/2 ${reverse ? "lg:order-2" : ""}`}>
        <source media="(min-width: 1360px)" srcSet={image3} />
        <source media="(min-width: 768px)" srcSet={image2} />
        <img src={image1} alt={title} />
      </picture>
      <div
        className={` lg:p-0 lg:w-1/2 ${
          reverse ? "lg:order-1 lg:pr-5" : "lg:pl-5"
        }`}
      >
        <h2 className="sm:text-[20px] md:text-[24px] mb-[24px] sm:mt-[24px]">{title}</h2>
        <h3 className="sm:tracking-[-0.64px] sm:text-[32px] md:text-[36px] lg:text-[44px] font-bold md:w-fit lg:w-[437px] sm:mb-[32px]">
          {use}
        </h3>
        <p className="sm:text-[16px] md:text-[16px] lg:text-[18px] sm:mt-[16px] sm:mb-[40px]">
          {description}
        </p>
        <ul className="list-checkmarks">
          {list.map((item, index) => (
            <li
              key={index}
              className="sm:text-[16px] md:text-[18px] mb-[24px] sm:w-[254px] md:w-[599px] lg:w-[539px]"
            >
              {item.item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LandingCardComp;
