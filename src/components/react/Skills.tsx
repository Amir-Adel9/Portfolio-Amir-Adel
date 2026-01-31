import { motion } from 'framer-motion';
import { skills } from '../../data/skills';

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="text-accent font-mono">03.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-text">Tech Stack</h2>
          <div className="flex-1 h-px bg-surface-light max-w-xs" />
        </motion.div>

        {/* Skills grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-11 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: index * 0.03 }}
              className="flex flex-col items-center gap-2 group"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-surface rounded-lg border border-surface-light group-hover:border-accent/30 transition-colors">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-6 h-6 object-contain"
                />
              </div>
              <span className="text-xs text-text-muted group-hover:text-text transition-colors text-center">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
