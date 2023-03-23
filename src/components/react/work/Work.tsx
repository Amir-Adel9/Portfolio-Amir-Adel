const Work = () => {
  return (
    <section
      className='relative w-full min-h-screen pt-36 px-5 sm:px-20 md:px-48'
      id='work'
    >
      <div className='text-5xl font-tilt text-[#DDD] '>
        <span className='text-2xl opacity-50 font-mono'>Work</span>
        <h1>Projects.</h1>
        <p className='text-base text-accent font-noto mt-5'>
          These are some of the projects that I worked on, the
        </p>

        <div className='flex flex-wrap gap-5 justify-center text-base mt-16 '>
          <div className='relative bg-[#222] w-full md:w-1/3 lg:w-1/4 h-96 rounded-lg flex flex-col items-center'>
            <img
              src='projects/typemaster.png'
              alt=''
              className='w-full h-[40%] border border-b- border-[#DDD] rounded-lg rounded-b-none'
            />
            <span>Type Master ⌨️</span>
            <p className='text-sm font-noto'>A full-stack typing game </p>
            <div className='absolute w-[90%] bottom-5 flex justify-between '>
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
                Tailwind Css
              </span>
              <span className='bg-accent text-black p-1 rounded-sm text-xs'>
                tRPC
              </span>
              <span className='bg-accent text-black p-1 rounded-sm text-xs'>
                Prisma
              </span>
            </div>
          </div>
          <div className='bg-[#222] w-full md:w-1/3 lg:w-1/4 h-96 rounded-lg flex flex-col items-center'>
            <img
              src='projects/lolesports.jpg'
              alt=''
              className='w-full h-[40%] rounded-lg rounded-b-none'
            />
            <span>LoL Esports ⌨️</span>
            <span className='text-sm font-noto'>A full-stack typing game</span>
          </div>
          <div className='bg-[#222] w-full md:w-1/3 lg:w-1/4 h-96 rounded-lg flex flex-col items-center'>
            <img
              src='projects/lolesports.jpg'
              alt=''
              className='w-full h-[40%] rounded-lg rounded-b-none'
            />
            <span>LoL Esports ⌨️</span>
            <span className='text-sm font-noto'>A full-stack typing game</span>
          </div>
          <div className='bg-[#222] w-full md:w-1/3 lg:w-1/4 h-96 rounded-lg flex flex-col items-center'>
            <img
              src='projects/lolesports.jpg'
              alt=''
              className='w-full h-[40%] rounded-lg rounded-b-none'
            />
            <span>LoL Esports ⌨️</span>
            <span className='text-sm font-noto'>A full-stack typing game</span>
          </div>
          <div className='bg-[#222] w-full md:w-1/3 lg:w-1/4 h-96 rounded-lg flex flex-col items-center'>
            <img
              src='projects/lolesports.jpg'
              alt=''
              className='w-full h-[40%] rounded-lg rounded-b-none'
            />
            <span>LoL Esports ⌨️</span>
            <span className='text-sm font-noto'>A full-stack typing game</span>
          </div>
          <div className='bg-[#222] w-full md:w-1/3 lg:w-1/4 h-96 rounded-lg flex flex-col items-center'>
            <img
              src='projects/lolesports.jpg'
              alt=''
              className='w-full h-[40%] rounded-lg rounded-b-none'
            />
            <span>LoL Esports ⌨️</span>
            <span className='text-sm font-noto'>A full-stack typing game</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
