import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Import useLocation
import styled from "styled-components";
import logo from "../../assets/logo-transparent-full.png";

const Nav = styled.nav`
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  color: #fff;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  z-index: 10;
  padding-left: 10%;
  padding-right: 10%;
  transition: background-color 0.3s ease-in-out;
  background-color: ${(props) =>
    props.isTransparent ? "transparent" : "#1a1a2e"}; 
`;

const Logo = styled.img`
  height: 50px;
  cursor: pointer;
`;

const NavItem = styled.li`
  display: inline-block;
  color: white;
  font-size: 16px;
  cursor: pointer;
  list-style: none;
  margin: 5px 20px;
  &:hover {
    color: #1A93C9;
  }
`;

const Navbar = () => {
  const [isTransparent, setIsTransparent] = useState(true);
  const location = useLocation(); // Get the current path

  useEffect(() => {
    const handleScroll = () => {
      setIsTransparent(location.pathname === "/" && window.scrollY < 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const navbarHeight = document.querySelector("nav")?.offsetHeight || 0;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
  
      window.scrollTo({
        top: sectionTop - navbarHeight, // Offset by navbar height
        behavior: "smooth",
      });
    }
  }; 
  
  return (
    <Nav isTransparent={isTransparent}>
      <Logo src={logo} alt="logo" onClick={() => navigate("/")} />
      <ul>
      <NavItem onClick={() => scrollToSection("about")}>About</NavItem>
        <NavItem onClick={() => scrollToSection("services")}>Services</NavItem>
        <NavItem onClick={() => scrollToSection("products")}>Products</NavItem>
        <NavItem onClick={() => scrollToSection("consulting")}>Consulting</NavItem>
        <NavItem>
          <button className="btn" onClick={() => scrollToSection("contact")}>
            Contact
          </button>
        </NavItem>
      </ul>
    </Nav>
  );
}  

export default Navbar;
