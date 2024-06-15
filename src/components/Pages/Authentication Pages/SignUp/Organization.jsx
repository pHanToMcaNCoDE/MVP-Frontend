import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//Component(s)
import { ScaleLoader } from "react-spinners"; // loading animantion component used for buttons
import InputField from "../../../formFields/InputField";
import ProgressBar from "../../../Page Components/ProgressBar";
import axios from "axios";

const Organization = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios.get();
  });
  const formik = useFormik({
    initialValues: {
      organization: "",
    },
    onSubmit: (values) => {
      setLoading(true);
      // Simulate a delay for form submission
      setTimeout(() => {
        setLoading(false);
        // Handle final submission, perhaps show a success message or navigate elsewhere
      }, 1000);
    },
  });
  return (
    <section className="flex flex-col justify-center items-center w-full h-screen">
      <div className="translate-y-[4rem]">
        <ProgressBar currentStep={4} totalSteps={4} />
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col justify-center items-start gap-[40px] w-[21.875em] h-[24.25em]"
      >
        <div className="flex flex-col justify-center items-start w-full gap-[12px]">
          <h1 className="text-[#101010] text-[2rem] leading-10 font-bold">
            Organization Details
          </h1>
        </div>
        <InputField
          label="Organization Name"
          placeholder="Organization"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          name="organization"
          value={formik.values.organization}
          type="text"
          //   error={formik.touched.firstName && formik.errors.firstName}
          //   errorText={formik.errors.firstName}
        />
        <button
          type="submit"
          className={`${
            loading || !formik.values.firstName || !formik.values.lastName
              ? "bg-[#2F4EED]/30"
              : "bg-[#2F4EED]"
          } px-2 py-3 rounded-lg w-[350px]  text-white flex justify-center items-center gap-[40px]`}
          disabled={
            loading || !formik.values.firstName || !formik.values.lastName
          }
        >
          {loading ? <ScaleLoader /> : "Complete"}
        </button>
      </form>
    </section>
  );
};

export default Organization;
