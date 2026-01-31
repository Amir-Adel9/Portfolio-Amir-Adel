import { motion } from 'framer-motion';
import { profile } from '../../data/profile';
import React from 'react';

const Footer = () => {
  return (
    <footer id='contact' className='py-24 px-6 sm:px-12 lg:px-24 bg-surface/30'>
      <div className='max-w-3xl mx-auto text-center'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className='text-accent font-mono text-sm'>05. What's Next?</span>
          <h2 className='text-4xl sm:text-5xl font-bold text-text mt-4 mb-6'>
            Get In Touch
          </h2>
          <p className='text-text-muted max-w-md mx-auto mb-8'>
            Whether you have a project idea, a question, or just want to say hi,
            I'd love to hear from you.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className='inline-block px-8 py-4 border border-accent text-accent rounded font-mono hover:bg-accent/10 transition-colors'
          >
            Say Hello
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='flex justify-center gap-6 mt-16 mb-8'
        >
          <a
            href={profile.links.github}
            target='_blank'
            rel='noopener noreferrer'
            className='text-text-muted hover:text-accent transition-colors'
            aria-label='GitHub'
          >
            <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z' />
            </svg>
          </a>
          <a
            href={profile.links.linkedin}
            target='_blank'
            rel='noopener noreferrer'
            className='text-text-muted hover:text-accent transition-colors'
            aria-label='LinkedIn'
          >
            <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
            </svg>
          </a>
          <a
            href={`mailto:${profile.email}`}
            className='text-text-muted hover:text-accent transition-colors'
            aria-label='Email'
          >
            <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z' />
              <path d='M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z' />
            </svg>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className='text-text-dim text-sm font-mono'>
            Designed & Built by {profile.name}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
