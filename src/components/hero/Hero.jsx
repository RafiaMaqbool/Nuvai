import React from 'react'
import styled from "styled-components";
import heroImage from '../../assets/hero-bg-2.jpg';
import arrow from '../../assets/dark-arrow.png';

const HeroContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${heroImage});
  background-size: cover;
  background-position: center;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroText = styled.div`
  text-align: center;
  max-width: 800px;

  h1 {
    font-size: 60px;
    font-weight: 600;
  }

  @keyframes colorShift {
    0% { color: #4a90e2; }
    25% { color: #007bff; }
    50% { color: #0056b3; }
    75% { color: #ff5a5f; }
    100% { color: #4a90e2; }
  }

  span {
    font-weight: 700;
    animation: colorShift 3s infinite linear;
  }

  p {
    max-width: 700px;
    margin: 10px auto 20px;
    line-height: 1.4;
  }
`;

const Hero = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const navbarHeight = document.querySelector("nav")?.offsetHeight || 0;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
  
      window.scrollTo({
        top: sectionTop - navbarHeight, // Offset by navbar height
        behavior: "smooth",
      });
    }
  }; 
  return (
    <HeroContainer className='container'>
        <HeroText>
        <h1>
          Welcome to Nuvai, your trusted partner in{" "}
          <span>digital transformation</span>
        </h1>
         <p>We deliver AI, automation, digital infrastructure, and cybersecurity solutions to boost efficiency, security, and innovation—empowering businesses with tailored strategies for growth and success.
         </p>
         <button className="btn" onClick={() => scrollToSection("services")}>Explore More <img src={arrow} alt="arrow" /></button>
        </HeroText>
    </HeroContainer>
  )
}

export default Hero;
