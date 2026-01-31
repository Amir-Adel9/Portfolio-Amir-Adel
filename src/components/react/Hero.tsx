import { useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../../data/profile';
import React from 'react';

const Hero = () => {
  const [isInjured, setIsInjured] = useState(false);

  const scrollTo = (id: string) => {
    const lenis = (window as any).lenis;
    const target = document.getElementById(id);
    if (lenis && target) {
      lenis.scrollTo(target);
    } else {
      target?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Work' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <section
      id='home'
      className='relative min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-24'
    >
      {/* Background */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-1/4 -left-32 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px]' />
        <div className='absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]' />
      </div>

      <div className='max-w-6xl mx-auto w-full relative z-10'>
        <div className='grid lg:grid-cols-[1fr_auto] gap-12 items-center'>
          {/* Content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className='text-accent font-mono text-sm sm:text-base mb-6'
            >
              Hi, my name is
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='text-4xl sm:text-6xl lg:text-7xl text-text mb-4 font-tilt'
            >
              {profile.name}.
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className='text-2xl sm:text-4xl lg:text-5xl text-text-muted mb-8 font-tilt'
            >
              I build things for the web.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className='text-text-muted text-base sm:text-lg max-w-xl leading-relaxed mb-10'
            >
              {profile.shortBio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className='flex flex-wrap items-center gap-4'
            >
              <button
                onClick={() => scrollTo('projects')}
                className='px-5 py-2.5 bg-accent text-background text-sm font-medium rounded-md hover:bg-accent/85 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/20 transition-all duration-200'
              >
                View My Work
              </button>
              <a
                href={profile.links.resume}
                target='_blank'
                rel='noopener noreferrer'
                className='px-5 py-2.5 text-sm font-medium rounded-md border border-accent text-accent hover:-translate-y-0.5 transition-all duration-200'
              >
                Resume
              </a>
            </motion.div>
          </div>

          {/* Hat friend */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className='hidden lg:block'
          >
            <div className='relative'>
              <div
                className='absolute inset-0 bg-accent/20 rounded-full blur-3xl scale-125 animate-pulse'
                style={{ animationDuration: '4s' }}
              />
              <img
                src={isInjured ? '/hatInjured.png' : '/hat.png'}
                alt=''
                className={`relative w-44 h-44 cursor-pointer transition-transform duration-300 ${
                  isInjured ? 'rotate-6' : 'hover:scale-105'
                }`}
                onClick={() => setIsInjured((prev) => !prev)}
              />
            </div>
          </motion.div>
        </div>

        {/* Big Bold Navigation with Y translation */}
        <motion.nav
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className='mt-20'
        >
          <ul className='flex flex-wrap gap-x-10 gap-y-4'>
            {navItems.map((item, i) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
              >
                <button
                  onClick={() => scrollTo(item.id)}
                  className='group relative text-3xl sm:text-4xl md:text-5xl font-tilt text-text-muted opacity-60 hover:opacity-100 hover:text-text hover:-translate-y-2 transition-all duration-300'
                >
                  <span className='relative'>
                    {item.label}
                    <span className='absolute -bottom-2 left-0 w-0 h-2 bg-current group-hover:w-full transition-all duration-300' />
                  </span>
                </button>
              </motion.li>
            ))}
            <motion.li
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.2 }}
            >
              <a
                href={profile.links.resume}
                target='_blank'
                rel='noopener noreferrer'
                className='group relative text-3xl sm:text-4xl md:text-5xl font-tilt text-text-muted opacity-60 hover:opacity-100 hover:text-text hover:-translate-y-2 transition-all duration-300 inline-flex items-center gap-3'
              >
                <span className='relative'>
                  Resume
                  <span className='absolute -bottom-2 left-0 w-0 h-2 bg-current group-hover:w-full transition-all duration-300' />
                </span>
                <svg
                  className='w-6 h-6 sm:w-8 sm:h-8'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                  />
                </svg>
              </a>
            </motion.li>
          </ul>
        </motion.nav>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className='absolute bottom-8 left-1/2 -translate-x-1/2'
      >
        <button
          onClick={() => scrollTo('about')}
          className='text-text-muted hover:text-accent transition-colors'
          aria-label='Scroll down'
        >
          <motion.svg
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className='w-5 h-5'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M19 14l-7 7m0 0l-7-7m7 7V3'
            />
          </motion.svg>
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
