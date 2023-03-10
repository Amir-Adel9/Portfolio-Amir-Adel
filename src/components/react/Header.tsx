import { useEffect, useState } from 'react';
import Drawer from './Drawer';
import Hamburger from './svgs/Hamburger';
import HeaderLink from './svgs/HeaderLink';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeNav, setActiveNav] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    return () => window.removeEventListener('scroll', listenToScroll);
  }, []);

  const listenToScroll = () => {
    let aboutHeight = 500;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > aboutHeight) {
      setIsVisible(true);
      setActiveNav('About');
    } else {
      setIsVisible(false);
      setActiveNav('');
    }
  };

  return (
    <header
      className={`fixed z-10 top-0 flex items-center justify-between w-full duration-500 bg-[#111] h-[7%] text-[#DDD] font-noto
      ${isVisible ? 'translate-y-0' : '-translate-y-[70rem]'}`}
    >
      <span
        className='ml-4 sm:ml-12 md:ml-28 flex justify-center items-center cursor-pointer'
        onClick={(e) => {
          e.preventDefault();
          const elementToView = document.getElementById('home');
          elementToView?.scrollIntoView();
        }}
      >
        <img src='favicon.png' alt='' className='w-7 h-7 mr-2' />
        <b>Amir Adel</b>
      </span>

      <nav>
        <ul className=' hidden sm:flex font-mono'>
          <li
            className={`mr-14 cursor-pointer  duration-300 hover:opacity-100 hover:scale-105 after:content-[""] after:bg-[#DDD] after:duration-300 after:h-1 after:w-[0%] after:left-0 after:absolute after:-bottom-1  hover:after:w-full ${
              activeNav === 'About'
                ? 'opacity-100 scale-105 after:w-full'
                : 'opacity-50'
            }`}
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
              href='https://drive.google.com/file/d/1HaptcCYqe62Uxlyf01o3GlsnYT1gGpmY/view'
              className='flex items-center'
              target={'_blank'}
            >
              <span className='mr-1'>Resume</span>
              <HeaderLink />
            </a>
          </li>
        </ul>
        <Drawer />
      </nav>
    </header>
  );
};

export default Header;
