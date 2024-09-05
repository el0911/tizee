import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image'

// Main container to align content to the right
const SectionContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

// Container for the card content, placed on the right side
const Card = styled.div`
  background-color: white;
  padding: 0.6rem;
  width: 500px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  width:fit-content;
      width: 700px;
`;

// Header Section with Blue Background
const Header = styled.div`
  background-color: #2563eb;
  color: white;
  padding: 0.5rem;
  text-align: center;
  font-size: 0.7rem;
  border-radius: 8px;
  margin-bottom: 5px;
`;

// Info Labels (e.g., Draw Date, Tickets)
const InfoLabels = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}
`;

const Label = styled.div`
  background-color: black;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.5rem;
  text-align: center;
`;

// Customer Review Section
const ReviewSection = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    color: black;
    /* text-align: center; */
    width: 100%;
    justify-content: center;
    font-size: 11px;
`;

const ReviewText = styled.p`
  margin-right: 0.5rem;
`;

const Stars = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0.5rem;
  color: #2563eb;
`;

// Car Image
const CarImage = styled.img`
  width: 90%;
  height:100%;
  border-radius: 8px;
  margin-bottom: 1.5rem;
`;

// Pricing and Question Section
const PriceText = styled.p`
  font-size: 1rem;
  font-weight: bold;
`;

const Question = styled.p`
  font-size: 0.8rem;
  margin-bottom: 1rem;
`;

// Option buttons (radio inputs)
const Options = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
`;

const OptionLabel = styled.label`
  background-color: #f0f0f0;
  padding: 0.3rem;
  border-radius: 8px;
  font-size: 0.8rem;
  margin-bottom: 0.75rem;
  text-align:center;
  display: flex;
  align-items: center;

  input {
    margin-right: 1rem;
  }

  p{
    width:100%
  }
`;


// Slider and ticket selector
const TicketSelector = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  position: relative;
`;

const TicketButton = styled.button`
  background-color: #2563eb;
  border: none;
  padding: 0.75rem;
  border-radius: 50%;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  &:hover {
    background-color: #1d4ed8;
  }
`;

const RangeInput = styled.input`
  flex-grow: 1;
  margin: 0 1rem;
  height: 8px;
  border-radius: 5px;
  background: linear-gradient(90deg, #2563eb, #93c5fd);
  outline: none;
  opacity: 0.9;
  transition: opacity 0.2s;
  position: relative;

  &:hover {
    opacity: 1;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #2563eb;
    cursor: pointer;
  }
`;

const TicketCount = styled.span`
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  background-color: black;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
`;

const SubmitButton = styled(motion.button)`
  background: linear-gradient(90deg, #2563eb, #93c5fd);
  color: white;
  font-size: 1.2rem;
  padding:10px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
font-size: 10px;
  text-align: center;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1d4ed8;
  }
`;



const TicZeeBanner: React.FC = () => {
  return (
    <SectionContainer>
      <Card>
        <Header>BMW Coupe Sport & 4K Cash!</Header>

        <InfoLabels>
          <Label>Draw Date: 29th August @ 9PM</Label>
          <Label>Only 7999 Tickets Available</Label>
          <Label>500 Tickets Per Person</Label>
        </InfoLabels>

        <ReviewSection>
          <ReviewText>Our customers say</ReviewText>
          <Stars>⭐⭐⭐⭐⭐ 4.9/5</Stars>
          <p>(2093 reviews)</p>
        </ReviewSection>

        <div style={{
          display: 'grid',
          gap: '10px',
          gridTemplateColumns: "350px 1fr"
        }} >
          <CarImage src="https://via.placeholder.com/600x400.png?text=Car+Image" alt="BMW Coupe" />

          <div style={{
            color: 'black'
          }}>
            <PriceText>£1.99 per entry</PriceText>

            <Question>What is the capital of Italy?</Question>

            <Options>
              <OptionLabel>
                <input type="radio" name="capital" value="rome" /> <p>Rome</p>
              </OptionLabel>
              <OptionLabel>
                <input type="radio" name="capital" value="milan" /> <p>Milan</p>
              </OptionLabel>
              <OptionLabel>
                <input type="radio" name="capital" value="naples" /> <p>Naples</p>
              </OptionLabel>
            </Options>

            <TicketSelector>
              <button>-</button>
              <RangeInput
            type="range"
            min="1"
            max="100"
            
          />
               <button>+</button>
            </TicketSelector>

            <div  style={{
              textAlign:'center'
            }}>
              <SubmitButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Enter Now
              </SubmitButton>
            </div>
          </div>
        </div>
      </Card>
    </SectionContainer>
  );
};

export default TicZeeBanner;
