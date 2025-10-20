import styled from "styled-components";
import heroImage from '../../assets/hero-bg.jpg';
import arrow from '../../assets/dark-arrow.png';

const HeroContainer = styled.div`
  width: 100%;
  min-height: 90vh;
  background: url(${heroImage}) no-repeat center center;
  background-size: cover;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10%;
  position: relative;
`;

const HeroText = styled.div`
  text-align: left;
  max-width: 750px;
  transform: translateX(30%);

  h1 {
    font-size: 60px;
    font-weight: 600;
    line-height: 1.2;
  }

  @keyframes colorShift {
    0% { color: #4a90e2; }
    25% { color: #007bff; }
    50% { color: #0056b3; }
    75% { color: #1B93CA; }
    100% { color: #4a90e2; }
  }

  span {
    font-weight: 700;
    animation: colorShift 4s infinite linear;
  }

  p {
    margin: 20px 0 30px;
    line-height: 1.6;
    color: #e5e5e5;
  }

  .btn {
    background: #FFF;
    color: #212121;
    padding: 14px 25px;
    font-size: 16px;
    border-radius: 30px;
    border: 0;
    outline: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }

  .btn:hover {
    background: #1A93C9;
    color: #FFF;
    transform: translateY(-2px);
  }

  .btn img {
    width: 20px;
    margin-left: 10px;
  }

  @media (max-width: 768px) {
    transform: none;
    text-align: center;
  }
`;

const Hero = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const navbarHeight = document.querySelector("nav")?.offsetHeight || 0;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: sectionTop - navbarHeight,
        behavior: "smooth",
      });
    }
  }; 

  return (
    <HeroContainer>
      <HeroText>
        <h1>
          Welcome to Nuvai, your trusted partner in{" "}
          <span>digital transformation</span>
        </h1>
        <p>
          We deliver AI, automation, digital infrastructure, and cybersecurity
          solutions to boost efficiency, security, and innovation—empowering
          businesses with tailored strategies for growth and success.
        </p>
        <button className="btn" onClick={() => scrollToSection("services")}>
          Explore More <img src={arrow} alt="arrow" />
        </button>
      </HeroText>
    </HeroContainer>
  )
}

export default Hero;
