import React from "react";
import { motion } from "framer-motion";
import Image from 'next/image';

const HowItWorks = ({ openModal }: any) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-20 py-12 bg-[#1c1c1c] text-white">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <Image
          src="/howItWorks.png"
          width={500}
          height={768}
          alt="Car dashboard"
          className="w-full h-auto rounded-lg"
          priority
        />
      </div>

      <motion.div
        className="w-full md:w-1/2 md:pl-8 text-center md:text-left"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl mb-8">
          How It Works
        </h2>

        <div className="md:ml-12">
          {[
            {
              title: "Join Waiting List",
              description: "Sign up today by entering your email, and be among the first to experience Ticzee's platform. Whether you want to host your own competitions or enter to win amazing prizes, we'll notify you as soon as we launch."
            },
            {
              title: "Get Early Access.",
              description: "As a member of our exclusive waiting list, you'll receive early access to host competitions or enter them before the general public. Plus, you'll be eligible for special launch promotions and giveaways!"
            },
            {
              title: "Be the First to Know",
              description: "We'll keep you updated with exciting news, sneak peeks, and tips on how to maximize your experience on Ticzee. Watch your inbox for insider updates!"
            }
          ].map((item, index) => (
            <div key={index} className="mb-8 md:pl-8">
              <h3 className="text-2xl mb-2 text-white">
                {item.title}
              </h3>
              <p className="text-gray-400 text-base">
                {item.description}
              </p>
            </div>
          ))}

          <motion.button
            onClick={openModal}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-full font-bold text-base mx-auto md:mx-0 block md:inline-block mt-4 hover:shadow-lg transition-shadow duration-300"
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