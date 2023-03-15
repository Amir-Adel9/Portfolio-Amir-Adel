import { useEffect, useRef, useState } from 'react';

const About = () => {
  return (
    <section
      className='relative h-screen w-full  items-center flex-col justify-center'
      id='about'
    >
      <div className='absolute left-[10%] top-[20%] bg-whit w-[80%] grd grid-rows-1 gap-10 grid-cols-[40%_60%]  '>
        <div className=' text-5xl font-tilt text-[#DDD] mb-5 grid grid-rows-1 gap-10 grid-cols-[50%_50%] items-center justify-between'>
          <div className='h-full'>
            <span className='text-2xl opacity-50 font-mono'>About Me</span>
            <h1>Briefing.</h1>
            <div className='text-base text-accent font-noto mt-5'>
              <p>
                I am a full-stack developer who excels at creating elegant,
                reliable and easy to use
              </p>
              <p>
                web applications using various tools and technologies. I am a
                hard worker, I am
              </p>
              <p>
                always eager to learn new stuff, and always striving to deliver
                to the best of my abilities.
              </p>
            </div>
          </div>
          <div className='h-full'>
            <span className='text-2xl opacity-50 font-mono'>About Me</span>
            <h1>Notable Skills.</h1>
            <div className='text-base text-accent font-noto mt-5'>
              <p>these are some languages and dasdasd</p>
              <ul className='text-[#DDD] mt-5'>
                <li className='before:content-["▹"] before:text-accent before:mr-2 '>
                  C/C++
                </li>
                <li className='before:content-["▹"] before:text-accent before:mr-2 '>
                  Python
                </li>
                <li className='before:content-["▹"] before:text-accent before:mr-2 '>
                  C#/Unity
                </li>
                <li className='before:content-["▹"] before:text-accent before:mr-2 '>
                  HTML/CSS
                </li>
                <li className='before:content-["▹"] before:text-accent before:mr-2 '>
                  JavaScript
                </li>
                <li className='before:content-["▹"] before:text-accent before:mr-2 '>
                  Dart/Flutter
                </li>
                <li className='before:content-["▹"] before:text-accent before:mr-2 '>
                  Discord.js
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='text-5xl font-tilt text-[#DDD]'>
          <span className='text-2xl font-mono opacity-50'>About Me</span>
          <h1>Tech Stack.</h1>
          <p className='text-base text-accent font-noto mt-5'>
            These are the tools and technologies where most of my expertise lies
            and that <br /> I mainly use when building my projects.
          </p>
          <section className=''>
            <div className='text-lg text-[#DDD] font-noto mt-10  '>
              <div className='grid grid-cols-2 md:grid-cols-5 lg:grid-cols-7 gap-5 pl-16 py-5'>
                <span className='relative flex flex-col items-center '>
                  <img
                    src='icons/typescript.png'
                    alt=''
                    className='w-14 h-14'
                  />
                  <span className=' '>TypeScript</span>
                </span>

                <div className=''>
                  <span className='relative flex flex-col items-center '>
                    <img src='icons/react.png' alt='' className='w-16 h-14' />
                    <span className=' '>React</span>
                  </span>
                </div>
                <div className=''>
                  <span className='relative flex flex-col items-center '>
                    <img src='icons/nextjs.png' alt='' className='w-14 h-14' />
                    <span className=' '>Next.js</span>
                  </span>
                </div>
                <div className=''>
                  <span className='relative flex flex-col items-center '>
                    <img
                      src='icons/tailwindcss.svg'
                      alt=''
                      className='w-14 h-14'
                    />
                    <span className=' '>Tailwind CSS</span>
                  </span>
                </div>
                <div className=''>
                  <span className='relative flex flex-col items-center '>
                    <img src='icons/prisma.png' alt='' className='w-16 h-14' />
                    <span className=' '>Prisma</span>
                  </span>
                </div>
                <div className=''>
                  <span className='relative flex flex-col items-center '>
                    <img
                      src='icons/postgresql.png'
                      alt=''
                      className='w-16 h-14'
                    />
                    <span className=' '>PostgreSQL</span>
                  </span>
                </div>

                <div className=''>
                  <span className='relative flex flex-col items-center '>
                    <img
                      src='icons/trpc.png'
                      alt=''
                      className='w-16 h-14 rounded-md'
                    />
                    <span className=' '>tRPC</span>
                  </span>
                </div>
                <div className=''>
                  <span className='relative flex flex-col items-center '>
                    <img src='icons/nodejs.png' alt='' className='w-16 h-14' />
                    <span className=' '>Node.js</span>
                  </span>
                </div>
                <div className=''>
                  <span className='relative flex flex-col items-center '>
                    <img src='icons/express.png' alt='' className='w-16 h-14' />
                    <span className=' '>Express</span>
                  </span>
                </div>
                <div className=''>
                  <span className='relative flex flex-col items-center '>
                    <img src='icons/astro.png' alt='' className='w-16 h-14' />
                    <span className=' '>Astro</span>
                  </span>
                </div>
                <div className=''>
                  <span className='relative flex flex-col items-center '>
                    <img src='icons/html.png' alt='' className='w-14 h-14' />
                    <span className=''>HTML</span>
                  </span>
                </div>
                <div className=''>
                  <span className='relative flex flex-col items-center '>
                    <img src='icons/css.png' alt='' className='w-14 h-14' />
                    <span className=' '>CSS</span>
                  </span>
                </div>
                <div className=''>
                  <span className='relative flex flex-col items-center '>
                    <img
                      src='icons/javascript.png'
                      alt=''
                      className='w-14 h-14'
                    />
                    <span className=' '>JavaScript</span>
                  </span>
                </div>
                <div className=''>
                  <span className='relative flex flex-col items-center '>
                    <img src='icons/git.png' alt='' className='w-16 h-14' />
                    <span className=' '>Git</span>
                  </span>
                </div>
              </div>

              <div className='grid grid-cols-7 pl-16 py-5'></div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default About;
