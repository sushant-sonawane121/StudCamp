// AdminDashboard.js
import React, { useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  // let navigateTo = useNavigate();
  let navigateTo = useNavigate();
  const adminUser = localStorage.getItem("logedAdmin");

  useEffect(() => {
    if (!adminUser) {
      navigateTo("/");
    }
  }, [navigateTo]);

  return (
    <div className="flex h-screen">
      {/* Left Navigation Bar */}
      <div className="bg-gray-800 text-white w-1/5 p-4">
        <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>
        <p className="mb-4">Welcome, Admin123!</p>

        <ul>
          <li className="mb-2">
            <Link
              to="/dashboard/AdminDashboard/allcolleges/"
              className="hover:underline"
            >
              Show All Colleges
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/dashboard/AdminDashboard/allstudents"
              className="hover:underline"
            >
              Show All Students
            </Link>
          </li>
        </ul>
      </div>

      {/* Right Content */}
      <div className="flex-grow p-8">
        <div className="font-medium">This is admin dashboard</div>
      </div>
    </div>
  );
};

export default AdminDashboard;
