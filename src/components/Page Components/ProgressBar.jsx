import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const ProgressBar = ({ currentStep, totalSteps }) => {
  const navigate = useNavigate();
  const progressPercentage = (currentStep / totalSteps) * 100;

  //   const handlePrevious = () => {
  //     if (currentStep > 2) {
  //       navigate(-1); // Navigate to the previous step
  //     }
  //   };
  return (
    <div className="flex justify-evenly space-x-9 items-center w-fit mb-6">
      <div className="flex justify-between items-center ">
        <button
          onClick={() => navigate(-1)}
          disabled={currentStep === 2}
          className={`px-4 py-2 text-white rounded-full w-[56px] h-[56px] ${
            currentStep === 2
              ? "bg-[#F7F7F7] cursor-not-allowed"
              : "bg-[#F7F7F7]"
          }`}
        >
          <FaArrowLeft className="text-xl text-[#151515]" />
        </button>
      </div>
      <div>
        <span className="text-sm font-medium">
          Step {currentStep} of {totalSteps}
        </span>
        <div className="sm:w-[258px] md:w-[258px] bg-[#F7F7F7] rounded-full h-2.5 mb-4">
          <div
            className="bg-[#2F4EED] h-2.5 rounded-full"
            style={{ width: `${progressPercentage}%` }}
            // style={{ width: `${((currentStep - 1) / totalSteps) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
