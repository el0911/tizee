import React from 'react';
import Image from 'next/image';

const WhyUseTicZeeTwo = () => {
  return (
    <div className="flex items-center justify-center bg-[#f7f9fb] px-4 py-16 font-sans">
      <div className="flex max-w-6xl w-full flex-col md:flex-row items-center justify-between gap-8">
        {/* Image Container */}
        <div className="w-full md:w-1/2">
          <div className="relative w-full max-w-md mx-auto">
            <Image
              width={400}
              height={400}
              src="/car.png"
              alt="Prize Car"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#2b2b2b] font-bold">
            Your{' '}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              prizes
            </span>
            , <br />
            your{' '}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              revenue
            </span>
            .
          </h2>
          
          <p className="text-[#4a4a4a] text-base md:text-lg font-light leading-relaxed">
            Engage your fans, followers, and customers through captivating prize
            competitions. Using our platform will build your brand awareness and
            loyalty through targeted prize competitions, all whilst enabling you to
            keep up to{' '}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent font-medium">
              90%
            </span>{' '}
            of ticket revenue generated.
          </p>

          <p className="text-[#4a4a4a] text-base md:text-lg font-light leading-relaxed">
           {" If you're not in it, you can't"}{' '}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent font-medium">
              win it
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUseTicZeeTwo;