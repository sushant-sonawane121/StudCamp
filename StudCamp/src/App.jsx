import React from "react";
import { Routes, Route } from "react-router-dom"; // Correct import statement
import Header from "./components/header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import News from "./pages/News/News";
import NotFound from "./pages/NotFound/NotFound";
import Footer from "./components/footer/Footer";
import LoginPage from "./pages/Loginpage/LoginPage";

function App() {
  
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
        <Route path="/loginPage" element={<LoginPage/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
