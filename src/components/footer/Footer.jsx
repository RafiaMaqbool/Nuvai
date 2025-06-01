import styled from "styled-components";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const FooterContainer = styled.footer`
  background: #1a202c;
  color: white;
  padding: 1.5rem 1rem;
  margin-top: 2.5rem;
  text-align: center;
`;

const FooterContent = styled.div`
  max-width: 72rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    text-align: left;
  }
`;

const FooterSection = styled.div``;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
`;

const Text = styled.p`
  margin-top: 0.5rem;
  color: #a0aec0;
`;

const LinksList = styled.ul`
  margin-top: 0.5rem;
  list-style: none;
  padding: 0;
`;

const LinkItem = styled.li`
  margin-bottom: 0.5rem;
  color: white;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #cbd5e0;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
  gap: 1rem;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }

  a {
    color: white;
    transition: color 0.3s;

    &:hover {
      color: #cbd5e0;
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  color: #a0aec0;
  margin-top: 1.5rem;
  border-top: 1px solid #2d3748;
  padding-top: 1rem;
`;

const Footer = () => {
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
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <Title>Nuvai</Title>
          <Text>
            Empowering innovation with cutting-edge solutions. Our team provides
            tailored solutions to meet your specific needs.
          </Text>
        </FooterSection>
        <FooterSection>
          <Title>Quick Links</Title>
          <LinksList>
            <LinkItem onClick={() => scrollToSection("hero")}>Home</LinkItem>
            <LinkItem onClick={() => scrollToSection("about")}>About</LinkItem>
            <LinkItem onClick={() => scrollToSection("services")}>Services</LinkItem>
            <LinkItem onClick={() => scrollToSection("products")}>Products</LinkItem>
          </LinksList>
        </FooterSection>
        <FooterSection>
          <Title>Follow Us</Title>
          <SocialIcons>
            <a href="#"><FaFacebook size={20} /></a>
            <a href="#"><FaTwitter size={20} /></a>
            <a href="#"><FaInstagram size={20} /></a>
            <a href="#"><FaLinkedin size={20} /></a>
          </SocialIcons>
        </FooterSection>
      </FooterContent>
      <Copyright>
        &copy; {new Date().getFullYear()} Nuvai. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;