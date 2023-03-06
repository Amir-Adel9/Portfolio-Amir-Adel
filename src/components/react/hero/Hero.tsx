import { ReactNode, useEffect, useState } from 'react';
import Arrow from '../svgs/Arrow';
import Github from '../svgs/Github';
import Linkden from '../svgs/Linkden';
import Nav from './Nav';
import Loading from './Loading';
import Link from '../svgs/Link';

export const Hero: React.FC<{ children: ReactNode }> = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  return (
    <>
      {!isLoading ? (
        <section className='h-screen w-full flex-col flex justify-center items-center z-10 text-[#DDD]'>
          <div>
            <h1 className=' font-sono text-5xl text-center sm:text-8xl'>
              Amir Adel
            </h1>
            <h2 className='text-center text-xl font-mono text center sm:text-2xl'>
              Software Developer
            </h2>
          </div>
          <div className='mt-5 flex'>
            <a
              href='https://www.linkedin.com/in/amir-adel312/'
              className='mr-5'
              target={'_blank'}
            >
              <Linkden />
            </a>
            <a href='https://github.com/Amir-Adel9' target={'_blank'}>
              <Github />
            </a>
          </div>
          <a href='https://github.com/Amir-Adel9' target={'_blank'}>
            <h3 className='flex mt-16 text-lg font-mono border-[#DDD] border p-2 rounded-lg duration-300 cursor-pointer hover:scale-110 hover:border-[#64ffda]'>
              <span className='mr-2'>Resume</span>
              <Link />
            </h3>
          </a>
          <Nav>
            <Arrow />
          </Nav>
          <div>{props.children}</div>
        </section>
      ) : (
        <Loading />
      )}
    </>
  );
};
