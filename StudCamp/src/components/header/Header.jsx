// components/common/Header/Header.jsx

import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  let login = false;

  return (
    <header className="bg-gray-800 p-4">
      <nav className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-white text-xl font-bold">
          StudCamp
        </Link>

        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-gray-300">
            About
          </Link>
          <Link to="/services" className="text-white hover:text-gray-300">
            Services
          </Link>
          <Link to="/contact" className="text-white hover:text-gray-300">
            Contact
          </Link>
        </div>

        <div className="md:flex items-center space-x-4">
          {/* Login Button */}
          <Link to="/loginPage"  className="text-white hover:text-gray-300">Login</Link>

          {/* Mobile menu button */}
          <button
            className="text-white focus:outline-none md:hidden"
            onClick={() => console.log("Toggle mobile menu")}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>
    // <header className="header">
    //   <div className="logo">StudCamp</div>
    //   <nav className="nav">
    //     <Link to="/" className="nav-link">
    //       Home
    //     </Link>
    //     <Link to="/about" className="nav-link">
    //       About
    //     </Link>
    //     <Link to="/news" className="nav-link">
    //       News
    //     </Link>
    //     <Link to="/contact" className="nav-link">
    //       Contact
    //     </Link>
    //   </nav>
    //   <div className="login-container">

    //     {!login ? (
    //       <Link to="/login" className="login-button">
    //         Login
    //       </Link>
    //     ) : (
    //         <FaUserCircle className="user-circle"/>
    //     )}

    //   </div>
    // </header>
  );
};

export default Header;
