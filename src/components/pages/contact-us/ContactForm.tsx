"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

// Validation schema
const validationSchema = Yup.object({
  name: Yup.string().required("Full Name is required"),
  mobile: Yup.string()
    .required("Mobile is required")
    .matches(/^\+?[0-9]+$/, "Must be only digits and can start with +")
    .min(10, "Must be at least 10 digits")
    .max(15, "Must be at most 15 digits"),

  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  message: Yup.string().required("Message is required"),
  product: Yup.string().required("Product is required"),
});

const ContactForm = () => {
 
  const formik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      email: "",
      message: "",
      product: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form data", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="w-full lg:px-12 px-4 py-8 bg-white">
        <div className="self-stretch h-[42px] text-black md:text-[40px] text-4xl font-bold font-titillium leading-[46px]">
          Get in Touch
        </div>
        <div className=" pt-7 ">
          <div className="  ">
            <div className="gap-8 grid md:grid-cols-2">
              <TextInput
                type="text"
                placeholder="Full Name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && formik.errors.name}
              />
              <TextInput
                type="tel"
                placeholder="Mobile"
                name="mobile"
                value={formik.values.mobile}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.mobile && formik.errors.mobile}
              />
              <TextInput
                type="email"
                placeholder="Email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && formik.errors.email}
              />

              <div className="h-[50px]  p-2.5 opacity-50 bg-[#bbbbbb]/50 rounded-sm     justify-start items-center  ">
                <select
                  name="product"
                  value={formik.values.product}
                  onChange={formik.handleChange}
                  className="w-32 bg-transparent outline-none pt-1"
                >
                  <option value="">Select product</option>
                  <option value="BUMPA">BUMPA</option>
                  <option value="SHIFTA">SHIFTA</option>
                  <option value="SCREENA">SCREENA</option>
                </select>
                <div>
                {formik.touched.product && formik.errors.product && (
                <div className="text-red-500 text-sm mt-4 ">
                  {formik.errors.product}
                </div>
              )}
                </div>
                
              </div>
              
            </div>
            <div className="mb-7  mt-10 ">
              <div className="p-2.5 opacity-50 bg-[#bbbbbb]/50 rounded-sm ">
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  cols={10}
                  rows={5}
                  className="w-full h-full text-black text-xl font-normal font-titillium bg-transparent outline-none "
                />
              </div>
              {formik.touched.message && formik.errors.message && (
                <div className="text-red-300 ps-2 text-sm  ">
                  {formik.errors.message}
                </div>
              )}
            </div>
          </div>
        </div>
        <button type="submit" className=" p-2.5  bg-[#c3202a] rounded-sm">
          <span className="text-center text-white md:text-xl  text-lg font-normal font-titillium md:eading-[46px] px-3">
            Call me Back
          </span>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;

const TextInput = ({
  type,
  placeholder,
  name,
  value,
  onChange,
  onBlur,
  error,
}: any) => {
  return (
    <div className="w-full h-[50px] p-2.5 opacity-50 bg-[#bbbbbb]/50 rounded-sm flex flex-col justify-start">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className="w-full h-[30px] text-black text-base font-normal font-titillium leading-[46px] bg-transparent outline-none"
      />
      {error && <div className="text-red-500 text-sm mt-3">{error}</div>}
    </div>
  );
};
