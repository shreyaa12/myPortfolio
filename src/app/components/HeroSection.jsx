"use client"
import React from 'react'
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section className='lg:py-16'>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-7 place-self-center text-center sm:text-left justify-self-start'>
        <h1 className='text-primary mb-4 text-4xl sm:text-5xl lg:text-6xl  font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-primary'>Hello, I am{" "}</span>
            <br/>
            <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed out once, initially
                'a Full Stack Developer',
                1000,
                'a Continuous Learner',
                1000,
                'a Hiker',
                1000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            />
        </h1>
        {/* <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>Passionate Full Stack Developer, Fueling Success through Perpetual Learning and Innovation!</p> */}
        {/* <div>
            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-[#ece2e2] hover:bg-slate-200 text-black'>Hire Me</button>
            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-transparent hover:bg-slate-800 text-primary border border-white mt-3'>Download Resume</button>
        </div> */}

        </div>
        
       <div className='col-span-5 place-self-center mt-4 lg-mt:0'>
       <div className="rounded-full bg-[#ece2e2] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
       <Image
              src="/images/hero.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
              priority
            />
       </div>
       </div>
       </div>
    </section>
  )
}

export default HeroSection;