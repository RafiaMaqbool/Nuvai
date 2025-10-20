import React from "react";
import styled from "styled-components";

const TopBarContainer = styled.div`
  width: 100%;
  background: #f2f5f7;
  color: #000;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  padding: 5px 7%;
`;

const LeftText = styled.div`
  font-weight: 500;
`;

const RightContainer = styled.div`
  span {
    margin-left: 15px;
    cursor: pointer;
  }
`;

const TopBar = () => {
  return (
    <TopBarContainer>
      <LeftText>For inquiries: info@nuvai.net</LeftText>
      <RightContainer>
      </RightContainer>
    </TopBarContainer>
  );
};

export default TopBar;
