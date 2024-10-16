import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Image from 'next/image'

const HowItWorksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 5rem;
  background-color: #1c1c1c;
  color: #ffffff;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem;
  }
`;

const ImageContainer = styled.div`
  flex: 1;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const TextContainer = styled(motion.div)`
  flex: 1;
  padding-right: 2rem;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
      text-align: center;
      font-size: 2rem;
    }
  }

  .stepdad{
      }

  .step {
    margin-bottom: 2rem;
    padding-right: 2rem;

    h3 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
      color: #ffffff;
    }

    p {
      color: #bbbbbb;
      font-size: 1rem;
    }
  }

  @media (max-width: 768px) {
    padding-right: 0;
    text-align: center;
margin-bottom: 20px; 
    .step {
     padding-right: 0;
      }
  }
`;


const JoinButton = styled(motion.button)`
  background: linear-gradient(90deg, #007bff, #00c6ff);
  color: white;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  margin-top: 1rem;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    display: block;
    margin: 1rem auto 0;
  }
`;

const HowItWorksHosts = ({ openModal }: any) => {
  return (
    <HowItWorksContainer>


      <TextContainer
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>How It Works - For Hosts</h2>

        <div className="stopdad">
          <div className="step">
            <h3>Create Your Competition</h3>
            <p>{"Sign up to host your own competition. Choose your prize (whether it's a product, service, or experience), set the ticket price, the number of tickets, and the competition deadline. You have full control over every aspect."}</p>
          </div>

          <div className="step">
            <h3>Promote Your Competition</h3>
            <p>{"Easily share your competition with your audience through social media, email, or even our built-in promotional tools. Drive engagement with your followers and customers to maximize ticket sales"}.</p>
          </div>

          <div className="step">
            <h3>Watch the Entries Roll In</h3>
            <p>{"As participants purchase tickets, you'll be able to track entries in real-time through your dashboard. The more entries, the higher the prize pot for your competition."}</p>
          </div>

          <div className="step">
            <h3>Reward the Winner</h3>
            <p>{"Once the competition ends, the winner is automatically selected, and you're notified to fulfill the prize. It's that simple!"}</p>
          </div>

          <JoinButton
            onClick={openModal}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Hosting
          </JoinButton>
        </div>
      </TextContainer>

      <ImageContainer>
        <Image
          src="/howItWorks.png"
          width={500}
          height={768}
          alt="Host dashboard"
        />
      </ImageContainer>
    </HowItWorksContainer>
  );
};

export default HowItWorksHosts;