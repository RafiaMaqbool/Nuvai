import styled from "styled-components";

// Import your local images
import infraImg from "../../assets/infra.jpg";
import industryImg from "../../assets/industry.jpg";
import consultingImg from "../../assets/consulting.jpg";
import aiImg from "../../assets/ai.jpg";

const Container = styled.div`
  margin: 80px auto;
  width: 100%;
  text-align: center;
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
  height: 400px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s ease;

  &:hover {
    transform: rotateY(180deg);
  }
`;

const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  background: ${({ bg }) =>
    `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${bg}) center/cover no-repeat`};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  padding: 20px;
`;

const CardBack = styled(CardFront)`
  background: #fff;
  color: #000;
  transform: rotateY(180deg);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
`;

const Title = styled.h2`
  color: #fff;
  font-size: 22px;
  font-weight: 700;
  text-align: center;
`;

const Description = styled.div`
  color: #444;
  font-size: 16px;
  line-height: 1.5;
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
      </ul>
    ),
    bg: infraImg,
  },
  {
    id: 2,
    title: "Vertical Industry Solutions",
    description: (
      <ul>
        <li><strong>Service Provider and Telco</strong></li>
        <li><strong>Healthcare</strong></li>
        <li><strong>Banking and Fintech</strong></li>
      </ul>
    ),
    bg: industryImg,
  },
  {
    id: 3,
    title: "Consulting Services",
    description: (
      <ul>
        <li><strong>Digital Transformation</strong></li>
        <li><strong>Cloud & Modernization</strong></li>
        <li><strong>Custom Development</strong></li>
        <li><strong>Cyber Security</strong></li>
      </ul>
    ),
    bg: consultingImg,
  },
  {
    id: 4,
    title: "AI, Automation & Digital Videos",
    description: (
      <ul>
        <li><strong>AI-driven Insights</strong></li>
        <li><strong>Business Process Automation</strong></li>
        <li><strong>Digital Video Solutions</strong></li>
      </ul>
    ),
    bg: aiImg,
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
              <CardFront bg={service.bg}>
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
