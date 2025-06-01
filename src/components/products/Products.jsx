import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 80px auto;
  width: 80%;
  display: flex;
  
`;

const Sidebar = styled.div`
  width: 250px;
  text-align: left;
    padding: 20px;

`;

const Tab = styled.div`
  padding: 15px;
  cursor: pointer;
  background: ${({ active }) => (active ? "#1B93CA" : "#f4f4f4")};
  color: ${({ active }) => (active ? "#fff" : "#000")};
  margin-bottom: 5px;
  border-radius: 5px;
  transition: background 0.3s;
  &:hover {
    background: #1B93CA;
    color: #fff;
  }
`;

const Content = styled.div`
  flex: 1;
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const H2 = styled.h2`
  font-size: 40px;
  color: #000F38;
  margin: 10px 0;
  max-width: 800px;
  text-align: center;
`;

const HeadingContainer = styled.div`
  margin: 80px auto;
  width: 80%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center; /* Ensures all child elements are centered */
`;


const H3 = styled.h3`
  font-weight: 600;
  font-size: 20px;
  color: #212ea0;
  text-align: center;
`;

const Description = styled.p`
  color: #666;
  max-width: 600px;
  margin: 20px auto;
`;

const categories = [
  { id: 1, title: "Cyber Security", name: "Nausec - Integrated Security Platform", content: "An integrated, AI-driven cyber security solution with seven distinct modules for robust, automated protection. Centralized, user-friendly interface ensures seamless integration and efficient incident response.Enhanced threat detection accuracy, improved compliance, and increased security analyst productivity." },
  { id: 2, title: "Application Oriented Infrastructure", name: "Infrai", content: ("AI enabled advanced application classification, control, and prioritization with cyber threat analytics and DDoS prevention. High Performance: Processes up to 100G traffic in a single unit with massive scalability, improving resource utilization and security.Use Cases: Real-time application visibility, traffic analysis, dynamic policy control, QoS optimization, and comprehensive dashboards.") },
  { id: 3, title: "Cloud", name: "Cloudnau", content: "(Manage public, private, and hybrid cloud environments with a robust, high-performance solution. Intuitive front-end portal with self-service capabilities and multi-tenancy support. Scalable, flexible, secure, and cost-efficient with diverse services like compute, storage, networking, and backup.)" },
  { id: 4, title: "Digital Video", name: "PivotV ", content: "PivotV by nuvai enables service providers to seamlessly roll out revenue generating Video services, including IPTV.The platform integrates Live TV, VOD, and OTT content, managed via an intuitive middleware, provisioning and billing system.PivotV offers flexibility, scalability, and robust security, ensuring an unparalleled viewing experience." },
  { id: 5, title: "Ai & Automation", name: "AIORC", content: "Cutting-edge AI and automation solutions to enhance productivity, streamline operations, and deliver actionable insights. Our expertise spans machine learning, natural language processing, computer vision, robotic process automation, and intelligent automation, ensuring transformative growth for businesses." },
  { id: 6, title: "Service Provider and Telco", name: "Nexa", content: "Cutting-edge AI and automation solutions to enhance productivity, streamline operations, and deliver actionable insights. Our expertise spans machine learning, natural language processing, computer vision, robotic process automation, and intelligent automation, ensuring transformative growth for businesses." },
  { id: 7, title: "HealthCare ", name: "Carenau", content: "Cutting-edge AI and automation solutions to enhance productivity, streamline operations, and deliver actionable insights. Our expertise spans machine learning, natural language processing, computer vision, robotic process automation, and intelligent automation, ensuring transformative growth for businesses." },
  { id: 8, title: "Banking and Fintech ", name: "Naufin", content: "Cutting-edge AI and automation solutions to enhance productivity, streamline operations, and deliver actionable insights. Our expertise spans machine learning, natural language processing, computer vision, robotic process automation, and intelligent automation, ensuring transformative growth for businesses." }


];

const P = styled.p`
    font-size: 18px;
    color: #444;
    line-height: 1.6;
    margin-top: 16px;
`;


const Products = () => {
    const [activeTab, setActiveTab] = useState(categories[0].id);
  
    return (
      <>
      <HeadingContainer>
        <H2>Industry Expertise</H2> {/* Move the heading outside the container */}
        <P>We drive transformative growth and innovation across various sectors.</P>
        </HeadingContainer>
        <Container>
          <Sidebar>
            {categories.map((category) => (
              <Tab 
                key={category.id} 
                active={activeTab === category.id} 
                onClick={() => setActiveTab(category.id)}
              >
                {category.title}
              </Tab>
            ))}
          </Sidebar>
          <Content>
            <H3>{categories.find((cat) => cat.id === activeTab)?.name}</H3>
            <Description>{categories.find((cat) => cat.id === activeTab)?.content}</Description>
          </Content>
        </Container>
      </>
    );
  };
  

export default Products;
