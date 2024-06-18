import React, { useState } from 'react'

const CustomRadioField = ({option}) => {
    const [optionClicked, setOptionClicked] = useState('')

    const handleChange = () => {
        setOptionClicked(option)
    }
  return (
    <div
    onChange={handleChange}
      onClick={() => setOptionClicked(option)}
      className={`w-full p-[24px] rounded-[8px] flex justify-between items-center ${
        optionClicked
          ? "border-[1.5px] border-[#2F4EED] bg-[#EAEDFD]"
          : "bg-[#F7F7F7] border-[1.5px] border-[#F7F7F7]"
      }`}
    >
      <p className="text-[1.5rem] font-semibold leading-8 tracking-[-0.48px]">
        {option}
      </p>
      <div className="relative flex justify-center items-center">
        <input
          className={`focus:outline-none checked:border-transparent checked:bg-[#2F4EED] relative w-5 h-5 bg-transparent appearance-none border border-[#E7E7E7] rounded-full focus:bg-transparent`
          }
          type="radio"
          checked={optionClicked === option}
        ></input>
        <div className="bg-white w-2 rounded-full h-2 absolute top-[6px] left-[6px]"></div>
      </div>
    </div>
  );
}

export default CustomRadioField
