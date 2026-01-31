import React from 'react';
import { motion } from 'framer-motion';
import { experiences, highlights, certifications } from '../../data/experience';

const Experience = () => {
  return (
    <section
      id='experience'
      className='py-24 px-6 sm:px-12 lg:px-24 bg-surface/30'
    >
      <div className='max-w-4xl mx-auto'>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='flex items-center gap-4 mb-12'
        >
          <span className='text-accent font-mono'>02.</span>
          <h2 className='text-2xl sm:text-3xl font-bold text-text'>
            Experience
          </h2>
          <div className='flex-1 h-px bg-surface-light max-w-xs' />
        </motion.div>

        {/* Work Experience */}
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className='mb-12'
          >
            <div className='mb-4'>
              <h3 className='text-xl font-semibold text-text'>
                {exp.title}
                <span className='text-accent'> @ </span>
                {exp.companyUrl ? (
                  <a
                    href={exp.companyUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-accent hover:underline'
                  >
                    {exp.company}
                  </a>
                ) : (
                  <span className='text-accent'>{exp.company}</span>
                )}
              </h3>
              <p className='text-text-muted font-mono text-sm mt-1'>
                {exp.period} · {exp.location}
              </p>
            </div>

            <ul className='space-y-2'>
              {exp.highlights.map((highlight, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                  className='flex gap-3 text-text-muted text-sm'
                >
                  <span className='text-accent mt-0.5'>▹</span>
                  <span>{highlight}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='mt-16'
        >
          <h3 className='text-lg font-semibold text-text mb-6'>Highlights</h3>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {highlights.map((highlight, index) => {
              const CardWrapper = highlight.url ? 'a' : 'div';
              const cardProps = highlight.url
                ? {
                    href: highlight.url,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  }
                : {};

              return (
                <motion.div
                  key={highlight.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <CardWrapper
                    {...cardProps}
                    className={`block p-5 rounded-xl border transition-all duration-300 h-full bg-surface border-surface-light ${
                      highlight.url
                        ? 'hover:border-accent/40 hover:bg-accent/10 cursor-pointer group'
                        : ''
                    }`}
                  >
                    {/* Type badge */}
                    <div className='flex items-center justify-between mb-3'>
                      <span
                        className={`px-2 py-0.5 text-xs font-mono rounded capitalize ${'bg-accent/20 text-accent'}`}
                      >
                        {highlight.type}
                      </span>
                      <span className='text-text-dim text-xs font-mono'>
                        {highlight.year}
                      </span>
                    </div>

                    {/* Title with link indicator */}
                    <h4 className='font-semibold text-text mb-2 flex items-center gap-2'>
                      {highlight.title}
                      {highlight.url && (
                        <svg
                          className='w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity'
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
                      )}
                    </h4>

                    <p className='text-sm text-text-muted leading-relaxed'>
                      {highlight.description}
                    </p>
                  </CardWrapper>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='mt-12'
        >
          <h3 className='text-lg font-semibold text-text mb-6'>
            Certifications
          </h3>
          <div className='space-y-3'>
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className='flex items-start gap-3'
              >
                <span className='text-accent mt-0.5'>✓</span>
                <div>
                  <p className='text-text text-sm'>{cert.title}</p>
                  <p className='text-text-muted text-xs'>
                    {cert.issuer} · {cert.year}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
