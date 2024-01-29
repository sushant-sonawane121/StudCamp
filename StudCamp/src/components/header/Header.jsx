// components/common/Header/Header.jsx

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomLink from "../Link/Link";

const Header = () => {
  let nevigateTo = useNavigate();
  let adminUser = localStorage.getItem("logedAdminId");
  let collegeUser = localStorage.getItem("CollegeAdminId");
  let uniUser = "";

  if (adminUser) {
    uniUser = adminUser;
  }
  else if(collegeUser){
    uniUser = collegeUser;
  }
  

  const handleLogout = () => {
    uniUser =  localStorage.setItem("logedAdminId", "");
    uniUser = localStorage.setItem("CollegeAdminId", "");
 


    if (uniUser === null) {
      nevigateTo("/");
    } else {
      alert("somethisn went wrong about url redireaction in header");
    }
  };

  return (
    <header className="bg-gray-800 p-4 sticky top-0">
      <nav className="container mx-auto flex items-center justify-between">
        <CustomLink text={"StudCamp"} to={"/"} color={"text-teal-500"} font={"text-xl"}/>

        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-gray-300">
            About
          </Link>
          <Link to="/contact" className="text-white hover:text-gray-300">
            Contact
          </Link>
          <Link to="/news" className="text-white hover:text-gray-300">
            News
          </Link>
          {adminUser ? (
            <CustomLink
              text={"Dashboard"}
              to={"/admin/AdminDashboard"}
              color="text-red-500"
            />
          ) : (
            ""
          )}
        </div>

        <div className="md:flex items-center space-x-4">
          {/* Login Button */}
          {!uniUser? (
            <Link to="/loginPage" className="text-white hover:text-gray-300">
              Login
            </Link>
          ) : (
            <>
              <button
                onClick={handleLogout}
                className="text-white hover:text-gray-300"
              >
                Logout
              </button>
              {/* <button className="text-black bg-teal-800 py-2 hover:text-gray-300" >
              Admin
            </button> */}
            </>
          )}

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
