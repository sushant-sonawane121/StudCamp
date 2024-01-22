import React, { useState } from 'react';

const StudentRegi = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    birthdate: '',
    collegeName: '', // Changed from collegeId to collegeName
    registrationId: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: false,
    email: false,
    birthdate: false,
    collegeName: false, // Changed from collegeId to collegeName
    registrationId: false,
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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    const validationErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (value.trim() === '') {
        validationErrors[key] = true;
      }
    });

    // If there are validation errors, set the error state
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // If no errors, proceed with your registration logic
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Registration Form</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600 text-sm font-medium mb-2">
              Username<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className={`w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-teal-400 ${
                errors.username ? 'border-red-500' : ''
              }`}
              placeholder="Enter your username"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-teal-400 ${
                errors.email ? 'border-red-500' : ''
              }`}
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="birthdate" className="block text-gray-600 text-sm font-medium mb-2">
              Birthdate<span className="text-red-500">*</span>
            </label>
            <input
              type="text" // Change to date type if needed
              id="birthdate"
              name="birthdate"
              value={formData.birthdate}
              onChange={handleChange}
              className={`w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-teal-400 ${
                errors.birthdate ? 'border-red-500' : ''
              }`}
              placeholder="Enter your birthdate"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="collegeName" className="block text-gray-600 text-sm font-medium mb-2">
              College Name<span className="text-red-500">*</span>
            </label>
            <select
              id="collegeName"
              name="collegeName"
              value={formData.collegeName}
              onChange={handleChange}
              className={`w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-teal-400 ${
                errors.collegeName ? 'border-red-500' : ''
              }`}
            >
              <option value="" disabled>
                Select your college
              </option>
              <option value="college1">College 1</option>
              <option value="college2">College 2</option>
              {/* Add more options as needed */}
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="registrationId" className="block text-gray-600 text-sm font-medium mb-2">
              PRN<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="registrationId"
              name="registrationId"
              value={formData.registrationId}
              onChange={handleChange}
              className={`w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-teal-400 ${
                errors.registrationId ? 'border-red-500' : ''
              }`}
              placeholder="Enter your registration ID"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">
              Password<span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-teal-400 ${
                errors.password ? 'border-red-500' : ''
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

export default StudentRegi;
