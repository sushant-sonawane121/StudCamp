import React from "react";
import {Link} from 'react-router-dom';

const LoginPage = () => {
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Login
        </h2>

        {/* Student Login */}
        <div className="mb-4">
          <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
            Student Login
          </button>
          <p className="mt-2 text-center text-gray-600">
            Don't have an account?{" "}
            <Link to="/student/register" className="text-blue-500 hover:underline">
              Register
            </Link>
          </p>
        </div>

        {/* College Login */}
        <div className="mb-4">
          <button className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600">
            College Login
          </button>
          <p className="mt-2 text-center text-gray-600">
            Don't have an account?{" "}
            <Link to="/college/register" className="text-green-500 hover:underline">
              Register
            </Link>
          </p>
        </div>

        {/* Admin Login */}
        <div>
          <button className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600">
          <Link to="/login/AdminLogin" className=" w-full ">
            Admin Login
          </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
