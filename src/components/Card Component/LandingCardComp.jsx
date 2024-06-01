//App
import classNames from "classnames";
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
  index,
}) => {
  const transform = classNames({
    "md:translate-y-[1.7rem]": index === 0,
    "md:translate-y-[1.5rem]": index === 1,
    // "lg:translate-y-[2.5rem]": index === 0,
    // "lg:translate-y-[7.2rem]": index === 1,
  });

  return (
    <div className="flex sm:flex-col md:flex-col lg:flex-row  my-8 text-white bg-landingCardBg rounded-[16px] sm:p-[24px] md:p-[24px] lg:p-[32px] sm:w-[335px] md:w-[632px] lg:w-[1176px]">
      <picture className={`lg:w-1/2 ${reverse ? "lg:order-2" : ""}`}>
        <source media="(min-width: 1360px)" srcSet={image3} />
        <source media="(min-width: 768px)" srcSet={image2} />
        <img src={image1} alt={title} />
      </picture>
      <div
        className={`flex flex-col items-start justify-between lg:w-1/2 ${
          reverse ? "lg:order-1 lg:pr-5" : "lg:pl-5"
        }`}
      >
        <div>
          <h2 className="sm:text-[20px] md:text-[24px] sm:my-[24px] md:my-[24px] lg:mt-0 lg:mb-[24px]">
            {title}
          </h2>
          <h3 className="sm:tracking-[-0.64px] sm:text-[32px] md:text-[36px] lg:text-[44px] sm:mb-[32px] md:mb-[16px] font-bold md:w-fit lg:w-[437px]">
            {use}
          </h3>
          <p className="sm:text-[16px] md:text-[16px] lg:text-[18px] sm:mb-[40px] md:mb-0">
            {description}
          </p>
        </div>
        <ul className={`list-checkmarks sm:translate-y-[22px] ${transform}`}>
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
