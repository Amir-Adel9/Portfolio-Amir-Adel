import { ReactNode, useEffect, useRef, useState } from 'react';
import Loading from './Loading';
import Link from './svgs/Link';

const Hero: React.FC<{ children: ReactNode }> = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isInjured, setIsInjured] = useState(false);

  const titleRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLLIElement>(null);
  const workRef = useRef<HTMLLIElement>(null);
  const contactRef = useRef<HTMLLIElement>(null);
  const resumeRef = useRef<HTMLLIElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      titleRef.current?.classList.remove('-translate-x-[900px]');
      aboutRef.current?.classList.remove('translate-y-[90px]');
      workRef.current?.classList.remove('translate-y-[120px]');
      contactRef.current?.classList.remove('translate-y-[150px]');
      resumeRef.current?.classList.remove('translate-y-[170px]');
    }, 0);

    setTimeout(() => {
      workRef.current?.classList.remove('duration-700');
      workRef.current?.classList.add('duration-300');
      contactRef.current?.classList.remove('duration-[1200ms]');
      contactRef.current?.classList.add('duration-300');
      resumeRef.current?.classList.remove('duration-[1500ms]');
      resumeRef.current?.classList.add('duration-300');
    }, 3000);
  }, []);

  useEffect(() => {
    if (isInjured) {
      imageRef.current?.classList.remove(
        'hover:animate-bounce',
        'cursor-pointer'
      );
      imageRef.current?.classList.add('cursor-cell');
    } else {
      imageRef.current?.classList.add('hover:animate-bounce', 'cursor-pointer');
      imageRef.current?.classList.remove('cursor-cell');
    }
  }, [isInjured]);

  return (
    <>
      {!isLoading ? (
        <section
          className='relative w-full min-h-screen z-10 flex flex-col pt-20 px-5 sm:pt-[17.5rem] sm:px-20 md:px-48 text-[#DDD]'
          id='home'
        >
          <div className='grid grid-cols-[60%_auto] md:grid-cols-[45%_auto] weird:grid-cols-[40%_auto] md:w-full md:absolute md:top-[30%]'>
            <div>
              <h1
                className='font-tilt text-4xl md:text-9xl -translate-x-[900px] duration-500'
                ref={titleRef}
              >
                Hi, I'm Amir.
              </h1>
              <h2 className='font-tilt text-3xl md:text-5xl mb-5'>
                I build things for the web.
              </h2>
              <div className='text-accent text-base sm:text-lg font-noto'>
                <span className='block'>
                  I'm a passionate, self taught software developer
                </span>
                <span className='block'>
                  with a love for gaming, music and coding, and
                </span>
                <span className='block'>
                  an ambition to leave a mark on the software world.
                </span>
              </div>
            </div>
            <img
              src={`${!isInjured ? 'hat.png' : 'hatInjured.png'}`}
              alt=''
              className='-translate-y-7 w-40 h-40 inline hover:animate-bounce cursor-pointer opacity-0z'
              ref={imageRef}
              onClick={() => {
                setIsInjured((prevState) => !prevState);
              }}
            />
            <nav>
              <ul className='block sm:flex mt-10 font-tilt text-xl md:text-3xl lg:text-5xl'>
                <li
                  ref={aboutRef}
                  onClick={(e) => {
                    e.preventDefault();
                    const elementToView = document.getElementById('about');
                    elementToView?.scrollIntoView();
                  }}
                  className='relative translate-y-[90px] opacity-50 hover:opacity-100 mr-14 sm:hover:-translate-y-4 duration-300 cursor-pointer after:content-[""] after:bg-[#DDD] after:duration-300 after:h-1 after:md:h-2 after:w-[0%] after:left-0 after:absolute after:-bottom-1 after:md:-bottom-2 hover:after:w-full'
                >
                  About
                </li>
                <li
                  ref={workRef}
                  onClick={(e) => {
                    e.preventDefault();
                    const elementToView = document.getElementById('work');
                    elementToView?.scrollIntoView();
                  }}
                  className='relative translate-y-[120px] duration-700 mr-14 opacity-50 hover:opacity-100 sm:hover:-translate-y-4  cursor-pointer after:content-[""] after:bg-[#DDD] after:duration-300 after:h-1 after:md:h-2 after:w-[0%] after:left-0 after:absolute after:-bottom-1 after:md:-bottom-2 hover:after:w-full'
                >
                  Work
                </li>
                <li
                  ref={contactRef}
                  onClick={(e) => {
                    e.preventDefault();
                    const elementToView = document.getElementById('contact');
                    elementToView?.scrollIntoView();
                  }}
                  className='relative mr-14 translate-y-[150px] opacity-50 hover:opacity-100  sm:hover:-translate-y-4 hover: duration-[1200ms] cursor-pointer after:content-[""] after:bg-[#DDD] after:duration-300 after:md:h-2 after:h-1 after:w-[0%] after:left-0 after:absolute after:-bottom-1 after:md:-bottom-2 hover:after:w-full'
                >
                  Contact
                </li>
                <li
                  ref={resumeRef}
                  className='relative duration-[1500ms] translate-y-[170px] opacity-50 hover:opacity-100  sm:hover:-translate-y-4 cursor-pointer after:content-[""] after:bg-[#DDD] after:duration-300 after:h-1 after:md:h-2 after:w-[0%] after:left-0 after:absolute after:-bottom-1 after:md:-bottom-2 hover:after:w-full'
                >
                  <div>
                    <a
                      href='https://drive.google.com/file/d/1HaptcCYqe62Uxlyf01o3GlsnYT1gGpmY/view'
                      className='flex items-center'
                      target={'_blank'}
                    >
                      <span className='mr-3'>Resume</span> <Link />
                    </a>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
          <div>{props.children}</div>
        </section>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Hero;
