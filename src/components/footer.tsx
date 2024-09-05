import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Container for the footer links section
const FooterContainer = styled.div`
  background: linear-gradient(90deg, #0052cc, #4facfe); /* Gradient background */
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
      height: 100px;


  @media (max-width: 768px) {
    flex-direction: column;
    padding:30px 0;
    display: grid;
    height: auto;
  }
`;

// Footer links
const FooterLink = styled(motion.a)`
  color: white;
  margin: 0 2rem;
  text-decoration: none;
  font-size: 1.2rem;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #cce7ff; /* Hover color effect */
  }

  @media (max-width: 768px) {
    margin: 0.5rem 0;
    font-size: 1rem;
  }
`;

const FooterLinks: React.FC = () => {
  return (
    <FooterContainer>
      <FooterLink
        href="#"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Privacy Policy
      </FooterLink>
      <FooterLink
        href="#"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Competition Rules
      </FooterLink>
      <FooterLink
        href="#"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Cookies Policy
      </FooterLink>
    </FooterContainer>
  );
};

export default FooterLinks;
