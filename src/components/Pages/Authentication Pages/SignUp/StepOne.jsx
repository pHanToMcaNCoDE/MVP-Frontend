import React, { useState } from "react";
import { ScaleLoader } from "react-spinners";
import InputField from "../../../formFields/InputField";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import FormButton from "../../../Buttons/FormButton";

const StepOne = () => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
    },
  });
  return (
    <section className="flex justify-center items-center gap-[96px] w-full h-[90vh]">
      <div className="flex flex-col justify-start items-start w-[21.875em] h-[19.75em] gap-[40px]">
        <h1 className="text-[2.25rem] font-bold leading-[44px] tracking-[-0.72px]">
          Sign Up
        </h1>
        <form className="w-[21.875em] h-[10.5em] flex flex-col justify-between items-center gap-6">
          <InputField
            label={`Email`}
            placeholder={`Email Address`}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            name={`email`}
            value={formik.values.email} // Use formik's email value
            type={`text`}
            // error={formik.touched.email && formik.errors.email} (if using form validation)
            // errorText={formik.errors.email} (if using form validation)
          />
          
        <FormButton btnName={"Sign Up with email"} loading={loading} value={formik.values.email} />
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
};

export default StepOne;
