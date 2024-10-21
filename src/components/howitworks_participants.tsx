import React from "react";
import { motion } from "framer-motion";
import Image from 'next/image';

const HowItWorksParticipants = ({ openModal }:any) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '3rem 5rem',
      backgroundColor: '#1c1c1c',
      color: '#ffffff',
      flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
    }}>
      <div style={{ flex: 1, marginBottom: window.innerWidth <= 768 ? '2rem' : '0' }}>
        <Image
          src="/howItWorks.png"
          width={500}
          height={768}
          alt="Participant browsing competitions"
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '8px',
          }}
        />
      </div>

      <motion.div
        style={{
          flex: 1,
          paddingLeft: window.innerWidth <= 768 ? '0' : '2rem',
          textAlign: window.innerWidth <= 768 ? 'center' : 'left',
        }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 style={{
          fontSize: window.innerWidth <= 768 ? '2rem' : '2.5rem',
          marginBottom: '2rem',
          textAlign: window.innerWidth <= 768 ? 'center' : 'left'
        }}>How It Works - For Participants</h2>

        <div style={{ marginLeft: window.innerWidth > 768 ? '50px' : '0' }}>
          <div style={{
            marginBottom: '2rem',
            paddingLeft: window.innerWidth > 768 ? '2rem' : '0',
          }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#ffffff' }}>Browse Competitions</h3>
            <p style={{ color: '#bbbbbb', fontSize: '1rem' }}>
              Explore a wide range of exciting competitions across categories like electronics, cars, experiences, and more. New competitions are added regularly, giving you plenty of chances to win!
            </p>
          </div>

          <div style={{
            marginBottom: '2rem',
            paddingLeft: window.innerWidth > 768 ? '2rem' : '0',
          }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#ffffff' }}>Choose and Enter</h3>
            <p style={{ color: '#bbbbbb', fontSize: '1rem' }}>
              Pick your favorite competition, purchase your tickets, and get ready to compete for the prize. You can buy as many or as few tickets as you want to increase your chances.
            </p>
          </div>

          <div style={{
            marginBottom: '2rem',
            paddingLeft: window.innerWidth > 768 ? '2rem' : '0',
          }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#ffffff' }}>Wait for the Results</h3>
            <p style={{ color: '#bbbbbb', fontSize: '1rem' }}>
              Once the competition closes, a winner is drawn and announced. If you win, you'll be contacted to claim your prize!
            </p>
          </div>

          <motion.button
            style={{
              background: 'linear-gradient(90deg, #007bff, #00c6ff)',
              color: 'white',
              padding: '0.8rem 2rem',
              border: 'none',
              borderRadius: '50px',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: 'bold',
              marginTop: '1rem',
              display: window.innerWidth <= 768 ? 'block' : 'inline-block',
              marginLeft: window.innerWidth <= 768 ? 'auto' : '0',
              marginRight: window.innerWidth <= 768 ? 'auto' : '0',
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={openModal}
          >
            Start Participating
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default HowItWorksParticipants;
