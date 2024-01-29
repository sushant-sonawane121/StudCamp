// src/components/CollegeDashboard.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from 'react-router-dom' if you are using react-router

import CampusNotice from '../../../components/CollegeCompo/CampusNotice';

const CollegeDashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex">
      {/* Navigation Sidebar */}
      <div className="bg-blue-500 text-white p-4">
        {/* Dashboard Title */}
        <h1 className="text-2xl font-bold mb-4">College Dashboard</h1>

        {/* Username */}
        <div className="mb-4">
          <p className="text-sm">Welcome, <span className="font-bold">Username</span></p>
        </div>

        {/* Navigation Links */}
        <ul>
          <li>
            <Link to="/all-students" className="hover:text-gray-300">All Students</Link>
          </li>
          <li>
            <Link to="/send-note" className="hover:text-gray-300">Send Note</Link>
          </li>
          <li>
            <Link to="/send-note" className="hover:text-gray-300">Show Notice</Link>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-grow bg-teal-700 p-8">
        <div className="bg-white rounded-lg shadow-md p-2 flex justify-between">
          {/* Main Content */}
          <h1 className="text-2xl font-bold py-1">College Dashboard</h1>
          {/* <h1 className="text-md font-bold py-1 cursor-pointer text-red-600">Logout</h1> */}
          {/* Add your dashboard components and content here */}
        </div>
        <CampusNotice/>
      </div>
    </div>
  );
};

export default CollegeDashboard;
