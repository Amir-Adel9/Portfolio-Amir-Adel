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
        <div className='bg-[#222] fixed z-20 h-screen w-[40%] right-0 sm:hidden'>
          <nav className=''>
            <ul className='font-mono'>
              <li
                className={`mr-14 cursor-pointer  duration-300 hover:opacity-100 hover:scale-105 after:content-[""] after:bg-[#DDD] after:duration-300 after:h-1 after:w-[0%] after:left-0 after:absolute after:-bottom-1  hover:after:w-full`}
                onClick={(e) => {
                  e.preventDefault();
                  const elementToView = document.getElementById('about');
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
                  elementToView?.scrollIntoView();
                }}
              >
                Contact
              </li>
              <li className='mr-14 cursor-pointer opacity-50 duration-300 hover:opacity-100 hover:scale-105 after:content-[""] after:bg-[#DDD] after:duration-300 after:h-1 after:w-[0%] after:left-0 after:absolute after:-bottom-1  hover:after:w-full'>
                <a
                  href='https://drive.google.com/file/d/1ha7RP4XMNdwdScSKnUXt-hXr6wwJ0yXP/view'
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
