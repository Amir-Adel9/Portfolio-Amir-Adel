import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, type ProjectStatus } from '../../data/projects';

type FilterType = 'all' | 'featured' | 'archived';

const statusConfig: Record<ProjectStatus, { label: string; class: string }> = {
  featured: { label: 'Featured', class: 'bg-accent/20 text-accent' },
  active: { label: 'Active', class: 'bg-green-500/20 text-green-400' },
  internal: { label: 'Internal', class: 'bg-yellow-500/20 text-yellow-400' },
  archived: { label: 'Archived', class: 'bg-surface-light text-text-muted' },
  unmaintained: { label: 'Unmaintained', class: 'bg-orange-500/20 text-orange-400' },
};

const Projects = () => {
  const [filter, setFilter] = useState<FilterType>('all');
  const [showArchived, setShowArchived] = useState(false);

  const filteredProjects = projects.filter((project) => {
    if (filter === 'all') {
      return project.status !== 'archived' || showArchived;
    }
    if (filter === 'featured') {
      return project.status === 'featured' || project.status === 'unmaintained';
    }
    return project.status === filter;
  });

  const archivedCount = projects.filter((p) => p.status === 'archived').length;

  const filterButtons: { key: FilterType; label: string; count?: number }[] = [
    { key: 'all', label: 'All' },
    { key: 'featured', label: 'Featured' },
    { key: 'archived', label: 'Archived', count: archivedCount },
  ];

  // Projects that should have centered/contained images (logos)
  const logoProjects = ['property-hub'];
  // Projects that need white background
  const whiteBgProjects = ['property-hub'];

  return (
    <section id="projects" className="py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-8"
        >
          <span className="text-accent font-mono text-sm">04.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-text">Projects</h2>
          <div className="flex-1 h-px bg-surface-light max-w-xs" />
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {filterButtons.map((btn) => (
            <button
              key={btn.key}
              onClick={() => {
                setFilter(btn.key);
                setShowArchived(btn.key === 'archived');
              }}
              className={`px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                filter === btn.key
                  ? 'bg-accent text-background font-medium'
                  : 'bg-surface border border-surface-light text-text-muted hover:text-text hover:border-text-dim'
              }`}
            >
              {btn.label}
              {btn.count !== undefined && ` (${btn.count})`}
            </button>
          ))}
        </motion.div>

        {/* Projects list */}
        <div className="space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isLogo = logoProjects.includes(project.id);
              const hasWhiteBg = whiteBgProjects.includes(project.id);
              const hasLink = project.liveUrl || project.sourceUrl;
              const linkUrl = project.liveUrl || project.sourceUrl;
              
              const CardWrapper = hasLink ? 'a' : 'div';
              const cardProps = hasLink
                ? { href: linkUrl, target: '_blank', rel: 'noopener noreferrer' }
                : {};

              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.98 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                  className={project.status === 'archived' ? 'opacity-60 hover:opacity-100 transition-opacity' : ''}
                >
                  <CardWrapper
                    {...cardProps}
                    className={`group grid md:grid-cols-[280px_1fr] gap-6 p-5 rounded-xl border border-surface-light hover:border-accent/20 bg-surface/30 transition-colors duration-300 ${hasLink ? 'cursor-pointer' : ''}`}
                  >
                    {/* Image container - fixed aspect ratio */}
                    <div className={`relative aspect-video md:aspect-[4/3] rounded-lg overflow-hidden ${hasWhiteBg ? 'bg-white' : 'bg-surface-light'}`}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className={`absolute inset-0 w-full h-full ${
                          isLogo ? 'object-contain p-8' : 'object-cover'
                        }`}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/favicon.png';
                          (e.target as HTMLImageElement).className = 'absolute inset-0 w-full h-full object-contain p-8 opacity-50';
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col min-h-[180px]">
                      {/* Header */}
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <h3 className="text-lg font-semibold text-text group-hover:text-accent transition-colors flex items-center gap-2">
                            {project.title}
                            {hasLink && (
                              <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            )}
                          </h3>
                          {/* Category and Year - highlighted */}
                          <div className="flex items-center gap-3 mt-2">
                            <span className="px-2.5 py-0.5 text-xs font-medium bg-accent/10 text-accent rounded-full border border-accent/20">
                              {project.category}
                            </span>
                            <span className="text-text font-medium text-sm">{project.year}</span>
                          </div>
                        </div>
                        <span className={`px-2 py-0.5 text-xs rounded shrink-0 ${statusConfig[project.status].class}`}>
                          {statusConfig[project.status].label}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-text-muted text-sm leading-relaxed mb-4 flex-grow">
                        {project.description}
                      </p>

                      {/* Tech badges - show all */}
                      <div className="flex flex-wrap gap-1.5 mt-auto">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 text-xs text-text-muted bg-surface-light rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardWrapper>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Show archived button */}
        {filter === 'all' && !showArchived && archivedCount > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-10 text-center"
          >
            <button
              onClick={() => setShowArchived(true)}
              className="px-6 py-3 bg-surface border border-surface-light text-text-muted hover:text-text hover:border-accent rounded-lg text-sm transition-colors"
            >
              Show {archivedCount} archived projects
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
