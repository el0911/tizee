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
  padding-left: 2rem;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
      text-align: center;
      font-size: 2rem;
    }
  }

  .stepdad{
     marginLeft:50px
     }

  .step {
    margin-bottom: 2rem;
    padding-left: 2rem;

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
    padding-left: 0;
    text-align: center;

    .step {
    margin-bottom: 0; 
    padding-left:0
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

const HowItWorksParticipants = ({openModal}:any) => {
    return (
        <HowItWorksContainer>
            <ImageContainer>
                <Image
                    src="/howItWorks.png"
                    width={500}
                    height={768}
                    alt="Participant browsing competitions"
                />
            </ImageContainer>

            <TextContainer
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2>How It Works - For Participants</h2>

                <div className="stepdad">
                    <div className="step">
                        <h3>Browse Competitions</h3>
                        <p>Explore a wide range of exciting competitions across categories like electronics, cars, experiences, and more. New competitions are added regularly, giving you plenty of chances to win!</p>
                    </div>

                    <div className="step">
                        <h3>Choose and Enter</h3>
                        <p>Pick your favorite competition, purchase your tickets, and get ready to compete for the prize. You can buy as many or as few tickets as you want to increase your chances.</p>
                    </div>

                    <div className="step">
                        <h3>Wait for the Results</h3>
                        <p>{"Once the competition closes, a winner is drawn and announced. If you win, you'll be contacted to claim your prize!"}</p>
                    </div>

                    <JoinButton
                        onClick={openModal}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Start Participating
                    </JoinButton>
                </div>
            </TextContainer>
        </HowItWorksContainer>
    );
};

export default HowItWorksParticipants;