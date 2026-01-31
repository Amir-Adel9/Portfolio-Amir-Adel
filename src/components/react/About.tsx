import { motion } from 'framer-motion';
import { profile } from '../../data/profile';

const About = () => {
  return (
    <section id='about' className='py-24 px-6 sm:px-12 lg:px-24'>
      <div className='max-w-5xl mx-auto'>
        <div className='grid lg:grid-cols-5 gap-12 items-start'>
          {/* Left content - takes 3 columns */}
          <div className='lg:col-span-3'>
            {/* Section header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className='flex items-center gap-4 mb-8'
            >
              <span className='text-accent font-mono'>01.</span>
              <h2 className='text-2xl sm:text-3xl font-bold text-text'>
                About Me
              </h2>
              <div className='flex-1 h-px bg-surface-light max-w-xs' />
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className='space-y-4 text-text-muted leading-relaxed'
            >
              <p>{profile.bio}</p>
              <p>
                Actively seeking out and adopting new technologies and
                integrating them into real systems where it makes sense.
              </p>
            </motion.div>
          </div>

          {/* Contact card - takes 2 columns, aligned with header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='lg:col-span-2'
          >
            <div className='bg-white/[0.03] backdrop-blur-md rounded-xl border border-white/[0.06] p-6 hover:border-white/[0.1] transition-colors duration-300'>
              {/* Title */}
              <p className='text-accent font-mono text-xs mb-4'>Get in touch</p>

              {/* Name */}
              <h3 className='text-xl font-semibold text-text mb-1'>
                {profile.name}
              </h3>
              <p className='text-text-muted text-sm mb-6'>
                {profile.title} · {profile.location}
              </p>

              {/* Email */}
              <a
                href={`mailto:${profile.email}`}
                className='inline-flex items-center gap-2 text-text-muted hover:text-accent transition-colors text-sm mb-6'
              >
                <svg
                  className='w-4 h-4'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={1.5}
                    d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                  />
                </svg>
                {profile.email}
              </a>

              {/* Social links */}
              <div className='flex gap-4 pt-6 border-t border-white/[0.06]'>
                <a
                  href={profile.links.linkedin}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-text-muted hover:text-text transition-colors'
                  aria-label='LinkedIn'
                >
                  <svg
                    className='w-5 h-5'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                  </svg>
                </a>
                <a
                  href={profile.links.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-text-muted hover:text-text transition-colors'
                  aria-label='GitHub'
                >
                  <svg
                    className='w-5 h-5'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z' />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
