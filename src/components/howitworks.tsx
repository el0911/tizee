import React from "react";
import { motion } from "framer-motion";
import Image from 'next/image';

const HowItWorks = ({ openModal }: any) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "3rem 5rem",
        backgroundColor: "#1c1c1c",
        color: "#ffffff",
        flexDirection: window.innerWidth <= 768 ? "column" : "row"
      }}
    >
      <div
        style={{
          flex: 1,
          marginBottom: window.innerWidth <= 768 ? "2rem" : "0",
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
          paddingLeft: window.innerWidth <= 768 ? "0" : "2rem",
          textAlign: window.innerWidth <= 768 ? "center" : "left",
        }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2
          style={{
            fontSize: window.innerWidth <= 768 ? "2rem" : "2.5rem",
            marginBottom: "2rem",
          }}
        >
          How It Works
        </h2>

        <div
          style={{
            marginLeft: "50px",
          }}
        >
          <div
            style={{
              marginBottom: "2rem",
              paddingLeft: window.innerWidth <= 768 ? "0" : "2rem",
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
              paddingLeft: window.innerWidth <= 768 ? "0" : "2rem",
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
              paddingLeft: window.innerWidth <= 768 ? "0" : "2rem",
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
              display: window.innerWidth <= 768 ? "block" : "inline-block",
              margin: window.innerWidth <= 768 ? "1rem auto 0" : "1rem 0 0",
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
