import styled, { keyframes } from "styled-components";
import telco from "../../assets/telco.jpg";
import healthcare from "../../assets/healthcare.jpg";
import fintech from "../../assets/fintech.jpg";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Page = styled.div`
  font-family: "Poppins", sans-serif;
  color: #fff;
  overflow-x: hidden;
`;

const Hero = styled.section`
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 10%;

  h1 {
    font-size: 3.2rem;
    margin-bottom: 15px;
    color: #072d4b
  }

  p {
    font-size: 1.2rem;
    max-width: 650px;
    color: #555;
  }
`;

const Section = styled.section`
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: ${({ bgImage }) =>
    bgImage
      ? `url(${bgImage}) center/cover no-repeat`
      : `linear-gradient(135deg, #3a3a3a 0%, #505050 50%, #666 100%)`};
  color: #fff;
  overflow: hidden;

  &:after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.65));
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 100px 0;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  padding: 0 20px;
  animation: ${fadeInUp} 0.8s ease both;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.05rem;
    line-height: 1.7;
    color: #e7eef5;
    margin-bottom: 25px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0 auto 30px;
    display: inline-block;
    text-align: left;

    li {
      margin: 8px 0;
      font-size: 1rem;
      &:before {
        content: "•";
        color: #1b93ca;
        margin-right: 10px;
      }
    }
  }

  a {
    display: inline-block;
    color: #fff;
    background: #1b93ca;
    padding: 10px 24px;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 600;
    transition: 0.3s;

    &:hover {
      background: #16729a;
      transform: translateY(-3px);
    }
  }
`;

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

const IndustrySolutions = () => {
  const sections = [
    {
      title: "SP & Telco (NEXA)",
      desc: "Empowering Service Providers with our NEXA Digital Transformation Stack — integrating CRM, Billing, OSS, and Network Automation to accelerate growth and improve CX.",
      features: [
        "Unified CRM and Billing",
        "Network Automation and AI-based Assurance",
        "Advanced Analytics and Reporting",
        "Service Provisioning and Fulfillment",
      ],
      image: telco,
    },
    {
      title: "Healthcare (CresCare)",
      desc: "Transforming healthcare delivery with comprehensive HMIS and EHR solutions that connect doctors, patients, labs, and pharmacies for smarter, faster care.",
      features: [
        "OPD & IPD Management",
        "Laboratory & Pharmacy Integration",
        "Remote Healthcare Modules",
        "Compliance and Data Security",
      ],
        image: healthcare,
    },
    {
      title: "Fintech (NauFin)",
      desc: "Delivering secure digital banking, payment gateways, and analytics for a frictionless financial experience that empowers both institutions and customers.",
      features: [
        "Digital Banking Platform",
        "Fraud Detection & Compliance",
        "Real-time Payment Processing",
        "Customer 360 & Insights",
      ],
      image: fintech,
    },
  ];

  return (
    <Page>
      <Hero>
        <h1>Vertical Industry Solutions</h1>
        <p>
          Purpose-built digital transformation platforms designed to meet the
          evolving needs of every industry.
        </p>
      </Hero>

      {sections.map((sec, i) => (
        <Section key={i} bgImage={sec.image}>
          <Content>
            <h2>{sec.title}</h2>
            <p>{sec.desc}</p>
            <ul>
              {sec.features.map((f, idx) => (
                <li key={idx}>{f}</li>
              ))}
            </ul>
            <a href="#">Learn More →</a>
          </Content>
        </Section>
      ))}

      <Contact>
        <h2>Ready to transform your industry?</h2>
        <p>
          Connect with our team to explore tailored digital transformation
          solutions.
        </p>
        <button>Contact Us</button>
      </Contact>
    </Page>
  );
};

export default IndustrySolutions;
