
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

const HowItWorks = ({openModal}:any) => {
    return (
        <HowItWorksContainer>
            <ImageContainer>
                <Image
                    src="/howItWorks.png"
                    width={500}
                    height={768}
                    alt="Car dashboard"
                />
            </ImageContainer>

            <TextContainer
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2>How It Works -Waiting List.</h2>

                <div  className="stepdad">
                    <div className="step">
                        <h3>Join Waiting List</h3>
                        <p>Sign up today by entering your email, and be among the first to experience Ticzee’s platform. Whether you want to host your own competitions or enter to win amazing prizes, we’ll notify you as soon as we launch</p>
                    </div>

                    <div className="step">
                        <h3>Get Early Access.</h3>
                        <p>As a member of our exclusive waiting list, you’ll receive early access to host competitions or enter them before the general public. Plus, you’ll be eligible for special launch promotions and giveaways!</p>
                    </div>

                    <div className="step">
                        <h3>Be the First to Know</h3>
                        <p>We’ll keep you updated with exciting news, sneak peeks, and tips on how to maximize your experience on Ticzee. Watch your inbox for insider updates!</p>
                    </div>

                    <JoinButton
                              onClick={openModal}

                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Join Now
                    </JoinButton>
                </div>
            </TextContainer>
        </HowItWorksContainer>
    );
};

export default HowItWorks;
