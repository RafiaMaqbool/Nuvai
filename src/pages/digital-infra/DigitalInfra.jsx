import styled, { keyframes } from "styled-components";
import cloudImg from "../../assets/cloud.jpg";
import network from "../../assets/network.jpg";
import callcenter from "../../assets/callcenter.jpg";
import automation from "../../assets/automation.jpg";
import video from "../../assets/video.jpg";
import security from "../../assets/security.jpg";
import digitalInfra from "../../assets/digital-infra-bg.jpg";

// Animations
const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Section = styled.section`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  align-items: center;
  justify-content: space-between;
  padding: 100px 10%;
  background: ${({ bg }) =>
    bg || "linear-gradient(135deg, #ffffff 0%, #f9fafc 100%)"};
  gap: 60px;
  position: relative;
  overflow: hidden;
  transition: background 0.5s ease;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 10%;
    width: 80%;
    height: 1px;
    background: rgba(0, 0, 0, 0.05);
  }

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    padding: 70px 6%;
  }
`;

const TextContent = styled.div`
  flex: 1;
  max-width: 550px;
  animation: ${fadeInUp} 0.8s ease both;

  h2 {
    font-size: 1.8rem;
    color: #0a3d62;
    margin-bottom: 20px;
    position: relative;
    display: inline-block;
  }

  h2::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 3px;
    background: #1b93ca;
    border-radius: 3px;
  }

  p {
    color: #444;
    line-height: 1.7;
    font-size: 1.05rem;
    margin-bottom: 25px;
  }

  a {
    color: #1b93ca;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      color: #0a3d62;
      border-bottom: 2px solid #1b93ca;
    }
  }
`;
const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeInUp} 0.9s ease both;

  img {
    width: 100%;
    max-width: 520px;
    height: 320px;
    object-fit: cover;
    border-radius: 14px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    transition: transform 0.4s ease, box-shadow 0.4s ease;
  }

  img:hover {
    transform: scale(1.04);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  }
`;

const Hero = styled.section`
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 10%;
  position: relative;
  overflow: hidden;
  color: white;

  background: 
    linear-gradient(rgba(7, 45, 75, 0.75), rgba(7, 45, 75, 0.75)),
    url(${digitalInfra}) 
    center/cover no-repeat;

  h1 {
    font-size: 3.2rem;
    margin-bottom: 15px;
    color: #fff;
  }

  p {
    font-size: 1.2rem;
    max-width: 650px;
    color: #eaeaea;
]  }

`;


const TopStripe = styled.div`
  background: #1b93ca;
  color: white;
  text-align: center;
  padding: 12px 0;
  font-weight: 500;
  letter-spacing: 0.5px;
`;

const DigitalInfra = () => {
  const sections = [
    {
      title: "Cloud & Hybrid Cloud",
      desc: "Scalable public, private, and hybrid cloud platforms designed for flexibility, security, and performance — offering compute, storage, backup, and networking solutions tailored to enterprise needs.",
      img: cloudImg,
      link: "/digital-infra/cloud",
      bg: "#fff",
    },
    {
      title: "OptivE – Intelligent Network Control",
      desc: "Unified visibility, adaptive access, and policy-based network management for hybrid infrastructures, ensuring seamless connectivity across on-prem and cloud environments.",
      img: network,
      link: "/digital-infra/optive",
      bg: "#f9fafb",
      reverse: true,
    },
    {
      title: "NuVoice / CX",
      desc: "Revolutionizing customer experience through AI-powered voice, real-time multilingual interaction, and intelligent IVR — ensuring every call is smarter, faster, and more human.",
      img: callcenter,
      link: "/digital-infra/nuvoice",
      bg: "#fff",
    },
    {
      title: "AI & Automation (AIORC)",
      desc: "Data intelligence and automation frameworks that orchestrate workflows, enhance decision-making, and enable predictive operations through AI, NLP, and ML-driven insights.",
      img: automation,
      link: "/digital-infra/ai-automation",
      bg: "#f9fafb",
      reverse: true,
    },
    {
      title: "Video & OTT (PivotV)",
      desc: "Deliver immersive video, OTT, and VOD experiences with advanced middleware, analytics, billing, and provisioning — powering digital entertainment ecosystems.",
      img: video,
      link: "/digital-infra/video-ott",
      bg: "#fff",
    },
    {
      title: "Cybersecurity (HEPTA)",
      desc: "Comprehensive cybersecurity architecture covering threat detection, compliance, and response — securing enterprise ecosystems with multilayered protection.",
      img: security,
      link: "/digital-infra/cybersecurity",
      bg: "#f9fafb",
      reverse: true,
    },
  ];

  return (
    <>
      <TopStripe>Building the Backbone of Digital Enterprises</TopStripe>
      <Hero>
        <h1>Digital Infrastructure Portfolio</h1>
        <p>
          Empowering organizations with a complete ecosystem of digital
          platforms, cloud-native architectures, and secure, scalable
          solutions.
        </p>
      </Hero>

      {sections.map((sec, i) => (
        <Section key={i} reverse={sec.reverse} bg={sec.bg}>
          <TextContent>
            <h2>{sec.title}</h2>
            <p>{sec.desc}</p>
            <a href={sec.link}>Learn More →</a>
          </TextContent>
          <ImageContainer>
            <img src={sec.img} alt={sec.title} />
          </ImageContainer>
        </Section>
      ))}
    </>
  );
};

export default DigitalInfra;
