import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//Component(s)
import { ScaleLoader } from "react-spinners"; // loading animantion component used for buttons
import InputField from "../../../formFields/InputField";
import { validateName } from "../../../../Data/formikUtils";
import ProgressBar from "../../../Page Components/ProgressBar";
import axios from "axios";

const Identification = () => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    validationSchema: validateName,
    onSubmit: (values) => {
      setLoading(true);
      // Simulate a delay for form submission
      setTimeout(() => {
        setLoading(false);
        navigate("/sign-up/organization");
      }, 1000);
    },
  });
  return (
    <section className="flex flex-col justify-center items-center w-full h-screen">
      <ProgressBar currentStep={3} totalSteps={4} />
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col justify-center items-start gap-[0] w-[21.875em] h-[24.25em]"
      >
        <div className="flex flex-col justify-center items-start w-full gap-[16px]">
          <h1 className="text-[#101010] text-[2rem] leading-10 font-bold mb-[40px]">
            Lets know more about you
          </h1>
          <InputField
            label="First Name"
            placeholder="John"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            name="firstName"
            value={formik.values.firstName}
            type="text"
            error={formik.touched.firstName && formik.errors.firstName}
            errorText={formik.errors.firstName}
          />
          <InputField
            label="Last Name"
            placeholder="Clinton"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            name="lastName"
            value={formik.values.lastName}
            type="text"
            error={formik.touched.lastName && formik.errors.lastName}
            errorText={formik.errors.lastName}
          />
        </div>
        <button
          type="submit"
          className={`${
            loading || !formik.values.firstName || !formik.values.lastName
              ? "bg-[#2F4EED]/30"
              : "bg-[#2F4EED]"
          } px-2 py-3 rounded-lg w-[350px]  text-white flex justify-center items-center mt-[40px]`}
          disabled={
            loading || !formik.values.firstName || !formik.values.lastName
          }
        >
          {loading ? <ScaleLoader /> : "Next"}
        </button>
      </form>
    </section>
  );
};

export default Identification;
