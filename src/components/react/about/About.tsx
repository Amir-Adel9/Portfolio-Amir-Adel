import { useEffect, useRef, useState } from 'react';

const About = () => {
  return (
    <section
      className='relative bg-yellow- h-screen w-full flex items-center justify-center'
      id='about'
    >
      <div className='absolute text-5xl font-noto text-[#DDD] left-[10%] md:top-[25%]'>
        <span className='text-2xl opacity-50'>About Me</span>
        <h1>Briefing.</h1>
        <p className='text-base text-accent font-mono mt-5'>
          I am a full-stack web developer
        </p>
      </div>
    </section>
  );
};

export default About;
