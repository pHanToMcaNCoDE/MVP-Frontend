//App
import { useFormik } from "formik";
import React, { useState } from "react";

//Component(s)
import { ScaleLoader } from "react-spinners"; // loading animantion component used for buttons
import { signIn } from "../../../Data/formikUtils";
import InputField from "../../formFields/InputField";
import PasswordField from "../../formFields/PasswordField";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signIn,
    onSubmit: (values) => {
      // api and co
    },
  });
  return (
    <section className="w-full h-screen flex justify-center items-center">
      <form
        className="flex flex-col justify-start items-start w-[21.875em] h-[27.75em] gap-[40px]"
        onSubmit={formik.handleSubmit}
      >
        <h1 className="text-[#101010] text-[2rem] leading-10 font-bold">
          Sign in
        </h1>
        <InputField
          label={`Email`}
          placeholder={`Email Address`}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          name={`email`}
          value={formik.values.email}
          type={`text`}
          error={formik.touched.email && formik.errors.email}
          errorText={formik.errors.email}
        />
        <PasswordField
          label={`Password`}
          placeholder={`Enter Password`}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          name={`password`}
          value={formik.values.password}
          type={isClicked ? `text` : `password`}
          error={formik.touched.password && formik.errors.password}
          errorText={formik.errors.password}
          isClicked={isClicked}
          setIsClicked={setIsClicked}
        />
        <Link
          to="/forgot-password"
          className="text-[1rem] leading-6 font-medium text-[#2F4EED]"
        >
          Forgot Password?
        </Link>
        <button className="bg-[#2F4EED] px-2 py-2 rounded-lg w-full text-white h-[3.5em]">
          {isLoading ? (
            <ScaleLoader
              color="#fff"
              height={15}
              className="translate-y-[3px]"
            />
          ) : (
            "Submit"
          )}
        </button>
        <div className="w-full text-center text-[1rem] leading-6 font-normal flex flex-col sm:flex-row gap-x-3 justify-center items-center">
          <p className="text-[#101010]">Don’t have an account?</p>
          <Link className="text-[#2F4EED]" to={`/sign-up`}>
            Sign Up
          </Link>
        </div>
      </form>
    </section>
  );
};

export default SignIn;
