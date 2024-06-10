import React, { useState } from 'react'
import { ScaleLoader } from 'react-spinners';
import InputField from '../../../formFields/InputField';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

const StepTwo = () => {
    const [loading, setLoading] = useState(false)
    const formik = ''
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
            // value={formik.values.email}
            // type={`text`}
            // error={formik.touched.email && formik.errors.email}
            // errorText={formik.errors.email}
          />
          <button
            type="submit"
            className={`${
              loading ? "bg-[#2F4EED]/30" : "bg-[#2F4EED]"
            } px-2 py-2 rounded-lg w-full text-white h-[3.5em] flex justify-center items-center gap-[40px]`}
          >
            {loading ? <ScaleLoader /> : "Sign Up with email"}
          </button>
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
}

export default StepTwo
