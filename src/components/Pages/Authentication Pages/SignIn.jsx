//App
import { useFormik } from "formik";
import React from "react";

//Component(s)
import { ScaleLoader } from "react-spinners"; // loading animantion component used for buttons
import { signIn } from "../../../Data/formikUtils";
import InputField from "../../inputField/InputField";

const SignIn = () => {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: signIn,
    onSubmit: (values) => {
        // api and co
    }
  });
  return (
    <section className="w-full h-screen flex justify-center items-center">
      <form
        className="flex flex-col justify-start items-start w-[21.875em] h-[27.75em]"
        onSubmit={formik.handleSubmit}
      >
        <InputField
          label={`Email`}
          placeHolder={`Email Address`}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          name={`email`}
          value={formik.values.email}
          type={`text`}
          error={formik.touched.email && formik.errors.email}
          errorText={formik.errors.email}
        />
        <button>SUbmit</button>
      </form>
    </section>
  );
}

export default SignIn
