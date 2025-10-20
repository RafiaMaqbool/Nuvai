import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/topbar/TopBar";
import Navbar from "./components/navbar/Navbar";
import Services from "./components/services/Services";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home"
import About from "./components/about/About";
import Approach from "./components/approach/Approach";
import Contact from "./components/contact/Contact";
import DigitalInfra from "./pages/digital-infra/DigitalInfra"
import IndustrySolutions from "./pages/industry-solutions/Solutions"
import Consulting from "./pages/consulting/Consulting";
const App = () => {
  return (
    <Router>
      <TopBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/approach" element={<Approach />} />
        <Route path="/digital-infra" element={<DigitalInfra />} />
        <Route path="/industry-solution" element={<IndustrySolutions />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
