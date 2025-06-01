import React from 'react';
import styled from "styled-components";
import Card from '../card-component/Card'
const Container = styled.div`
    margin: 50px auto; /* Reduced from 100px auto */
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    flex-direction: column;
    text-align: center;
    width: 100vw; /* Full page width */
`;
const H3 = styled.h3`
    font-weight: 600;
    font-size: 20px;
    color: #212eA0;
    text-align: center;
`;

const H2 = styled.h2`
    font-size: 40px;
    color: #000F38;
    margin: 10px 0;
    max-width: 800px;
    text-align: center;
`;

const P = styled.p`
    font-size: 18px;
    color: #444;
    line-height: 1.6;
    margin-top: 16px;
`;


const CardContainerBG = styled.div`
    width: 100vw; /* Full page width */
    display: flex;
    justify-content: center; /* Center the cards */
    padding: 50px 0; /* Space around the cards */
`;
const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap; /* Allow wrapping to the next line */
    justify-content: center;
    align-items: center;
    gap: 2rem; /* Adjust spacing */
    width: 90%;
    max-width: 1200px;
`;

const Consulting = () => {
  return (
    <Container>
        {/* <H3>About Nuvai</H3> */}
        <H2>Consulting Services</H2>
        <P>Our team of experienced developers and engineers is dedicated to transforming your ideas into innovative, high-quality applications.<br/></P>
        <CardContainerBG>
        <CardContainer>
            <Card heading="Digital Transformation" hoverText="Modernization of Legacy Systems" />
            <Card heading="Cloud & Modernization" hoverText="Migration of Applications and Data to Cloud" />
            <Card heading="Custom Development" hoverText="Personalized and Intuitive Digital Experiences" />
            <Card heading="Cyber Security" hoverText="Protecting Your Digital Assets" />
            <Card heading="Data Analytics and AI" hoverText="Harness power of data with advanced analytics and AI solutions" />
            <Card heading="Automation and Workflow Optimization" hoverText=" Streamline Operations with our Automation Solutions" />
            <Card heading="IoT Integration" hoverText="Connect and Manage IoT Devices for Smarter Operations" />
            <Card heading="Agile and DevOps Practices" hoverText="Accelerate development cycles, improve collaboration, and deliver high-quality software." />
        </CardContainer>
        

        </CardContainerBG>
    </Container>
  );
};

export default Consulting;