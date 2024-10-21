import React from 'react';
import Image from 'next/image'

const WhyUseTicZeeTwo: React.FC = () => {
  const wrapperStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4rem',
    backgroundColor: '#f7f9fb',
    fontFamily: "'Arial', sans-serif",
  };

  const contentStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    width: '100%',
  };

  const imageContainerStyle = {
    flex: 1,
  };

  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '10px',
  };

  const textContainerStyle = {
    flex: 1,
    paddingLeft: '2rem',
  };

  const headingStyle = {
    fontSize: '2.5rem',
    color: '#2b2b2b',
  };

  const gradientTextStyle = {
    background: 'linear-gradient(90deg, #007bff, #00c6ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textFillColor: 'transparent',
  };

  const paragraphStyle = {
    fontWeight: 'lighter',
    fontSize: '1rem',
    lineHeight: 1.5,
    marginTop: '1rem',
    color: '#4a4a4a',
  };

  return (
    <div style={wrapperStyle}>
      <div style={contentStyle}>
        {/* Image */}
        <div style={imageContainerStyle}>
          <Image width={400} height={400} src="/car.png" alt="Prize Car" style={imageStyle} />
        </div>

        {/* Text content */}
        <div style={textContainerStyle}>
          <h2 style={headingStyle}>
            Your <span style={gradientTextStyle}>prizes</span>, <br /> your <span style={gradientTextStyle}>revenue</span>.
          </h2>
          <p style={paragraphStyle}>
            Engage your fans, followers, and customers through captivating prize competitions. Using our platform will build your brand awareness and loyalty through targeted prize competitions, all whilst enabling you to keep up to <span style={gradientTextStyle}>90%</span> of ticket revenue generated.
          </p>
          <p style={paragraphStyle}>
            If you're not in it, you can't <span style={gradientTextStyle}>win it</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUseTicZeeTwo;