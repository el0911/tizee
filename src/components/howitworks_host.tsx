import React from "react";
import { motion } from "framer-motion";
import Image from 'next/image';

const HowItWorksHosts = ({ openModal }: any) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "3rem 5rem",
        backgroundColor: "#1c1c1c",
        color: "#ffffff",
        flexDirection: window.innerWidth <= 768 ? "column" : "row",
      }}
    >
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          flex: 1,
          paddingRight: window.innerWidth <= 768 ? "0" : "2rem",
          textAlign: window.innerWidth <= 768 ? "center" : "left",
          marginBottom: window.innerWidth <= 768 ? "20px" : "0",
        }}
      >
        <h2
          style={{
            fontSize: window.innerWidth <= 768 ? "2rem" : "2.5rem",
            marginBottom: "2rem",
          }}
        >
          How It Works - For Hosts
        </h2>

        <div>
          <div style={{ marginBottom: "2rem", paddingRight: "2rem" }}>
            <h3
              style={{
                fontSize: "1.5rem",
                marginBottom: "0.5rem",
                color: "#ffffff",
              }}
            >
              Create Your Competition
            </h3>
            <p style={{ color: "#bbbbbb", fontSize: "1rem" }}>
             {` Sign up to host your own competition. Choose your prize (whether
              it's a product, service, or experience), set the ticket price, the
              number of tickets, and the competition deadline. You have full
              control over every aspect.`}
            </p>
          </div>

          <div style={{ marginBottom: "2rem", paddingRight: "2rem" }}>
            <h3
              style={{
                fontSize: "1.5rem",
                marginBottom: "0.5rem",
                color: "#ffffff",
              }}
            >
              Promote Your Competition
            </h3>
            <p style={{ color: "#bbbbbb", fontSize: "1rem" }}>
              Easily share your competition with your audience through social
              media, email, or even our built-in promotional tools. Drive
              engagement with your followers and customers to maximize ticket
              sales.
            </p>
          </div>

          <div style={{ marginBottom: "2rem", paddingRight: "2rem" }}>
            <h3
              style={{
                fontSize: "1.5rem",
                marginBottom: "0.5rem",
                color: "#ffffff",
              }}
            >
              Watch the Entries Roll In
            </h3>
            <p style={{ color: "#bbbbbb", fontSize: "1rem" }}>
              As participants purchase tickets, you'll be able to track entries
              in real-time through your dashboard. The more entries, the higher
              the prize pot for your competition.
            </p>
          </div>

          <div style={{ marginBottom: "2rem", paddingRight: "2rem" }}>
            <h3
              style={{
                fontSize: "1.5rem",
                marginBottom: "0.5rem",
                color: "#ffffff",
              }}
            >
              Reward the Winner
            </h3>
            <p style={{ color: "#bbbbbb", fontSize: "1rem" }}>
              Once the competition ends, the winner is automatically selected,
              and you're notified to fulfill the prize. It's that simple!
            </p>
          </div>

          <motion.button
            onClick={openModal}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: "linear-gradient(90deg, #007bff, #00c6ff)",
              color: "white",
              padding: "0.8rem 2rem",
              border: "none",
              borderRadius: "50px",
              cursor: "pointer",
              fontSize: "1rem",
              fontWeight: "bold",
              marginTop: "1rem",
              display: window.innerWidth <= 768 ? "block" : "inline-block",
              margin: window.innerWidth <= 768 ? "1rem auto 0" : "0",
            }}
          >
            Start Hosting
          </motion.button>
        </div>
      </motion.div>

      {/* Image Section */}
      <div style={{ flex: 1, marginBottom: window.innerWidth <= 768 ? "2rem" : "0" }}>
        <Image
          src="/howItWorks.png"
          width={500}
          height={768}
          alt="Host dashboard"
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
        />
      </div>
    </div>
  );
};

export default HowItWorksHosts;
