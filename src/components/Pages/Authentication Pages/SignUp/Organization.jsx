import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//Component(s)
import { ScaleLoader } from "react-spinners"; // loading animantion component used for buttons
import InputField from "../../../formFields/InputField";
import ProgressBar from "../../../Page Components/ProgressBar";
import axios from "axios";
import FormButton from "../../../Buttons/FormButton";

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
        <FormButton btnName={"Complete"} value={formik.values.organization} loading={loading} />
      </form>
    </section>
  );
};

export default Organization;
