import React, { useState } from "react";
import { validateEmail } from "../constant/CommonUntility";
import { showSuccessToast } from "../constant/Toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Clear individual field error when user types
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formErrors = { ...errors };

    // Basic validation for empty fields
    if (!formData.name) {
      formErrors.name = "Name is required.";
    }
    if (!formData.email) {
      formErrors.email = "Email is required.";
    }
    if (!formData.message) {
      formErrors.message = "Message is required.";
    }

    // Email format validation
    if (formData.email && !validateEmail(formData.email)) {
      formErrors.email = "Please enter a valid email address.";
    }

    // Check if there are any errors
    if (formErrors.name || formErrors.email || formErrors.message) {
      setErrors(formErrors);
      return;
    }

    // Reset errors and show confirmation message
    setErrors({
      name: "",
      email: "",
      message: "",
    });
    setSubmitted(true);
    showSuccessToast('Form submitted successfully');

    // Reset form data
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-16 bg-white text-black">
      <div className="container mx-auto text-center p-4">
        <h2 className="text-4xl font-bold mb-8">Contact Us</h2>

        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto  p-8 rounded-lg  text-start boxShadow"
          
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-2">{errors.name}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-2">{errors.email}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-2">{errors.message}</p>
            )}
          </div>

 
          <button 
            type="submit"
            className="w-[150px] mt-6 bg-black px-6 py-3 rounded text-white hover:bg-customYellow">
          Submit
            </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
