import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CollegeRegi = () => {
 
  const navigateTo = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    collegeId: "",
    collegename: "",
    email: "",
    address: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: false,
    collegeId: false,
    collegename: false,
    email: false,
    address: false,
    password: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Reset error state when the user starts typing
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: false,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    const validationErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (value.trim() === "") {
        validationErrors[key] = true;
      }
    });

    // If there are validation errors, set the error state
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const data = await fetch("http://localhost:3000/college/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // You might need additional headers, such as authorization headers
        },
        body: JSON.stringify(formData),
      })
        .then((data) => {
          if (!data.ok) {
            console.log("data not recived by server");
          }
          return data.json();
        })
        .then((data) => {
          console.log("Success:", data);
          setFormData({
            username: "",
            collegeId: "",
            collegename: "",
            email: "",
            address: "",
            password: "",
          });
          navigateTo("/college/login")
          // Handle the successful response here
        })
        .catch((error) => {
          console.error("Error:", error);
          // Handle errors here
        });
    } catch (error) {
      console.log("try catch error", error);
    }

    // console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          College Registration Form
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Username<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className={`w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-teal-400 ${
                errors.username ? "border-red-500" : ""
              }`}
              placeholder="Enter your username"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="collegeId"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              College ID / Code<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="collegeId"
              name="collegeId"
              value={formData.collegeId}
              onChange={handleChange}
              className={`w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-teal-400 ${
                errors.collegeId ? "border-red-500" : ""
              }`}
              placeholder="Enter your college ID"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="collegename"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              College Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="collegename"
              name="collegename"
              value={formData.collegename}
              onChange={handleChange}
              className={`w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-teal-400 ${
                errors.collegename ? "border-red-500" : ""
              }`}
              placeholder="Enter your college name"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-teal-400 ${
                errors.email ? "border-red-500" : ""
              }`}
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Address<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className={`w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-teal-400 ${
                errors.address ? "border-red-500" : ""
              }`}
              placeholder="Enter your address"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Password<span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-teal-400 ${
                errors.password ? "border-red-500" : ""
              }`}
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-2 rounded-md hover:bg-teal-600"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default CollegeRegi;
