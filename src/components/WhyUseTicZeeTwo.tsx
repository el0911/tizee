import React from 'react';
import styled from 'styled-components';
import Image from 'next/image'
// Wrapper for the entire section
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem;
  background-color: #f7f9fb;
  font-family: 'Arial', sans-serif;

  @media (max-width: 768px) {
    padding: 2rem;
    flex-direction: column;
  }
`;

// Container for the content (image and text)
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

// Styled component for the image section
const ImageContainer = styled.div`
  flex: 1;
  img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;


const TextContainer = styled.div`
  flex: 1;
  padding-left: 2rem;

  h2 {
    font-size: 2.5rem;
    color: #2b2b2b;

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.8rem;
    }

    span {
      /* Gradient Text */
      background: linear-gradient(90deg, #007bff, #00c6ff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
  }

  p {
    font-size: 1.2rem;
    line-height: 1.5;
    margin-top: 1rem;
    color: #4a4a4a;

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }

     span {
      /* Gradient Text */
      background: linear-gradient(90deg, #007bff, #00c6ff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
  }

  a {
    color: #007bff;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    padding-left: 0;
  }
`;



const WhyUseTicZeeTwo: React.FC = () => {
  return (
    <Wrapper>
      <Content>
        {/* Image */}
        <ImageContainer>
          <Image width={400} height={400} src="/car.png" alt="Prize Car" />
        </ImageContainer>

        {/* Text content */}
        <TextContainer>
          <h2>
            Your <span>prizes</span>, <br /> your <span>revenue</span>.
          </h2>
          <p>
            Engage your fans, followers, and customers through captivating prize competitions. Using our platform will build your brand awareness and loyalty through targeted prize competitions, all whilst enabling you to keep up to <span>90%</span> of ticket revenue generated.
          </p>
          <p>
            If you’re not in it, you can’t <span>win it</span>.
          </p>
        </TextContainer>
      </Content>
    </Wrapper>
  );
};

export default WhyUseTicZeeTwo;
