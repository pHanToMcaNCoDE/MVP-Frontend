import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//Component(s)
import { ScaleLoader } from "react-spinners"; // loading animantion component used for buttons
import InputField from "../../../formFields/InputField";
import { HiOutlinePencil } from "react-icons/hi2";
import { verifyEmail } from "../../../../Data/formikUtils";

const VerifyEmail = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios.get();
  });
  const formik = useFormik({
    initialValues: {
      code,
    },
    validationSchema: verifyEmail,
  });
  return (
    <section className="flex flex-col justify-center items-center w-full h-screen gap-[96px]">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col justify-center items-start gap-[40px] w-[21.875em] h-[24.25em]"
      >
        <div className="flex flex-col justify-center items-start w-full gap-[12px]">
          <h1 className="text-[#101010] text-[2rem] leading-10 font-bold">
            Verify your email
          </h1>
          <p className="text-[#9C9C9C] text-[1.125rem] leading-7 font-semibold">
            Enter the verifcation code sent to
          </p>
          <Link
            className="text-[1rem] text-[#5229E1] leading-6 font-medium flex items-center gap-x-1"
            to={``}
          >
            victory.odumeh@gmail.com
            <HiOutlinePencil />
          </Link>
        </div>
        <InputField
          label={`Code`}
          placeholder={`Enter Code`}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          name={`code`}
          value={formik.values.code}
          type={`text`}
          error={formik.touched.code && formik.errors.code}
          errorText={formik.errors.code}
        />

        <button
          type="submit"
          className={`${
            loading ? "bg-[#2F4EED]/30" : "bg-[#2F4EED]"
          } px-2 py-2 rounded-lg w-full text-white h-[3.5em] gap-[40px]`}
        >
          {/* {loading ? <ScaleLoader /> : "Next"} */}
          Verify Email
        </button>
        <div className="w-full text-center text-[1rem] leading-6 font-normal flex flex-col sm:flex-row gap-x-3 justify-center items-center">
          <p className="text-[#101010]">Didn’t get your code?</p>
          <Link className="text-[#2F4EED]" to="/sign-in">
            Send a new code
          </Link>
        </div>
      </form>
    </section>
  );
};

export default VerifyEmail;
