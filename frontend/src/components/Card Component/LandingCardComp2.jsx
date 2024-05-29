//App
import React from "react";
import classNames from "classnames";

const LandingCardComp2 = ({ icon, title, content, width, index }) => {
  const widthClass = classNames({
    "lg:w-[495px]": width === "small",
    "lg:w-[630px]": width === "large",
  });

const positionClass = classNames({
"lg:-translate-x-[3rem]": index === 1,
"lg:translate-x-[5.5rem]": index === 3
});

  return (
      <div
        className={`rounded-2xl p-[40px] border border-transparent bg-[#F7F7F7] sm:w-[335px] md:w-[680px] lg:h-[275px] mb-[16px] ${widthClass} ${positionClass}`}
      >
        <img src={icon} alt="icon" />
        <h2 className="sm:text-lg md:text-lg lg:text-xl lg:w-fit font-bold mt-[16px] mb-[11px]">
          {title}
        </h2>
        <p className="sm:text-base md:text-lg lg:text-lg lg:w-fit text-textSecondary">
          {content}
        </p>
      </div>
  );
};

export default LandingCardComp2;
