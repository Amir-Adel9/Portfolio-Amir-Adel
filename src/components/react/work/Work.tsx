const Work = () => {
  return (
    <section className='relative px-48 pt-36 min-h-screen w-full' id='work'>
      <div className=' text-5xl font-tilt text-[#DDD]'>
        <span className='text-2xl opacity-50 font-mono'>Work</span>
        <h1>Projects.</h1>
        <div className='fle justify-center mt-16 text-base g-green-500 grid grid-cols-1 sm:grid-cols-3 grid-rows-1  align-middle '>
          <div className='bg-[#222] w-1/2 h-96 rounded-lg flex flex-col items-center'>
            <img
              src='projects/typemaster.png'
              alt=''
              className='boder border-accent rounded-lg rounded-b-none'
            />
            <span>Type Master ⌨️</span>
            <span>A full-stack typing game</span>
          </div>
          <div className='bg-[#222] w-1/2 h-96 rounded-lg flex flex-col items-center'>
            <img
              src='projects/lolesports.jpg'
              alt=''
              className='border border-accent rounded-lg rounded-b-none'
            />
            <span>LoL Esports ⌨️</span>
            <span className='text-sm font-noto'>A full-stack typing game</span>
          </div>
          <div className='bg-[#222] w-1/2 h-96 rounded-lg flex flex-col items-center justify-'>
            <div className=' w-[80%] rounded-xl rounded-b-non mt-5  flex flex-col'>
              <img
                src='projects/typemaster.png'
                alt=''
                className='rounded-xl mb-3'
              />
              <h1>Type Master ⌨️</h1>
              <span className='font-noto text-sm'>
                A full-stack typing game
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
