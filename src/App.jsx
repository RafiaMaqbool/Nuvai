import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Services from "./components/services/Services";
import Footer from "./components/footer/Footer";
import Products from "./components/products/Products";
import Home from "./pages/home/Home"
import About from "./components/about/About";
import Consulting from "./components/consulting/Consulting";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
