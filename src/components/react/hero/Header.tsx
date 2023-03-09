import { useEffect, useState } from 'react';
import Hamburger from '../svgs/Hamburger';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    return () => window.removeEventListener('scroll', listenToScroll);
  }, []);

  const listenToScroll = () => {
    let heightToHideFrom = 500;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  return (
    <header
      className={`fixed z-10 top-0 flex items-center justify-end w-full duration-500 bg-[#111] h-[7%] text-[#DDD] font-noto
      ${isVisible ? 'translate-y-0' : '-translate-y-96'}`}
    >
      <b className='absolute left-[10%] font-til'>Amir Adel</b>
      <nav>
        <ul className=' hidden sm:flex font-mono'>
          <li className='mr-14 '>About</li>
          <li className='mr-14'>Work</li>
          <li className='mr-14'>Contact</li>
          <li className='mr-14'>Resume</li>
        </ul>
        <Hamburger />
      </nav>
    </header>
  );
};

export default Header;
