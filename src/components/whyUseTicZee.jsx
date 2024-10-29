import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const WhyUseTicZee = () => {
  const cards = [
    {
      title: "Complete control over your competitions",
      content: "Create and run your own customized competitions with full control over ticket limits, prices, deadlines, and prizes. Whether you're a small business or an individual, Ticzee lets you tailor every aspect to suit your audience and maximize your revenue.",
      delay: 0.1
    },
    {
      title: "Monetise Your Products or Experiences with Ease",
      content: "Turn your products or services into revenue-generating competitions without the hassle. Ticzee provides an easy-to-use platform where you can effortlessly launch and manage competitions that convert your audience's interest into profit.",
      delay: 0.3
    },
    {
      title: "Flexible, Scalable, and Designed for Growth",
      content: "Whether you're just starting out or want to scale your business, Ticzee's platform grows with you. From flexible competition settings to advanced promotional tools, you can expand your reach, build your audience, and create competitions that stand out.",
      delay: 0.5
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-br from-[#1E81CE] to-[#47A7F5] px-4 py-12 md:px-12 font-sans">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8 md:mb-12">
        Why Use TicZee?
      </h2>
      
      <div className="flex flex-col md:flex-row justify-between max-w-6xl w-full gap-6 md:gap-8">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="flex-1 p-6 md:p-8 text-left text-white backdrop-blur-lg bg-white/10 rounded-xl max-w-md mx-auto md:mx-0"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: card.delay }}
            whileHover={{ y: -10 }}
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">
              {card.title}
            </h3>
            <p className="text-base text-white/90 leading-relaxed">
              {card.content}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyUseTicZee;