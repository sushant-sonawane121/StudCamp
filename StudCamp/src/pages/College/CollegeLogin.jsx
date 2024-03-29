import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

const CollegeLogin = () => {
  const navigateTo = useNavigate();

  //   useEffect(() => {
  //     let adminUser = localStorage.getItem("logedAdminId");

  //     if (adminUser) {
  //       navigateTo("/admin/AdminDashboard");
  //     }

  //   }, [navigateTo]);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     console.log(formData);
    try {
      const response = await fetch("http://localhost:3000/CollegeLogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const responseData = await response.json();
        // console.log(responseData);
        const userId = responseData.id;
        const username = responseData.userName;

        localStorage.setItem("CollegeAdminId", JSON.stringify(userId));
        localStorage.setItem("CollegeAdminUsername", JSON.stringify(username));
        localStorage.setItem(
          "collegeName",
          JSON.stringify(responseData.collegename)
        );
        localStorage.setItem(
          "collegeId",
          JSON.stringify(responseData.collegeId)
        );

        // let lcstor = JSON.parse(localStorage.getItem("logedAdminUsername"));
        // console.log("Stored Data:", lcstor);
        navigateTo("/college/CollegeDashboard");
      } else {
        console.log("Data not received by the server");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          College Login
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-teal-400"
              placeholder="Enter your username"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-teal-400"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-2 rounded-md hover:bg-teal-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default CollegeLogin;
