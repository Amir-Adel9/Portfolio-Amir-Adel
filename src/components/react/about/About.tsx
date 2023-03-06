import { useEffect, useRef, useState } from 'react';

const About = () => {
  const [isInjured, setIsInjured] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

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
    <section>
      <div className='absolute left-[10%] top-[40%]'>
        <h1 className='font-sono text-5xl text-[#DDD] mb-'>
          <span>Hi, I'm Amir.</span>
          <img
            src={`${!isInjured ? 'hat.png' : 'hatInjured.png'}`}
            alt=''
            className='-translate-y-2 w-28 h-28 inline hover:animate-bounce cursor-pointer'
            ref={imageRef}
            onClick={() => {
              setIsInjured((prevState) => !prevState);
            }}
          />
        </h1>
        <h2 className='text-[#64ffda]  text-2xl font-sono'>
          I'm a passionate, self taught software developer
        </h2>
        <h3 className='text-[#64ffda] text-2xl font-sono'>
          with an ambition to leave a mark on the software world.
        </h3>
        <h3 className='text-[#64ffda] text-2xl font-sono'>
          I excel at creating full-stack web applications
        </h3>
      </div>
    </section>
  );
};

export default About;
