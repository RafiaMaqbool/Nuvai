import Hero from "../../components/hero/Hero"
import Services from "../../components/services/Services";
import Products from "../../components/products/Products";
import About from "../../components/about/About";
import Consulting from "../../components/consulting/Consulting";
import Contact from "../../components/contact/Contact";
const Home = () => {
    return (
      <div>
        <div id="hero">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="services">
          <Services />
        </div>        
        <div id="products">
          <Products />
        </div>
        <div id="consulting">
          <Consulting />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    );
  };
  
  export default Home;
  