import React, { useState } from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  border: 1px solid rgba(75, 30, 133, 0.5);
  border-radius: 1.5em;
  background: linear-gradient(to bottom right, #478FE3, rgba(75, 30, 133, 0.01));    padding: 20px;
    width: 250px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    border-radius: 10px;
    transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
    background: white !important;
  }
`;

const Card = ({ heading, hoverText }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <CardWrapper 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
        >
            {isHovered ? hoverText : heading}
        </CardWrapper>
    );
};

export default Card;
