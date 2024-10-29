import React from "react";
import { motion } from "framer-motion";
import Image from 'next/image';

const HowItWorksParticipants = ({ openModal }: any) => {
  const steps = [
    {
      title: "Browse Competitions",
      description: "Explore a wide range of exciting competitions across categories like electronics, cars, experiences, and more. New competitions are added regularly, giving you plenty of chances to win!"
    },
    {
      title: "Choose and Enter",
      description: "Pick your favorite competition, purchase your tickets, and get ready to compete for the prize. You can buy as many or as few tickets as you want to increase your chances."
    },
    {
      title: "Wait for the Results",
      description: "Once the competition closes, a winner is drawn and announced. If you win, you'll be contacted to claim your prize!"
    }
  ];

  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-20 py-12 bg-[#1c1c1c] text-white">
      {/* Image Section */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <Image
          src="/howItWorks.png"
          width={500}
          height={768}
          alt="Participant browsing competitions"
          className="w-full h-auto rounded-lg"
          priority
        />
      </div>

      {/* Text Section */}
      <motion.div
        className="w-full md:w-1/2 md:pl-8 text-center md:text-left"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl mb-8">
          How It Works - For Participants
        </h2>

        <div className="md:ml-12">
          {steps.map((step, index) => (
            <div key={index} className="mb-8 md:pl-8">
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
            Start Participating
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default HowItWorksParticipants;