const Work = () => {
  return (
    <section
      className='relative w-full min-h-screen overflow-hidden pt-36 px-5 sm:px-20 md:px-48'
      id='work'
    >
      <div className='text-5xl font-tilt text-[#DDD] '>
        <div>
          <span className='text-2xl opacity-50 font-mono'>Work</span>
          <h1>Projects.</h1>
          <p className='text-base text-accent font-noto mt-5'>
            These are some of the projects that I worked on, the source code is
            and live links are attached to each project card, there are more
            projects available on my github. <br />
            <span className='font-tilt underline'>
              (Note: some of these projects are connected to a free tier
              PlanetScale database that automatically shuts down after 7 days of
              inactivity)
            </span>
          </p>
        </div>
        <div className='flex flex-wrap gap-x-1 gap-y-5 justify-evenly text-base mt-16'>
          <div className='relative w-full h-[480px]  bg-[#222]  flex flex-col items-center duration-300 hover:scale-105 rounded-lg group  lg:w-1/3 xl:w-1/4'>
            <div className='absolute bg-black text-white font-noto w-full h-[40%] flex items-center justify-around duration-200 cursor-default opacity-0 group-hover:opacity-90'>
              <a
                href='https://www.arabianleaguegrounds.live/'
                target={'_blank'}
              >
                <span className='cursor-pointer hover:underline'>
                  Live Website
                </span>
              </a>
            </div>
            <img
              src='projects/alg.png'
              alt=''
              className='w-full h-[40%] rounded-lg rounded-b-none'
            />
            <span className='px-2'>Arabian League Grounds </span>
            <p className='text-sm lg:text-xs 2xl:text-sm font-noto text-center p-2'>
              An all-in-one companion for Riot Games' League of Legends Arabian
              League championship with the ability to view the standings and
              schedule of the matches, while also being able to predict the
              results of the matches and compete with other users via the
              leaderboard. <br />
              <b> (Updated & Maintained with 200+ active users)</b>
            </p>
            <div className='absolute w-[90%] bottom-5 flex flex-wrap justify-center gap-1'>
              <span className='bg-accent text-black p-1 rounded-sm text-xs'>
                TypeScript
              </span>
              <span className='bg-accent text-black p-1 rounded-sm text-xs'>
                React
              </span>
              <span className='bg-accent text-black p-1 rounded-sm text-xs'>
                Next.js
              </span>
              <span className='bg-accent text-black p-1 rounded-sm text-xs'>
                Tailwind CSS
              </span>
              <span className='bg-accent text-black p-1 rounded-sm text-xs'>
                DrizzleORM
              </span>
            </div>
          </div>
          <div className='relative w-full h-[480px] bg-[#222]  flex flex-col items-center duration-300 hover:scale-105 rounded-lg group  lg:w-1/3 xl:w-1/4'>
            <div className='absolute bg-black text-white font-noto w-full h-[40%] flex items-center justify-around duration-200 cursor-default opacity-0 group-hover:opacity-90'>
              <a href='https://catcorner.vercel.app/' target={'_blank'}>
                <span className='cursor-pointer hover:underline'>
                  Live Website
                </span>
              </a>
              <a
                href='https://github.com/Amir-Adel9/cat-corner'
                target={'_blank'}
              >
                <span className='cursor-pointer hover:underline'>
                  Source Code
                </span>
              </a>
            </div>
            <img
              src='projects/catcorner.png'
              alt=''
              className='w-full h-[40%] rounded-lg rounded-b-none'
            />
            <span>Cat Corner 🐱</span>
            <p className='text-sm lg:text-xs 2xl:text-sm font-noto text-center p-2 '>
              A social media like website for posting pictures of cats, includes
              features as posting, liking, commenting and viewing user profiles,
              and any pictures that do not include a cat will be rejected <br />{' '}
              <br /> (still under development with more features to come)
            </p>
            <div className='absolute w-[90%] bottom-5 flex flex-wrap justify-center gap-1'>
              <span className='bg-accent text-black p-1 rounded-sm text-xs'>
                TypeScript
              </span>
              <span className='bg-accent text-black p-1 rounded-sm text-xs'>
                React
              </span>
              <span className='bg-accent text-black p-1 rounded-sm text-xs'>
                Next.js
              </span>
              <span className='bg-accent text-black p-1 rounded-sm text-xs'>
                Tailwind CSS
              </span>
              <span className='bg-accent text-black p-1 rounded-sm text-xs'>
                tRPC
              </span>
              <span className='bg-accent text-black p-1 rounded-sm text-xs'>
                Prisma
              </span>
            </div>
          </div>
          <div className='relative w-full h-[480px] bg-[#222]  flex flex-col items-center duration-300 hover:scale-105 rounded-lg group  lg:w-1/3 xl:w-1/4'>
            <div className='absolute bg-black text-white font-noto w-full h-[40%] flex items-center justify-around duration-200 cursor-default opacity-0 group-hover:opacity-90'>
              <a href='https://typemaster-plus.vercel.app/' target={'_blank'}>
                <span className='cursor-pointer hover:underline'>
                  Live Website
                </span>
              </a>
              <a
                href='https://github.com/Amir-Adel9/typemaster'
                target={'_blank'}
              >
                <span className='cursor-pointer hover:underline'>
                  Source Code
                </span>
              </a>
            </div>
            <img
              src='projects/typemaster.png'
              alt=''
              className='w-full h-[40%] border border-b- border-[#DDD] rounded-lg rounded-b-none'
            />
            <h1 className='text-lg'>Type Master ⌨️</h1>
            <p className='text-sm xl:text-base font-noto text-center p-2'>
              A full stack typing game with features like user registration,
              difficulties, themes, tracking progress and leveling system,
              leader boards and in-game stats such like typing accuracy.
            </p>
            <div className='absolute w-[90%] bottom-5 flex flex-wrap justify-center gap-1'>
              <span className='bg-accent text-black p-1 rounded-sm text-xs'>
                TypeScript
              </span>
              <span className='bg-accent text-black p-1 rounded-sm text-xs'>
                React
              </span>
              <span className='bg-accent text-black p-1 rounded-sm text-xs'>
                Next.js
              </span>
              <span className='bg-accent text-black p-1 rounded-sm text-xs'>
                Tailwind CSS
              </span>
              <span className='bg-accent text-black p-1 rounded-sm text-xs'>
                tRPC
              </span>
              <span className='bg-accent text-black p-1 rounded-sm text-xs'>
                Prisma
              </span>
            </div>
          </div>
          <div className='relative w-full h-[480px] bg-[#222]  flex flex-col items-center duration-300 hover:scale-105 rounded-lg group  lg:w-1/3 xl:w-1/4'>
            <div className='absolute bg-black text-white font-noto w-full h-[40%] flex items-center justify-around duration-200 cursor-default opacity-0 group-hover:opacity-90'>
              <a href='https://amplified-spotify.vercel.app/' target={'_blank'}>
                <span className='cursor-pointer hover:underline'>
                  Live Website
                </span>
              </a>
              <a
                href='https://github.com/Amir-Adel9/amplified-spotify-old'
                target={'_blank'}
              >
                <span className='cursor-pointer hover:underline'>
                  Source Code
                </span>
              </a>
            </div>
            <img
              src='projects/amp.png'
              alt=''
              className='w-full h-[40%] border border-b- border-[#DDD] rounded-lg rounded-b-none'
            />
            <span>Amplified Spotify 🎵</span>
            <p className='text-xs xl:text-sm font-noto text-center p-2'>
              An application that allows users to log in with their spotify
              accounts and view their most listened to tracks.
              <br /> <br /> (still under development with more features to come)
            </p>
            <div className='absolute w-[90%] bottom-5 flex flex-wrap justify-center gap-1'>
              <span className='bg-accent text-black p-1 rounded-sm text-xs'>
                TypeScript
              </span>
              <span className='bg-accent text-black p-1 rounded-sm text-xs'>
                React
              </span>
              <span className='bg-accent text-black p-1 rounded-sm text-xs'>
                Next.js
              </span>
              <span className='bg-accent text-black p-1 rounded-sm text-xs'>
                Tailwind CSS
              </span>
              <span className='bg-accent text-black p-1 rounded-sm text-xs'>
                Spotify API
              </span>
            </div>
          </div>
          <div className='relative w-full h-[480px] bg-[#222]  flex flex-col items-center duration-300 hover:scale-105 rounded-lg group  lg:w-1/3 xl:w-1/4'>
            <div className='absolute bg-black text-white font-noto w-full h-[40%] flex items-center justify-around duration-200 cursor-default opacity-0 group-hover:opacity-90'>
              <a
                href='https://semicolon-amiradel.vercel.app/'
                target={'_blank'}
              >
                <span className='cursor-pointer hover:underline'>
                  Live Website
                </span>
              </a>
              <a
                href='https://github.com/Amir-Adel9/Semicolon-Personal-Website'
                target={'_blank'}
              >
                <span className='cursor-pointer hover:underline'>
                  Source Code
                </span>
              </a>
            </div>
            <img
              src='projects/personal.png'
              alt=''
              className='w-full h-[40%] rounded-lg rounded-b-none'
            />
            <span>Personal Website 🙍‍♂️</span>
            <span className='text-sm font-noto text-center p-2'>
              A vanilla personal website to showcase my hobbies, interests and
              skills, projects. Includes features like a dark mode toggle and an
              image slider.
            </span>
            <div className='absolute w-[90%] bottom-5 flex flex-wrap justify-center gap-1'>
              <span className='bg-accent text-black p-1 rounded-sm text-xs'>
                HTML
              </span>
              <span className='bg-accent text-black p-1 rounded-sm text-xs'>
                CSS
              </span>
              <span className='bg-accent text-black p-1 rounded-sm text-xs'>
                JavaScript
              </span>
            </div>
          </div>
          <div className='relative w-full h-[480px] bg-[#222]  flex flex-col items-center duration-300 hover:scale-105 rounded-lg group  lg:w-1/3 xl:w-1/4'>
            <div className='absolute bg-black text-white font-noto w-full h-[40%] flex items-center justify-around duration-200 cursor-default opacity-0 group-hover:opacity-90'>
              <a
                href='https://github.com/Amir-Adel9/coffee_express'
                target={'_blank'}
              >
                <span className='cursor-pointer hover:underline'>
                  Source Code & Preview
                </span>
              </a>
            </div>
            <img
              src='projects/coffee.PNG'
              alt=''
              className='w-full h-[40%] rounded-lg rounded-b-none'
            />
            <span>Coffee Express ☕</span>
            <span className='text-sm font-noto text-center p-2'>
              A functional coffee shop application made with Flutter and uses
              GetX for state management. It features a home page, a product
              page, a cart, and the ability to add items to favorites.
            </span>
            <div className='absolute w-[90%] bottom-5 flex flex-wrap justify-center gap-1'>
              <span className='bg-accent text-black p-1 rounded-sm text-xs'>
                Dart
              </span>
              <span className='bg-accent text-black p-1 rounded-sm text-xs'>
                Flutter
              </span>
              <span className='bg-accent text-black p-1 rounded-sm text-xs'>
                GetX
              </span>
            </div>
          </div>
          <div className='relative w-full h-[480px] bg-[#222]  flex flex-col items-center duration-300 hover:scale-105 rounded-lg group  lg:w-1/3 xl:w-1/4'>
            <div className='absolute bg-black text-white font-noto w-full h-[40%] flex items-center justify-around duration-200 cursor-default opacity-0 group-hover:opacity-90'>
              <a
                href='https://github.com/Amir-Adel9/store-backend'
                target={'_blank'}
              >
                <span className='cursor-pointer hover:underline'>
                  Source Code & Preview
                </span>
              </a>
            </div>
            <img
              src='projects/shop.webp'
              alt=''
              className='w-full h-[40%] rounded-lg rounded-b-none'
            />
            <span>Shopfront🛒</span>
            <p className='text-xs 2xl:text-sm font-noto text-center p-2'>
              A back-end for an e-commerce website that follows the MVC
              architecture and implements a number of microservices that enable
              features like user accounts, registration, authentication &
              authorization, product management, cart management, order
              management.
            </p>
            <div className='absolute w-[90%] bottom-5 flex flex-wrap justify-center gap-1'>
              <span className='bg-accent text-black p-1 rounded-sm text-xs'>
                TypeScript
              </span>
              <span className='bg-accent text-black p-1 rounded-sm text-xs'>
                Node.js
              </span>
              <span className='bg-accent text-black p-1 rounded-sm text-xs'>
                Express
              </span>
              <span className='bg-accent text-black p-1 rounded-sm text-xs'>
                PostgreSQL
              </span>
              <span className='bg-accent text-black p-1 rounded-sm text-xs'>
                Jasmine
              </span>
            </div>
          </div>
          <div className='relative w-full h-[480px] bg-[#222]  flex flex-col items-center duration-300 hover:scale-105 rounded-lg group  lg:w-1/3 xl:w-1/4'>
            <div className='absolute bg-black text-white font-noto w-full h-[40%] flex items-center justify-around duration-200 cursor-default opacity-0 group-hover:opacity-90'>
              <a
                href='https://github.com/Amir-Adel9/image-processing'
                target={'_blank'}
              >
                <span className='cursor-pointer hover:underline'>
                  Source Code & Preview
                </span>
              </a>
            </div>
            <img
              src='projects/img.jpg'
              alt=''
              className='w-full h-[40%] rounded-lg rounded-b-none'
            />
            <span>Image Processing 📷</span>
            <p className='text-xs 2xl:text-sm font-noto text-center p-2'>
              An API with endpoints for resizing and adding filters to images
              using Sharp.
            </p>
            <div className='absolute w-[90%] bottom-5 flex flex-wrap justify-center gap-1'>
              <span className='bg-accent text-black p-1 rounded-sm text-xs'>
                TypeScript
              </span>
              <span className='bg-accent text-black p-1 rounded-sm text-xs'>
                Node.js
              </span>
              <span className='bg-accent text-black p-1 rounded-sm text-xs'>
                Express
              </span>

              <span className='bg-accent text-black p-1 rounded-sm text-xs'>
                Sharp
              </span>
            </div>
          </div>
          <div className='relative w-full h-[480px] bg-[#222]  flex flex-col items-center duration-300 hover:scale-105 rounded-lg group  lg:w-1/3 xl:w-1/4'>
            <div className='absolute bg-black text-white font-noto w-full h-[40%] flex items-center justify-around duration-200 cursor-default opacity-0 group-hover:opacity-90'>
              <a
                href='https://github.com/Amir-Adel9/weather-journal-app'
                target={'_blank'}
              >
                <span className='cursor-pointer hover:underline'>
                  Source Code & Preview
                </span>
              </a>
            </div>
            <img
              src='projects/weather.png'
              alt=''
              className='w-full h-[40%] border border-b- border-[#DDD] rounded-lg rounded-b-none'
            />
            <span>Weather Journal ☔</span>
            <p className='text-xs 2xl:text-sm font-noto text-center p-2'>
              An application that fetches weather data from the OpenWeatherAPI
              based on a ZIP code input and displays it to the user.
            </p>
            <div className='absolute w-[90%] bottom-5 flex flex-wrap justify-center gap-1'>
              <span className='bg-accent text-black p-1 rounded-sm text-xs'>
                HTML
              </span>
              <span className='bg-accent text-black p-1 rounded-sm text-xs'>
                CSS
              </span>
              <span className='bg-accent text-black p-1 rounded-sm text-xs'>
                JavaScript
              </span>
              <span className='bg-accent text-black p-1 rounded-sm text-xs'>
                Node.js
              </span>
              <span className='bg-accent text-black p-1 rounded-sm text-xs'>
                Express
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
