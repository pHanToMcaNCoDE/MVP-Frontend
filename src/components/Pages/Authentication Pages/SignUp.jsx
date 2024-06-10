import { useFormik } from "formik";
import { Input } from "postcss";
//App
import React, { useState } from "react";
import { Link } from "react-router-dom";

//Component(s)
import { ScaleLoader } from "react-spinners"; // loading animantion component used for buttons
import { signUp } from "../../../Data/formikUtils";
import InputField from "../../formFields/InputField";
import PasswordField from "../../formFields/PasswordField";
import { IoIosCheckmark } from "react-icons/io";

const SignUp = () => {
  const [isClicked, setIsClicked] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      fullName: "",
      password: "",
    },
    validationSchema: signUp,
    onSubmit: (values) => {
      // api and co
    },
  });

  return (
    <section className="w-full h-screen flex justify-center items-center">
      <form
        className="flex flex-col justify-start items-start w-[21.875em] h-[36.875em] gap-[40px]"
        onSubmit={formik.handleSubmit}
      >
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
        <InputField
          label={`Full Name`}
          placeholder={`Enter Full Name`}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          name={`fullName`}
          value={formik.values.fullName}
          type={`text`}
          error={formik.touched.fullName && formik.errors.fullName}
          errorText={formik.errors.fullName}
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

        {/* Password Checks */}
        <div className="w-full">
          <p className="text-[.88rem] leading-4 font-semibold">
            Your Password must contain
          </p>
          <div className="flex flex-col justify-start items-start gap-[5px] my-3 w-full">
            <div className="flex justify-center items-center text-[.75rem] leading-[14px] font-semibold gap-x-2">
              <div className="w-[5px] h-[5px] flex justify-center items-center">
                {/^(?=.*[a-zA-Z])/.test(formik.values.password) ? (
                  <span className="text-[#25CD36]">
                    <IoIosCheckmark className="text-[1.125rem]" />
                  </span>
                ) : (
                  <span className="w-[5px] h-[5px] bg-[#101010] rounded-full"></span>
                )}
              </div>
              <p>1 Letter</p>
            </div>
            <div className="flex justify-center items-center text-[.75rem] leading-[14px] font-semibold gap-x-2">
              <div className="w-[5px] h-[5px] flex justify-center items-center">
                {/^(?=.*[0-9!@#$%^&*()_+\[\]{}|;:'",.<>/?\\`~=-])/.test(
                  formik.values.password
                ) ? (
                  <span className="flex items-center text-[#25CD36]">
                    <IoIosCheckmark className="text-[1.125rem]" />
                  </span>
                ) : (
                  <span className="w-[5px] h-[5px] flex justify-center items-center bg-[#101010] rounded-full"></span>
                )}
              </div>
              <p>1 Number or special character</p>
            </div>
            <div className="flex justify-center items-center text-[.75rem] leading-[14px] font-semibold gap-x-2">
              <div className="w-[5px] h-[5px] flex justify-center items-center">
                {/^.{8}$/.test(formik.values.password) ? (
                  <span className="flex items-center text-[#25CD36]">
                    <IoIosCheckmark className="text-[1.125rem]" />
                  </span>
                ) : (
                  <span className="w-[5px] h-[5px] flex justify-center items-center bg-[#101010] rounded-full"></span>
                )}
              </div>
              <p>8 Charaters</p>
            </div>
          </div>
        </div>
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
          <p className="text-[#101010]">Already have an account?</p>

          <Link className="text-[#2F4EED]" to="/sign-in">
            Sign In
          </Link>
        </div>
      </form>
    </section>
  );
};

export default SignUp;
