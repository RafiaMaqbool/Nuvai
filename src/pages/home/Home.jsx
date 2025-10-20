import Hero from "../../components/hero/Hero";
import Services from "../../components/services/Services";
import About from "../../components/about/About";
import Approach from "../../components/approach/Approach";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Contact = styled.section`
  background: #1b93ca;
  text-align: center;
  padding: 80px 10%;
  color: white;

  h2 {
    font-size: 2.4rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 25px;
  }

  a {
    text-decoration: none;
  }

  button {
    background: #fff;
    color: #1b93ca;
    border: none;
    padding: 12px 28px;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      transform: translateY(-2px);
    }
  }
`;

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
      <div id="approach">
        <Approach />
      </div>

      <Contact>
        <h2>Ready to transform your industry?</h2>
        <p>
          Connect with our team to explore tailored digital transformation
          solutions.
        </p>
        <Link to="/contact">
          <button>Contact Us</button>
        </Link>
      </Contact>
    </div>
  );
};

export default Home;
