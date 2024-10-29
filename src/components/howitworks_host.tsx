import React from "react";
import { motion } from "framer-motion";
import Image from 'next/image';

const HowItWorksHosts = ({ openModal }: any) => {
  const steps = [
    {
      title: "Create Your Competition",
      description: "Sign up to host your own competition. Choose your prize (whether it's a product, service, or experience), set the ticket price, the number of tickets, and the competition deadline. You have full control over every aspect."
    },
    {
      title: "Promote Your Competition",
      description: "Easily share your competition with your audience through social media, email, or even our built-in promotional tools. Drive engagement with your followers and customers to maximize ticket sales."
    },
    {
      title: "Watch the Entries Roll In",
      description: "As participants purchase tickets, you'll be able to track entries in real-time through your dashboard. The more entries, the higher the prize pot for your competition."
    },
    {
      title: "Reward the Winner",
      description: "Once the competition ends, the winner is automatically selected, and you're notified to fulfill the prize. It's that simple!"
    }
  ];

  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-20 py-12 bg-[#1c1c1c] text-white">
      {/* Text Section */}
      <motion.div
        className="w-full md:w-1/2 md:pr-8 text-center md:text-left order-2 md:order-1"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl mb-8">
          How It Works - For Hosts
        </h2>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="md:pr-8">
              <h3 className="text-2xl mb-2 text-white">
                {step.title}
              </h3>
              <p className="text-gray-400 text-base">
                {step.description}
              </p>
            </div>
          ))}

          <motion.button
            onClick={openModal}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-full font-bold text-base mx-auto md:mx-0 block md:inline-block mt-4 hover:shadow-lg transition-shadow duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Hosting
          </motion.button>
        </div>
      </motion.div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0 order-1 md:order-2">
        <Image
          src="/howItWorks.png"
          width={500}
          height={768}
          alt="Host dashboard"
          className="w-full h-auto rounded-lg"
          priority
        />
      </div>
    </div>
  );
};

export default HowItWorksHosts;