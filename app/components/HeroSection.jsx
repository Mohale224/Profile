"use client"
import React from 'react' 
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section className='lg:py-16'>
        <div 
        className='grid grid-cols-1 sm:grid-cols-12'
        >
        <div 
        className='col-span-4 place-self-center text-center sm:text-left justify-self-start'
        >
      <h1 
      className='text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold '
      >
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-500 to-green-500' >Hello I&lsquo;m 
        {' '} </span>
        <br />
        <TypeAnimation
        sequence={[
            "Mohale",
            1000,
            "Web Developer",
            1000,
            "Frontend Developer",
            1000,
            "Backend Developer",
            1000,
        ]}
        wrapper='span'
        speed={50}
          repeat={Infinity}
        
        />
        </h1>
      <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
        I&lsquo;m a Frontend Developer who is married to two wives wow very impressive right. </p>
      <button className='px-6 py-4 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-blue-500 to-green-500 hover:bg-slate-200 text-white'>
        Hire Me
        </button>
      <button className='px-2 py-2 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500  via-blue-500 to-green-500 bg-transparent hover:bg-slate-800 text-white border'>
        <span className='block bg-[#121212] hover:bg-slate-800 rounded full px-5 py-2'>Download CV</span> 
        </button>
      </div>
      <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
        <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px]
        lg:h-[400px] relative'>
        <Image
          src='/mohale.jpg'
          alt='mohale'
          width={300}
          height={300}
          className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
        />
        </div>
      </div>
     </div>
    </section>
  )
}

export default HeroSection;
