import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo-transparent-full.png";

const NavbarContainer = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 10px 7%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Logo = styled.img`
  height: 50px;
  width: auto;
  object-fit: contain;
  cursor: pointer;
`;

const NavList = styled.ul`
  flex: 1;
  list-style: none;
  text-align: center;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  display: inline-block;
  margin: 10px 20px;
  font-size: 15px;
  cursor: pointer;
  color: ${({ active }) => (active ? "#1B93CA" : "#0f172a")};
  font-weight: 500;
  position: relative;
  transition: color 0.3s ease;

  &:hover {
    color: #1B93CA;
  }

  &::after {
    content: '';
    display: block;
    width: ${({ active }) => (active ? "100%" : "0%")};
    height: 2px;
    background: #1B93CA;
    transition: width 0.3s;
    margin: 0 auto;
  }

  &:hover::after {
    width: 100%;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const NavBar = () => {
  const location = useLocation();

  return (
    <NavbarContainer>
      <Logo src={logo} alt="Nuvai Logo" />
      <NavList>
        <StyledLink to="/">
          <NavItem active={location.pathname === "/"}>Home</NavItem>
        </StyledLink>
        <StyledLink to="/digital-infra">
          <NavItem active={location.pathname === "/digital-infra"}>Digital Infra</NavItem>
        </StyledLink>
        <StyledLink to="/industry-solution">
          <NavItem active={location.pathname === "/industry-solution"}>Industry Solutions</NavItem>
        </StyledLink>
        <StyledLink to="/consulting">
          <NavItem active={location.pathname === "/consulting"}>Consulting</NavItem>
        </StyledLink>
        <StyledLink to="/contact">
          <NavItem active={location.pathname === "/contact"}>Contact Us</NavItem>
        </StyledLink>
      </NavList>
    </NavbarContainer>
  );
};

export default NavBar;
