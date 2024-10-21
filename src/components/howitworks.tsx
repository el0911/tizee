import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from 'next/image';

const HowItWorks = ({ openModal }: any) => {
  const [isMobile, setIsMobile] = useState(false);

  // Update isMobile based on window size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "3rem 5rem",
        backgroundColor: "#1c1c1c",
        color: "#ffffff",
        flexDirection: isMobile ? "column" : "row"
      }}
    >
      <div
        style={{
          flex: 1,
          marginBottom: isMobile ? "2rem" : "0",
        }}
      >
        <Image
          src="/howItWorks.png"
          width={500}
          height={768}
          alt="Car dashboard"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "8px",
          }}
        />
      </div>

      <motion.div
        style={{
          flex: 1,
          paddingLeft: isMobile ? "0" : "2rem",
          textAlign: isMobile ? "center" : "left",
        }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2
          style={{
            fontSize: isMobile ? "2rem" : "2.5rem",
            marginBottom: "2rem",
          }}
        >
          How It Works
        </h2>

        <div
          style={{
            marginLeft: isMobile ? "0" : "50px",
          }}
        >
          <div
            style={{
              marginBottom: "2rem",
              paddingLeft: isMobile ? "0" : "2rem",
            }}
          >
            <h3
              style={{
                fontSize: "1.5rem",
                marginBottom: "0.5rem",
                color: "#ffffff",
              }}
            >
              Join Waiting List
            </h3>
            <p
              style={{
                color: "#bbbbbb",
                fontSize: "1rem",
              }}
            >
              Sign up today by entering your email, and be among the first to
              experience Ticzee’s platform. Whether you want to host your own
              competitions or enter to win amazing prizes, we’ll notify you as
              soon as we launch.
            </p>
          </div>

          <div
            style={{
              marginBottom: "2rem",
              paddingLeft: isMobile ? "0" : "2rem",
            }}
          >
            <h3
              style={{
                fontSize: "1.5rem",
                marginBottom: "0.5rem",
                color: "#ffffff",
              }}
            >
              Get Early Access.
            </h3>
            <p
              style={{
                color: "#bbbbbb",
                fontSize: "1rem",
              }}
            >
              As a member of our exclusive waiting list, you’ll receive early
              access to host competitions or enter them before the general
              public. Plus, you’ll be eligible for special launch promotions and
              giveaways!
            </p>
          </div>

          <div
            style={{
              marginBottom: "2rem",
              paddingLeft: isMobile ? "0" : "2rem",
            }}
          >
            <h3
              style={{
                fontSize: "1.5rem",
                marginBottom: "0.5rem",
                color: "#ffffff",
              }}
            >
              Be the First to Know
            </h3>
            <p
              style={{
                color: "#bbbbbb",
                fontSize: "1rem",
              }}
            >
              We’ll keep you updated with exciting news, sneak peeks, and tips
              on how to maximize your experience on Ticzee. Watch your inbox for
              insider updates!
            </p>
          </div>

          <motion.button
            onClick={openModal}
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
              display: isMobile ? "block" : "inline-block",
              margin: isMobile ? "1rem auto 0" : "1rem 0 0",
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Now
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default HowItWorks;
