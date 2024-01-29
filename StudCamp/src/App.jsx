// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import News from "./pages/News/News";
import NotFound from "./pages/NotFound/NotFound";
import Footer from "./components/footer/Footer";
import LoginPage from "./pages/Loginpage/LoginPage";
import TermsAndConditions from "./pages/Terms and Conditions/TermsAndConditions";
import StudentRegi from "./pages/Student/StudentRegi";
import CollegeRegi from "./pages/College/CollegeRegi";
import CollegeLogin from "./pages/College/CollegeLogin";
import AdminDashboard from "./pages/Dashboards/AdminDashboard/AdminDashboard";
import AdminLogin from "./pages/Admin/AdminLogin";
import CollegeDashboard from "./pages/Dashboards/CollegeDashboard/CollegeDashboard";
import { useEffect } from "react";


function App() {
  

  

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
        {/* Corrected element prop for LoginPage */}
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
        <Route path="/student/register" element={<StudentRegi />} />
        <Route path="/college/register" element={<CollegeRegi />} />
        <Route path="/college/login" element={<CollegeLogin />} />

        <Route path="/admin/AdminDashboard" element={<AdminDashboard />} />

        <Route path="/login/AdminLogin" element={<AdminLogin />} />
        {/* <Route path="/login/college" element={<AdminLogin />} /> */}

        <Route path="/college/CollegeDashboard" element={<CollegeDashboard/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
