import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import CardItem from './carItemCard';
import Image from 'next/image'

// Container for the entire section
// Container for the entire section with left-to-right gradient
const SectionContainer = styled.div<{ bgImage: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: 
    linear-gradient(to right, rgba(1, 1, 1, 1) 30%, rgba(0, 0, 0, 0.7) 70%),
    url(${props => props.bgImage}) center/cover no-repeat;
  color: white;
  padding: 2rem;
  min-height: 100vh;
`;


// Centered child content container
const SectionChild = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1500px;
  padding: 2rem;
  margin: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1.5rem;
  }
`;

// Left side content (text and button)
const LeftContent = styled.div`
  max-width: 600px;

  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 2rem;
  }
`;

const Heading = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const SubHeading = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  line-height: 1.5;
    font-weight: lighter;
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const JoinButton = styled(motion.button)`
  background: linear-gradient(90deg, #1d4ed8, #2563eb);
  color: white;
  font-size: 1rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2563eb;
  }

  @media (max-width: 480px) {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
  }
`;

// Right side content (card and image)
const RightContent = styled(motion.div)`
   
  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const CarImage = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 1.5rem;
`;

const Question = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;

const OptionLabel = styled.label`
  margin-bottom: 0.75rem;
`;
const SubmitButton = styled(motion.button)`
  background: linear-gradient(90deg, #2563eb, #93c5fd);
  color: white;
  font-size: 1.1rem;
  padding:10px 20px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1d4ed8;
  }
`;

const TicZeeBanner =  ({openModal}:any) => {
  return (
    <SectionContainer   bgImage="/headerBack.png">
      <SectionChild>
        <LeftContent>
          <Heading>Want it, Win it, Give it.</Heading>
          <SubHeading>
            Join our waiting list & turn your products or experiences into prizes.
            Prizes to revenue, simple as that.
          </SubHeading>
          <SubmitButton  
          onClick={openModal}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Now
          </SubmitButton>
        </LeftContent>

        <RightContent
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* <CardItem/> */}
          <Image style={{
            boxShadow: '12px 12px 2px 1px #0F4CC2'
          }} width={600} height={360} src={'/header2.png'} alt={''} />
        </RightContent>
      </SectionChild>
    </SectionContainer>
  );
};

export default TicZeeBanner;
