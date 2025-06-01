import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 100px 10%;
    background-color: #EDECEC; /* Light gray background */
  position: relative;

  @media (max-width: 992px) {
    flex-direction: column;
    text-align: center;
    padding: 60px 5%;
  }
`;

const AboutContent = styled.div`
  max-width: 600px;

  h2 {
    font-size: 38px;
    font-weight: 700;
    color: #1B93CA;
    margin-bottom: 12px;
  }

  p {
    font-size: 18px;
    color: #444;
    line-height: 1.6;
    margin-top: 16px;
  }
`;

const HighlightText = styled.div`
  font-size: 42px;
  font-weight: 700;
  background: linear-gradient(90deg, #072d4b, #1B93CA);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 992px) {
    font-size: 32px;
    margin-bottom: 20px;
  }
`;

const CallToAction = styled.div`
  text-align: center;
  background: #072d4b;
  color: white;
  padding: 50px;
  border-radius: 12px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  max-width: 400px;

  h3 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  button {
    margin-top: 20px;
    background: #1B93CA;
    color: white;
    border: none;
    padding: 12px 24px;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    border-radius: 8px;
    transition: 0.3s ease-in-out;
  }

  button:hover {
    background: #9CCADB;
  }
`;

const About = () => {
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
    <AboutSection>
      <AboutContent>
        <h2>Innovation That Drives the Future</h2>
        {/* <HighlightText>Empower businesses to thrive in competitive landscape.</HighlightText> */}
        <p>
        We offer cutting-edge solutions designed to elevate efficiency, security, and innovation across diverse industries.
        </p>
        <p>
        Our tailored industry solutions and expert consulting services ensure remarkable growth and success for your organization.

        </p>
      </AboutContent>

      <CallToAction>
        <h3>Ready to Build Something Revolutionary?</h3>
        <p>Join forces with us and turn bold ideas into reality.</p>
        <button onClick={() => scrollToSection("contact")}>Let’s Talk</button>
      </CallToAction>
    </AboutSection>
  );
};

export default About;
