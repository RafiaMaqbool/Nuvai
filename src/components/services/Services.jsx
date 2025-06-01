import React from "react";
import styled from "styled-components";
import { FaShieldAlt, FaIndustry, FaHandsHelping } from "react-icons/fa";

const Container = styled.div`
  margin: 80px auto;
  width: 100%;
  text-align: center;
      // background-color: #EDECEC; /* Light gray background */
  padding-bottom: 50px;

`;
const P = styled.p`
    font-size: 18px;
    color: #444;
    line-height: 1.6;
    margin-top: 16px;
        margin-bottom: 30px;

`;
const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const CardWrapper = styled.div`
  perspective: 1000px;
  width: 300px;
`;

const CardInner = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;

  &:hover {
    transform: rotateY(180deg);
  }
`;

const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  background: #fff;
  padding: 40px;
`;

const CardBack = styled(CardFront)`
  transform: rotateY(180deg);
`;

const IconWrapper = styled.div`
  font-size: 50px;
  color: #1b93ca;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  color: #333;
  margin-bottom: 10px;
`;

const Description = styled.p`
  color: #666;
  max-width: 500px;
  text-align: left;
`;

const H2 = styled.h2`
  font-size: 40px;
  color: #000f38;
  margin: 10px auto;
  max-width: 800px;
  text-align: center;
  display: block;
`;

const services = [
  {
    id: 1,
    title: "Digital Infra and Cyber Security",
    description: (
      <ul>
        <li><strong>Cyber Security</strong></li>
        <li><strong>Application Oriented Infrastructure</strong></li>
        <li><strong>Cloud</strong></li>
        <li><strong>Digital Video</strong></li>
        <li><strong>AI & Automation</strong></li>
      </ul>
    ),
    icon: <FaShieldAlt />,
  },
  {
    id: 2,
    title: "Vertical Industry Solutions",
    description: (
      <ul>
        <li><strong>Service Provider and Telco</strong> </li>
        <li><strong>Healthcare</strong></li>
        <li><strong>Banking and Fintech</strong></li>
      </ul>
    ),
    icon: <FaIndustry />,
  },
  {
    id: 3,
    title: "Consulting Services",
    description: (
      <ul>
        <li><strong>Digital Transformation</strong> </li>
        <li><strong>Cloud & Modernization</strong></li>
        <li><strong>Custom Development</strong></li>
        <li><strong>Cyber Security</strong></li>
      </ul>
    ),
    icon: <FaHandsHelping />,
  },
];

const Services = () => {
  return (
    <Container>
        <H2>Empowering businesses to thrive in today's competitive world.</H2>
        <P>Discover the power of Nuvai's innovative solutions and consulting services.</P>
      <CardsContainer>
        {services.map((service) => (
          <CardWrapper key={service.id}>
            <CardInner>
              <CardFront>
                <IconWrapper>{service.icon}</IconWrapper>
                <Title>{service.title}</Title>
              </CardFront>
              <CardBack>
                <Description>{service.description}</Description>
              </CardBack>
            </CardInner>
          </CardWrapper>
        ))}
      </CardsContainer>
    </Container>
  );
};

export default Services;