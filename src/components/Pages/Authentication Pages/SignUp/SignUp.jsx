import { useFormik } from 'formik';
import { Input } from 'postcss'
//App
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from 'react-router-dom';

//Component(s)
import { ScaleLoader } from "react-spinners"; // loading animantion component used for buttons
import { signUp } from '../../../../Data/formikUtils';
import InputField from '../../../formFields/InputField';
import PasswordField from '../../../formFields/PasswordField';
import { IoIosCheckmark } from 'react-icons/io';
import axios from 'axios';
import { PiArrowsDownUp } from 'react-icons/pi';
import ConfirmPasswordField from '../../../formFields/ConfirmPasswordField';

const SignUp = () => {

  const navigate = useNavigate()
  const [isClicked, setIsClicked] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [loading, setLoading] = useState(false)

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      orgName: "",
      email: "",
      password: "",
      conPassword: "",
    },
    validationSchema: signUp,
    onSubmit: (values) => {
      setLoading(true);

      axios.post(
        `/api/employerauth/signup`, {
          firstName: values.firstName,
          lastName: values.lastName,
          organizationName: values.orgName,
          email: values.email,
          password: values.password,
          confirmPassword: values.conPassword
        }
      ).then((res) => {
        console.log('SignUp', res);
        navigate('/verify-email')
      }).catch((err) => {
        console.log('Sign Up error', err)
      }).finally(() => {
        setLoading(false);
      })
    },
  });

  return (
    <section className="w-full h-screen flex justify-center items-center">
      <form
        className="flex flex-col justify-start items-start w-[35em] h-[36.875em] gap-[40px]"
        onSubmit={formik.handleSubmit}
      >
        <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-[15px]">
          <InputField
            label={`First Name`}
            placeholder={`Enter First Name`}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            name={`firstName`}
            value={formik.values.firstName}
            type={`text`}
            error={formik.touched.firstName && formik.errors.firstName}
            errorText={formik.errors.firstName}
          />
          <InputField
            label={`Last Name`}
            placeholder={`Enter Last Name`}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            name={`lastName`}
            value={formik.values.lastName}
            type={`text`}
            error={formik.touched.lastName && formik.errors.lastName}
            errorText={formik.errors.lastName}
          />
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-[15px]">
          <InputField
            label={`Organization Name`}
            placeholder={`Enter Organization Name`}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            name={`orgName`}
            value={formik.values.orgName}
            type={`text`}
            error={formik.touched.orgName && formik.errors.orgName}
            errorText={formik.errors.orgName}
          />
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
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-[15px]">
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
          <ConfirmPasswordField
            label={`Confirm Password`}
            placeholder={`Confirm Password`}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            name={`conPassword`}
            value={formik.values.conPassword}
            type={isClicked2 ? `text` : `password`}
            error={formik.touched.conPassword && formik.errors.conPassword}
            errorText={formik.errors.conPassword}
            isClicked2={isClicked2}
            setIsClicked2={setIsClicked2}
          />
        </div>

        {/* Password Checks */}
        <div className="w-full gap-[40px]">
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
        <button
          type="submit"
          className={`${
            loading ? "bg-[#2F4EED]/30" : "bg-[#2F4EED]"
          } px-2 py-2 rounded-lg w-full text-white h-[3.5em] gap-[40px]`}
        >
          {loading ? <ScaleLoader /> : "Next"}
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
}

export default SignUp
