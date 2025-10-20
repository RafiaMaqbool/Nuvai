import styled from "styled-components";
import { FaLaptopCode, FaHandshake, FaLightbulb, FaUserTie } from "react-icons/fa";

const ApproachSection = styled.section`
  background: #072D4B;
  padding: 100px 10%;
  text-align: center;
  position: relative;
`;

const Title = styled.h2`
  font-size: 42px;
  font-weight: 700;
  color: #e5f1fbff;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  max-width: 800px;
  margin: 0 auto 80px;
  font-size: 18px;
  color: #b9e1ffff;
  line-height: 1.6;
`;

const StepsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 60px;
  position: relative;
  padding: 40px 0;
`;

const CardWrapper = styled.div`
  perspective: 1000px;
  z-index: 2;
  position: relative;
`;

const StepNumber = styled.div`
  position: absolute;
  bottom: -55px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 30px;
  font-weight: 700;
  color: #1b93ca;
`;

const StepCard = styled.div`
  width: 230px;
  height: 230px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.8s;
  cursor: pointer;

  &:hover {
    transform: rotateY(180deg);
  }
`;

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  backface-visibility: hidden;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  transition: all 0.3s ease;
`;

const Front = styled(CardFace)`
  color: #072d4b;
`;

const Back = styled(CardFace)`
  background: #1b93ca;
  color: white;
  transform: rotateY(180deg);
  padding: 25px;
`;

const IconWrapper = styled.div`
  font-size: 48px;
  color: #1b93ca;
  margin-bottom: 15px;
`;

const StepTitle = styled.h3`
  font-size: 20px;
  color: #072d4b;
  font-weight: 700;
`;

const BackTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: white;
  margin-bottom: 10px;
`;

const StepDesc = styled.p`
  font-size: 14px;
  color: white;
  line-height: 1.5;
  text-align: center;
`;

const Approach = () => {
  const steps = [
    {
      title: "Develop",
      desc: "Fostering innovation by creating platform solutions and enhancing systems.",
      icon: <FaLaptopCode />,
    },
    {
      title: "Partner",
      desc: "Building strategic alliances to leverage expertise and resources for growth.",
      icon: <FaHandshake />,
    },
    {
      title: "Acquire",
      desc: "Adopting or acquiring cutting-edge technologies to stay competitive.",
      icon: <FaLightbulb />,
    },
    {
      title: "Consult",
      desc: "Providing expert guidance to identify gaps and implement effective strategies.",
      icon: <FaUserTie />,
    },
  ];

  return (
    <ApproachSection>
      <Title>Our Approach</Title>
      <Subtitle>
        Together, these components form a cohesive roadmap for organizations to
        innovate, collaborate, and evolve in an increasingly digital world.
      </Subtitle>

      <StepsContainer>
        {steps.map((step, index) => (
          <CardWrapper key={index}>
            <StepCard>
              <Front>
                <IconWrapper>{step.icon}</IconWrapper>
                <StepTitle>{step.title}</StepTitle>
              </Front>
              <Back>
                <BackTitle>{step.title}</BackTitle>
                <StepDesc>{step.desc}</StepDesc>
              </Back>
            </StepCard>
            <StepNumber>{index + 1}</StepNumber>
          </CardWrapper>
        ))}
      </StepsContainer>
    </ApproachSection>
  );
};

export default Approach;
