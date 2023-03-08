const Loading = () => {
  return (
    <div className=' relative flex justify-center items-center h-full w-full'>
      <div className='absolute w-[100%] rounded-full left-0'>
        <div className='bg-[#64ffda] h-0.5 rounded-full animate-[load_3s_ease-in-out]'></div>
      </div>
      {/* <div className='absolute w-[50%] rounded-full right-0 rotate-180'>
        <div className='bg-[#64ffda] h-0.5 rounded-full animate-[load_3s_ease-in-out]'></div>
      </div> */}
    </div>
  );
};

export default Loading;
