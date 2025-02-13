"use client";

import React, { useEffect, useState } from "react";
import { z } from "zod";
import "./Form.css";
import toast, { Toaster } from "react-hot-toast";
import {
  ageValidation,
  phoneNumberValidation,
} from "../../utils/formValidators";
import axios from "axios";
import { applyRoute, urls } from "@/constants/urls";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  age: z
    .number()
    .min(18, "Age must be a atleast 18")
    .max(32, "Age must be less than 100"),
  email: z.string().email("Invalid email"),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
  courses: z.string().min(1, "Required"),
});

const ApplyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    email: "",
    age: undefined,
    phone: "",
    courses: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "age" && !ageValidation({ value })) {
      return;
    }
    if (name === "phone" && !phoneNumberValidation({ value })) {
      return;
    }
    setFormData({
      ...formData,
      [name]: name === "age" && value > 0 ? Number(value) : value,
    });
  };

  const handleSubmit = async (e) => {
    console.log(formData," --formData");
    e.preventDefault();
    const result = schema.safeParse(formData);
    console.log(result);
    
    if (!result.success) {
      const formattedErrors = result.error.format();
      setErrors(formattedErrors);
    } else {
      setErrors({});
      try {
        setIsLoading(true);
        
        const res = await axios.post(urls.applyRoute, formData);
        if (res.status === 201) {
          toast.success(res.data.message);
          resetForm();
        }
      } catch (error) {
        console.log("error", error);
        
        toast.error(error.response.data.message);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const resetForm = () => {
    setFormData({ name: "", fatherName:"", email:"", age: "", phone: "", courses: "" });
  };

  const handleInput = (e) => {
    let value = e.target.value;
    // Remove all non-numeric characters
    value = value.replace(/[^0-9]/g, "");
    // Remove leading zero if it exists
    if (value.startsWith("0")) {
        value = value.substring(1);
    }
    e.target.value = value;
};

  const dropdownOptions = [
    "GP Rating",
    "B.Sc Nautical Science",
    "Diploma Nautical Science",
    "Diploma In Marine Engineering",
    "Graduate In Marine Engineering",
    "B.E Marine Engineering",
  ];

  const formFields = {
    name: {
      label: "Name",
      type: "text",
      required: true,
      placeholder: "Enter your name",
    },
    fatherName: {
      label: "Father's Name",
      type: "text",
      placeholder: "Enter your name",
    },
    email: {
      label: "Email",
      type: "email",
      required: true,
      placeholder: "Enter your email",
    },
    age: {
      label: "Age",
      type: "number",
      required: true,
      placeholder: "Enter your age",
      onlyNumber: true,
    },
    phone: {
        label: "Phone",
        type: "tel",
        required: true,
        placeholder: "Enter your phone number",
        onlyNumber: true,
    },
    courses: {
      label: "Courses",
      type: "select",
      required: true,
      options: dropdownOptions,
      placeholder: "Select an option",
    },
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit} className="form-container">
        {Object.keys(formFields).map((field) => (
          <div className="form-group" key={field}>
            <label className="form-label">
              {formFields[field].label}
              {formFields[field].required && (
                <span className="required-symbol">*</span>
              )}
            </label>
            {formFields[field].type === "select" ? (
              <select
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="form-input"
              >
                <option value="">Select {formFields[field].label}</option>
                {formFields[field].options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={formFields[field].type}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                onInput={
                  formFields[field]?.onlyNumber
                    ? (e) => handleInput(e)
                    : undefined
                }
                className="form-input"
                placeholder={formFields[field].placeholder}
              />
            )}
            {errors[field] && (
              <span className="form-error">{errors[field]._errors[0]}</span>
            )}
          </div>
        ))}
        <button type="submit" disabled={isLoading} className="form-button">
          {isLoading ? "Loading" : "Submit"}
        </button>
      </form>
      <Toaster position="top-center" />
    </div>
  );
};

export default ApplyForm;
