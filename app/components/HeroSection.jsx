"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="py-12 px-4 sm:py-16 sm:px-8 lg:py-20 lg:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-12 items-center gap-8 w-full">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-1 sm:col-span-7 lg:col-span-6 text-center sm:text-left"
        >
          <h1 className="text-white mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-500 to-green-500">
              Hello, I&lsquo;m{' '}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Mohale",
                1000,
                "Web Developer",
                1000,
                "Frontend Developer",
                1000,
                // "Backend Developer",
                // 1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-sm sm:text-base md:text-lg lg:text-xl mb-6">
            I&lsquo;m a Web Developer, Designer, and Software Engineer passionate about crafting innovative, user-focused solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <button
              className="px-6 py-4 rounded-full bg-gradient-to-br from-blue-500 via-blue-500 to-green-500 hover:bg-opacity-80 text-white"
              onClick={() => (window.location.href = "mailto:mohalemalebanye1@gmail.com")}
              aria-label="Hire Me button"
            >
              Hire Me
            </button>
            <button
              className="px-6 py-4 rounded-full bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
              onClick={() => window.open("https://novoresume.com/editor/resume/d86d19b0-a80b-11ef-b66f-a779d8790c67")}
            >
              Download CV
            </button>
          </div>
        </motion.div>

        {/* Image Section */}
        <div className="col-span-1 sm:col-span-5 lg:col-span-6 flex justify-center">
          <div className="rounded-full bg-[#181818] w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] relative">
            <Image
              src="/mohale.jpg"
              alt="Mohale"
              width={400}
              height={400}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
