import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Styled Components for layout and styling
const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #1E81CE, #47A7F5);
  padding: 3rem;
  font-family: 'Arial', sans-serif;

  @media (max-width: 768px) {
    padding: 2rem;
  }

   h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: white;
    width:100%;
    text-align:center;

    @media (max-width: 768px) {
      font-size: 3.5rem;
    }

    @media (max-width: 480px) {
      font-size: 2.5rem;
    }
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  margin:auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled(motion.div)`
  padding: 2rem;
  flex: 1;
  margin: 0 1rem;
  text-align: left;
  color: white;
  backdrop-filter: blur(10px);
  max-width: 350px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  h1 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: white;

    @media (max-width: 768px) {
      font-size: 3.5rem;
    }

    @media (max-width: 480px) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 16px;
        font-family: __Ubuntu_487f76;

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

// Framer Motion Variants for animation
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

// Main Component
const WhyUseTicZee = () => {
  return (
    <Wrapper>
      <h2>
      Why Use TicZee.
      </h2>
      <Content>
        {/* First Card */}
        <Card
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
        >
          <h1>1.</h1>
          <p>Engage your fans, followers, and customers through captivating prize competitions.</p>
        </Card>

        {/* Second Card */}
        <Card
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          <h1>2.</h1>
          <p>Run successful raffles with features like unlimited entrants & promotional bundles.</p>
        </Card>

        {/* Third Card */}
        <Card
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
        >
          <h1>3.</h1>
          <p>Increase visibility by featuring your competition on our website (paid feature).</p>
        </Card>
      </Content>
    </Wrapper>
  );
};

export default WhyUseTicZee;
