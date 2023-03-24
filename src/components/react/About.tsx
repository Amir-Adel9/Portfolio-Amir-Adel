const About = () => {
  return (
    <section
      className='relative w-full min-h-screen pt-10 sm:pt-36 px-5 sm:px-20 md:px-48'
      id='about'
    >
      <div>
        <div className=' text-5xl font-tilt text-[#DDD] flex flex-col  sm:grid grid-rows-1 gap-10 grid-cols-[50%_50%] '>
          <div className='h-full'>
            <span className='text-2xl opacity-50 font-mono'>About Me</span>
            <h1>Briefing.</h1>
            <p className='text-base text-accent font-noto mt-5'>
              I am a full-stack developer who excels at creating <br /> elegant,
              reliable and easy to use web applications using various tools{' '}
              <br /> and technologies. I am a hard worker, I am always eager to
              learn <br /> new stuff, and always striving to deliver to the best
              of my abilities.
            </p>
          </div>
          <div className='h-full'>
            <span className='text-2xl opacity-50 font-mono'>About Me</span>
            <h1>Notable Skills.</h1>
            <div className='text-base text-accent font-noto mt-5'>
              <p>
                These are some languages and tools that either I used to work
                with, I have some level of familiarity with or I learned when I
                first started to code.
              </p>
              <div className='flex items-start'>
                <ul className='text-[#DDD] mt-5'>
                  <li className='before:content-["▹"] before:text-accent before:mr-2 '>
                    C/C++ (First languages learned)
                  </li>
                  <li className='before:content-["▹"] before:text-accent before:mr-2 '>
                    Python (Made a web scrapper and a typing game)
                  </li>
                  <li className='before:content-["▹"] before:text-accent before:mr-2 '>
                    Rust (Currently learning the language)
                  </li>
                  <li className='before:content-["▹"] before:text-accent before:mr-2 '>
                    C#/Unity
                  </li>
                  <li className='before:content-["▹"] before:text-accent before:mr-2 '>
                    Dart/Flutter
                  </li>
                </ul>
                <ul className='text-[#DDD] mt-5 ml-12'>
                  <li className='before:content-["▹"] before:text-accent before:mr-2 '>
                    HTML/CSS
                  </li>
                  <li className='before:content-["▹"] before:text-accent before:mr-2 '>
                    JavaScript
                  </li>
                  <li className='before:content-["▹"] before:text-accent before:mr-2 '>
                    Discord.js
                  </li>
                  <li className='before:content-["▹"] before:text-accent before:mr-2 '>
                    CircleCI
                  </li>
                  <li className='before:content-["▹"] before:text-accent before:mr-2 '>
                    AWS (S3, RDS and Elastic Beanstalk)
                  </li>
                </ul>
              </div>
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
          <section>
            <div className='text-lg text-[#DDD] font-noto mt-10'>
              <div className='grid grid-cols-2 md:grid-cols-5 lg:grid-cols-7 gap-5  py-5'>
                <span className='relative flex flex-col items-center '>
                  <img
                    src='icons/typescript.png'
                    alt=''
                    className='w-14 h-14'
                  />
                  <span>TypeScript</span>
                </span>

                <div>
                  <span className='relative flex flex-col items-center '>
                    <img src='icons/react.png' alt='' className='w-16 h-14' />
                    <span>React</span>
                  </span>
                </div>
                <div>
                  <span className='relative flex flex-col items-center '>
                    <img src='icons/nextjs.png' alt='' className='w-14 h-14' />
                    <span>Next.js</span>
                  </span>
                </div>
                <div>
                  <span className='relative flex flex-col items-center '>
                    <img
                      src='icons/tailwindcss.svg'
                      alt=''
                      className='w-16 h-14'
                    />
                    <span>Tailwind CSS</span>
                  </span>
                </div>
                <div>
                  <span className='relative flex flex-col items-center '>
                    <img src='icons/prisma.png' alt='' className='w-16 h-14' />
                    <span>Prisma</span>
                  </span>
                </div>
                <div>
                  <span className='relative flex flex-col items-center '>
                    <img
                      src='icons/postgresql.png'
                      alt=''
                      className='w-16 h-14'
                    />
                    <span>PostgreSQL</span>
                  </span>
                </div>

                <div>
                  <span className='relative flex flex-col items-center '>
                    <img
                      src='icons/trpc.png'
                      alt=''
                      className='w-16 h-14 rounded-md'
                    />
                    <span>tRPC</span>
                  </span>
                </div>
                <div>
                  <span className='relative flex flex-col items-center '>
                    <img src='icons/nodejs.png' alt='' className='w-16 h-14' />
                    <span>Node.js</span>
                  </span>
                </div>
                <div>
                  <span className='relative flex flex-col items-center '>
                    <img src='icons/express.png' alt='' className='w-16 h-14' />
                    <span>Express</span>
                  </span>
                </div>
                <div>
                  <span className='relative flex flex-col items-center '>
                    <img src='icons/astro.png' alt='' className='w-16 h-14' />
                    <span>Astro</span>
                  </span>
                </div>
                <div>
                  <span className='relative flex flex-col items-center '>
                    <img src='icons/vite.png' alt='' className='w-14 h-14' />
                    <span>Vite</span>
                  </span>
                </div>
                <div>
                  <span className='relative flex flex-col items-center '>
                    <img
                      src='icons/turborepo.png'
                      alt=''
                      className='w-14 h-14'
                    />
                    <span>Turborepo</span>
                  </span>
                </div>
                <div>
                  <span className='relative flex flex-col items-center '>
                    <img
                      src='icons/planetscale.png'
                      alt=''
                      className='w-16 h-14'
                    />
                    <span>Planetscale</span>
                  </span>
                </div>
                <div>
                  <span className='relative flex flex-col items-center '>
                    <img src='icons/git.png' alt='' className='w-16 h-14' />
                    <span>Git</span>
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
