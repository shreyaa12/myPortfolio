"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { useMediaQuery } from 'react-responsive';

const HeroSection = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });
  return (
    <section className="lg:py-16" id="hero">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1}}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left md:justify-self-start justify-self-center" 
        >
         <div className="text-primary text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-primary">
              Hello, I&apos;m{" "}
            </div>
          </div>
          <h1 className="text-primary text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            
            <TypeAnimation
              sequence={[
                "Shreya",
                1000,
                'a Full-Stack Developer 🚀',
                1000,
                'a Continuous Learner 📚',
                1000,
                'a Hiker 🏞️',
                1000,
              ]}
              wrapper="span"
              speed={isSmallScreen ? 0 : 50}
              repeat={Infinity}
            />
          </h1>
          
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/Profile.jpg"
              alt="Profile image"
              className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;