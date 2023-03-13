import { useEffect, useRef, useState } from 'react';

const About = () => {
  return (
    <section
      className='relative h-screen w-full  items-center flex-col justify-center'
      id='about'
    >
      <div className='absolute left-[10%] top-[25%]'>
        <div className=' text-5xl font-noto text-[#DDD] '>
          <span className='text-2xl opacity-50'>About Me</span>
          <h1>Briefing.</h1>
          <div className='text-base text-accent font-mono mt-5'>
            <p>
              I am a full-stack developer who excels at creating elegant,
              reliable and easy to use web applications
            </p>
            <p>
              using various tools and technologies. I am a hard worker, I am
              always eager to learn new stuff, and striving
            </p>
            <p>to deliver to the best of my abilities.</p>
          </div>
        </div>
        <div className=' text-5xl font-noto text-[#DDD] '>
          <span className='text-2xl opacity-50'>About Me</span>
          <h1>Skills & Technologies.</h1>
          <div className='text-base text-accent font-mono mt-5'>
            <p>
              I am a full-stack developer, I excel at creating elegant, reliable
              and easy to use web applications
            </p>
            <p>
              using various tools and technologies. I am always eager to learn
              new stuff
            </p>
            <p>and to deliver to the best of my abilities.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
