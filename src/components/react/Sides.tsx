import { useEffect, useState } from 'react';
import Nav from './Nav';
import Arrow from './svgs/Arrow';
import Email from './svgs/Email';
import Github from './svgs/Github';
import Linkedin from './svgs/Linkeden';

const Sides = () => {
  const [isRotated, setIsRotated] = useState(false);
  const [finishedLoading, setFinishedLoading] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    return () => window.removeEventListener('scroll', listenToScroll);
  }, []);

  useEffect(() => {
    setTimeout(() => setFinishedLoading(true), 0);
  }, []);

  const listenToScroll = () => {
    let heightToHideFrom = 500;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      setIsRotated(true);
    } else {
      setIsRotated(false);
    }
  };

  return (
    <div className={`${!finishedLoading ? 'opacity-0' : ''} duration-1000`}>
      <div className='fixed z-50 items-center bottom-0 left-[3%] sm:flex flex-col mt-10 after:content-[""] after:bg-[#DDD] after:w-[1px] after:h-24 hidden'>
        <span className='mb-3 cursor-pointer'>
          <a href='https://github.com/Amir-Adel9' target={'_blank'}>
            <Github />
          </a>
        </span>
        <span className='mb-3 cursor-pointer'>
          <a href='https://www.linkedin.com/in/amir-adel312/' target={'_blank'}>
            <Linkedin />
          </a>
        </span>
        <span className='mb-3 cursor-pointer'>
          <a href='mailto:amiradel899@gmail.com' target={'_blank'}>
            <Email />
          </a>
        </span>
      </div>
      <div className='fixed z-50 after:animate-arrow after:-rotate-180 items-center bottom-0 right-[3%] sm:flex flex-col mt-10 after:content-[""] after:bg-[#DDD] after:w-[1px] after:h-24 hidden'>
        <Nav isClicked={isRotated}>
          <Arrow isClicked={isRotated} isClickedHandler={setIsRotated} />
        </Nav>
      </div>
    </div>
  );
};

export default Sides;
