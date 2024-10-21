"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const TicZeeBanner = ({ openModal }:any) => {
  return (
<div 
  className="flex justify-center items-center bg-[url('/headerBack.png')] bg-center bg-cover bg-no-repeat text-white p-8 min-h-screen"
  style={{
    backgroundImage: `linear-gradient(to right, rgba(1, 1, 1, 1) 30%, rgba(0, 0, 0, 0.7) 70%), url('/headerBack.png')`
  }}
>      <div className="flex justify-between items-center w-full max-w-[1500px] p-8 mx-auto md:flex-row flex-col">
        <div className="max-w-[600px] md:text-left text-center md:mb-0 mb-8">
          <h1 className="text-5xl mb-4 md:text-4xl sm:text-3xl">Create. Compete. Win.</h1>
          <p className="text-xl mb-8 leading-relaxed font-light md:text-lg sm:text-base">
            <br />
            Join the waiting list and turn your products or services into customizable competitions that drive revenue. Ready to create, compete, and win?
          </p>
          <motion.button
            onClick={openModal}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-700 to-blue-500 text-white text-lg py-3 px-6 rounded-full cursor-pointer transition-colors hover:bg-blue-600 sm:text-base sm:py-2 sm:px-4"
          >
            Join Now
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="md:w-auto w-full"
        >
          <Image
            style={{
              boxShadow: '12px 12px 2px 1px #0F4CC2'
            }}
            width={600}
            height={360}
            src="/header2.png"
            alt=""
            className="rounded-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default TicZeeBanner;