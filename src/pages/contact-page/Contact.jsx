import React, { useState } from "react";
import styled from "styled-components";

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f9f9f9;
`;

const FormWrapper = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  resize: none;
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #0056b3;
  }
`;

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <ContactContainer>
      <FormWrapper>
        <Title>Contact Us</Title>
        <Form onSubmit={handleSubmit}>
          <Input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <Input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <TextArea name="message" rows="4" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
          <Button type="submit">Send Message</Button>
        </Form>
      </FormWrapper>
    </ContactContainer>
  );
};

export default ContactUs;