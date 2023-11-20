import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Navbar from "./Component/Navbar";
import HomesPage from "./Pages/HomesPage";
import AboutPage from "./Pages/AboutPage";
import ContactUsPage from "./Pages/ContactUsPage";
import ServicesPage from "./Pages/ServicesPage";
import SignInPage from "./Pages/SignInPage";
import SignUpPage from "./Pages/SignUpPage";
import Footer from "./Component/Footer";
import ScrollToTop from "./ScrollToTop/ScrollToTop";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }
  return (
    <>
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<HomePage toggle={toggle} isOpen={isOpen} />}
          />
          <Route path="/homes" element={<HomesPage />} />
          <Route path="/Services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contactus" element={<ContactUsPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
    </>
  );
}

export default App;
