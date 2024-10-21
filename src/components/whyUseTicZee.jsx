import React from 'react';
import { motion } from 'framer-motion';

// Framer Motion Variants for animation
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

// Main Component
const WhyUseTicZee = () => {
  const wrapperStyle = {
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #1E81CE, #47A7F5)',
    padding: '3rem',
    fontFamily: "'Arial', sans-serif",
  };

  const titleStyle = {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    color: 'white',
    width: '100%',
    textAlign: 'center',
  };

  const contentStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    width: '100%',
    margin: 'auto',
  };

  const cardStyle = {
    padding: '2rem',
    flex: 1,
    margin: '0 1rem',
    textAlign: 'left',
    color: 'white',
    backdropFilter: 'blur(10px)',
    maxWidth: '350px',
    transition: 'transform 0.3s ease',
  };

  const cardTitleStyle = {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    color: 'white',
  };

  const cardTextStyle = {
    fontSize: '16px',
   };

  return (
    <div style={wrapperStyle}>
      <h2 style={titleStyle}>Why Use TicZee?</h2>
      <div style={contentStyle}>
        {/* First Card */}
        <motion.div
          style={cardStyle}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
          whileHover={{ transform: 'translateY(-10px)' }}
        >
          <h1 style={cardTitleStyle}>Complete control over your competitions</h1>
          <p style={cardTextStyle}>Create and run your own customized competitions with full control over ticket limits, prices, deadlines, and prizes. Whether you're a small business or an individual, Ticzee lets you tailor every aspect to suit your audience and maximize your revenue.</p>
        </motion.div>

        {/* Second Card */}
        <motion.div
          style={cardStyle}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          whileHover={{ transform: 'translateY(-10px)' }}
        >
          <h1 style={cardTitleStyle}>Monetise Your Products or Experiences with Ease</h1>
          <p style={cardTextStyle}>Turn your products or services into revenue-generating competitions without the hassle. Ticzee provides an easy-to-use platform where you can effortlessly launch and manage competitions that convert your audience's interest into profit.</p>
        </motion.div>

        {/* Third Card */}
        <motion.div
          style={cardStyle}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
          whileHover={{ transform: 'translateY(-10px)' }}
        >
          <h1 style={cardTitleStyle}>Flexible, Scalable, and Designed for Growth</h1>
          <p style={cardTextStyle}>Whether you're just starting out or want to scale your business, Ticzee's platform grows with you. From flexible competition settings to advanced promotional tools, you can expand your reach, build your audience, and create competitions that stand out.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyUseTicZee;