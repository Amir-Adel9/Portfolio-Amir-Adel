import { useState } from 'react';
import Hamburger from './svgs/Hamburger';
import HeaderLink from './svgs/HeaderLink';

const Drawer = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <Hamburger
        onClick={() => {
          setIsOpened(!isOpened);
        }}
      />

      {isOpened ? (
        <div className='bg-[#222] fixed z-20 h-screen w-full right-0 flex justify-center items-center sm:hidden'>
          <nav className=''>
            <ul className='font-tilt text-2xl'>
              <li
                className={`mr-14 cursor-pointer  duration-300 hover:opacity-100 hover:scale-105 after:content-[""] after:bg-[#DDD] after:duration-300 after:h-1 after:w-[0%] after:left-0 after:absolute after:-bottom-1  hover:after:w-full`}
                onClick={(e) => {
                  e.preventDefault();
                  const elementToView = document.getElementById('about');
                  setIsOpened(false);
                  elementToView?.scrollIntoView();
                }}
              >
                About
              </li>
              <li
                className='mr-14 cursor-pointer opacity-50 duration-300 hover:opacity-100 hover:scale-105 after:content-[""] after:bg-[#DDD] after:duration-300 after:h-1 after:w-[0%] after:left-0 after:absolute after:-bottom-1  hover:after:w-full'
                onClick={(e) => {
                  e.preventDefault();
                  const elementToView = document.getElementById('work');
                  setIsOpened(false);
                  elementToView?.scrollIntoView();
                }}
              >
                Work
              </li>
              <li
                className='mr-14 cursor-pointer opacity-50 duration-300 hover:opacity-100 hover:scale-105 after:content-[""] after:bg-[#DDD] after:duration-300 after:h-1 after:w-[0%] after:left-0 after:absolute after:-bottom-1  hover:after:w-full'
                onClick={(e) => {
                  e.preventDefault();
                  const elementToView = document.getElementById('contact');
                  setIsOpened(false);
                  elementToView?.scrollIntoView();
                }}
              >
                Contact
              </li>
              <li
                onClick={() => setIsOpened(false)}
                className='mr-14 cursor-pointer opacity-50 duration-300 hover:opacity-100 hover:scale-105 after:content-[""] after:bg-[#DDD] after:duration-300 after:h-1 after:w-[0%] after:left-0 after:absolute after:-bottom-1  hover:after:w-full'
              >
                <a
                  href='https://drive.google.com/file/d/1QwfFaBky8AvjiEMeIvp4_08RlKn5aUL6/view?usp=sharing'
                  className='flex items-center'
                  target={'_blank'}
                >
                  <span className='mr-1'>Resume</span>
                  <HeaderLink />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Drawer;
