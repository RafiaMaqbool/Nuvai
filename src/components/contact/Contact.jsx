import React, { useState } from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 100px 10%;
  background-color: #EDECEC;
  position: relative;

  @media (max-width: 992px) {
    flex-direction: column;
    text-align: center;
    padding: 60px 5%;
  }
`;

const ContactContent = styled.div`
  max-width: 600px;

  h2 {
    font-size: 38px;
    font-weight: 700;
    color: #1B93CA;
    margin-bottom: 12px;
  }

  p {
    font-size: 18px;
    color: #444;
    line-height: 1.6;
    margin-top: 16px;
  }
`;

const ContactForm = styled.div`
  text-align: center;
  background: #072d4b;
  color: white;
  padding: 60px;
  border-radius: 12px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  max-width: 700px;

  h3 {
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 15px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  input, textarea {
    width: 100%;
    padding: 15px;
    border-radius: 8px;
    border: none;
    font-size: 18px;
  }

  button {
    margin-top: 15px;
    background: #1B93CA;
    color: white;
    border: none;
    padding: 14px 28px;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
    border-radius: 10px;
    transition: 0.3s ease-in-out;
  }

  button:hover {
    background: #9CCADB;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}. We'll be in touch soon!`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <ContactSection>
      <ContactContent>
        <h2>Partner with Nuvai to unlock unparalleled growth and success.</h2>
        <p>Our innovative solutions and strategic alliances drive industry-leading transformation and efficiency. Join our collaborative ecosystem to shape a brighter, more connected future together. Let's revolutionize your business with cutting-edge technology and expertise.</p>
      </ContactContent>

      <ContactForm>
        <h3>Tell Us Your Vision</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send Message</button>
        </form>
      </ContactForm>
    </ContactSection>
  );
};

export default Contact;
