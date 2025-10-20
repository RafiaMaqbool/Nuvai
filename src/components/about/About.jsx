import styled from 'styled-components';
import businessDeal from '../../assets/business-deal.jpg';

const AboutSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 100px 10%;
    background-color: #EDECEC;
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


const ImageWrapper = styled.div`
  max-width: 400px;
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.31);


  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 992px) {
    margin-top: 40px;
  }
`;

const About = () => {

  return (
    <AboutSection>
      <AboutContent>
        <h2>Our Mission</h2>
        <p>
        With a focus on integrated solutions enabling business outcomes, Nuvai empowers businesses to thrive in today's competitive landscape.        </p>
        <p>
        Our innovative <span style={{ color: '#1B93CA', fontWeight: 700 }}>DPAC</span> (Develop – Partner – Acquire – Consult) framework ensures remarkable growth and success for clients and partners.
      </p>

      </AboutContent>
        <ImageWrapper>
        <img src={businessDeal} alt="Business Deal" />
      </ImageWrapper>
    </AboutSection>
  );
};

export default About;
