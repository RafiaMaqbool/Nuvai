import styled, { keyframes } from "styled-components";
import consulting from "../../assets/consulting-bg.jpg";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(25px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Page = styled.div`
  font-family: "Poppins", sans-serif;
  color: #072d4b;
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
  position: relative;
  overflow: hidden;
  color: white;

  background: 
    linear-gradient(rgba(7, 45, 75, 0.75), rgba(7, 45, 75, 0.75)),
    url(${consulting}) center/cover no-repeat;

  h1 {
    font-size: 3.2rem;
    margin-bottom: 15px;
    color: #fff;
    animation: ${fadeInUp} 0.8s ease both;
  }

  p {
    font-size: 1.2rem;
    max-width: 650px;
    color: #eaeaea;
    animation: ${fadeInUp} 1s ease both;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.4rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

const Section = styled.section`
  padding: 80px 10%;
  position: relative;

  &.alt {
    background: #f8f9fa;
  }
    &.alt-second {
    background: #c0e2eeff;
  }
 &.alt-third {
    background: #072D4B;
  }

`;

const SectionHeader = styled.h2`
  font-size: 2.4rem;
  margin-bottom: 1rem;
  color: #072d4b;
  text-align: center;
`;

const PillarsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 30px;
  margin: 40px auto 0;
  max-width: 900px;
  justify-content: center;
  justify-items: center;
`;

const PillarCard = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  padding: 30px;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
  }

  h3 {
    font-size: 1.5rem;
    color: #1b93ca;
    margin-bottom: 0.8rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: #4a5568;
  }
`;
const AdvisoryList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 40px auto 0;
  max-width: 700px;
  text-align: left;
  position: relative;
  li {
    font-size: 1.1rem;
    color: #072d4b;
    font-weight: 500;
    padding: 16px 0;
    border-bottom: 1px solid rgba(7, 45, 75, 0.1);
    position: relative;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: all 0.3s ease;
    cursor: default;

    &:hover {
      color: #1b93ca;
      transform: translateX(6px);
    }

    &::before {
      content: "›";
      color: #1b93ca;
      font-size: 1.2rem;
      transition: transform 0.3s ease;
    }

    &:hover::before {
      transform: translateX(4px);
    }

    &:last-child {
      border-bottom: none;
    }
  }

  @media (max-width: 768px) {
    li {
      font-size: 1rem;
      padding: 12px 0;
    }
}
}`

const Differentiators = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  margin-top: 60px;
  .diff {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: white;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 12px 28px rgba(27, 147, 202, 0.2);
    }

    .icon {
      width: 60px;
      height: 60px;
      background: #1b93ca;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 1.5rem;
      margin-bottom: 15px;
    }

    p {
      font-size: 0.95rem;
      color: #072d4b;
      font-weight: 500;
      padding: 0 10px;
    }
  }
`;
const WorkFlow = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: center;
  position: relative;
`;

const Step = styled.div`
  position: relative;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  padding: 30px 40px;
  max-width: 650px;
  width: 100%;
  animation: ${fadeInUp} 0.6s ease both;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
  }

  /* Step Number Badge */
  &::before {
    content: attr(data-step);
    position: absolute;
    left: -20px;
    top: 50%;
    transform: translateY(-50%);
    background: #1b93ca;
    color: white;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 1.1rem;
    box-shadow: 0 4px 10px rgba(27, 147, 202, 0.3);
  }

  h4 {
    font-size: 1.3rem;
    color: #1b93ca;
    margin-bottom: 8px;
  }

  p {
    color: #4a5568;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    &::before {
      left: -10px;
    }
  }
`;

const Consulting = () => {
  const pillars = [
    { title: "Digital Transformation", desc: "We guide organizations in evolving digitally — from strategy, replatforming, to cloud migration and business model reinvention." },
    { title: "Hybrid & Multi-Cloud", desc: "Architecting and managing cloud ecosystems across private, public, and edge infrastructures for resilience and agility." },
    { title: "Data & AI", desc: "Turning data into insights — deploying analytics, ML, and intelligence for faster decision-making and automation." },
    { title: "Legacy Modernization", desc: "Modernize aging systems — refactoring, rewriting or wrapping to meet present day scale, security, and flexibility needs." },
    { title: "Custom Development", desc: "End-to-end software engineering, integration, microservices, APIs — tailored to your business vision and scale." },
    { title: "Cybersecurity", desc: "Security by design — threat assessments, architecture, compliance, monitoring, and response frameworks." }
  ];

  const advisory = [
    "IP, Cyberlaw, Privacy & Regulatory",
    "Market Entry / GTM Advisory",
    "Channel & Partnership Strategy",
    "Compliance Roadmapping"
  ];

  const methods = [
    { title: "Discovery & Audit", desc: "Deep assessment of your current systems, processes, and tech debt to identify gaps and opportunities." },
    { title: "Strategy & Roadmap", desc: "Craft a phased, measurable plan with technology, people, and operations aligned to your goals." },
    { title: "Execute & Integrate", desc: "Implement, test, integrate, and deliver services with cross-functional collaboration." },
    { title: "Operate & Optimize", desc: "Support, monitor, iterate, and scale the solutions — continuously improving." }
  ];

  const diffs = [
    { icon: "⚡", text: "Agile & adaptable engagement models" },
    { icon: "📊", text: "Data-driven decision support" },
    { icon: "🔐", text: "Security & compliance at core" },
    { icon: "🤝", text: "Long-term partnership focus" }
  ];

  return (
    <Page>
      <Hero>
        <h1>Technology Consulting</h1>
        <p>Partner with us to bring your vision to life and stay ahead in the competitive market </p>
      </Hero>

      <Section className="alt-second">
        <SectionHeader> Consulting Services We Offer</SectionHeader>
        <PillarsGrid>
          {pillars.map((p, i) => (
            <PillarCard key={i}>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </PillarCard>
          ))}
        </PillarsGrid>
      </Section>

      <Section className="alt">
        <SectionHeader>Specialized Advisory Domains</SectionHeader>
        <AdvisoryList>
          {advisory.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </AdvisoryList>
      </Section>

     <Section>
        <SectionHeader>How We Work</SectionHeader>
        <WorkFlow>
            {methods.map((m, i) => (
            <Step key={i} data-step={i + 1}>
                <h4>{m.title}</h4>
                <p>{m.desc}</p>
            </Step>
            ))}
        </WorkFlow>
        </Section>

      <Section className="alt">
        <SectionHeader>Why Choose Nuvai</SectionHeader>
        <Differentiators>
          {diffs.map((d, i) => (
            <div className="diff" key={i}>
              <div className="icon">{d.icon}</div>
              <p>{d.text}</p>
            </div>
          ))}
        </Differentiators>
      </Section>

    </Page>
  );
};

export default Consulting;
