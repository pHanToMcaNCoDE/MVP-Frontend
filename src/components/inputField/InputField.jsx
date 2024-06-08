const InputField = ({
  label,
  placeHolder,
  name,
  onChange,
  type,
  value,
  error,
  errorText,
  className,
  min,
  max,
  onBlur,
}) => {
    return (
      <div className="flex flex-col justify-start items-start w-full">
        <div className="text-[#101010] text-[.88rem] leading-4 font-semibold mb-4">
          {label}
        </div>
        <input
          type={type}
          placeHolder={placeHolder}
          onChange={onChange}
          onBlur={onBlur}
          className={`${
            error ? "border-red-500" : "border-0"
          } px-4 py-4 rounded-lg w-full bg-[#F7F7F7] border-0 outline-none text-[1rem] leading-6 font-normal placeholder:text-[#838385] text-[#000000]`}
          min={min}
          max={max}
          name={name}
          value={value}
        ></input>
        {error && <p className=" text-[.9rem] text-red-500 my-2">{errorText}</p>}
      </div>
    );
};

export default InputField;