'use client';

import { motion } from 'framer-motion';
import { getSkills } from '@/lib/data';

export default function Skills() {
  const skills = getSkills();
  const skillCategories = Object.entries(skills);

  return (
    <section id="skills" className="section-padding bg-foreground/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Skills & <span className="text-primary">Expertise</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map(([category, items], index) => (
              <motion.div
                key={category}
                className="bg-background rounded-2xl p-6 md:p-8 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6 text-primary">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="px-4 py-2 bg-foreground/5 hover:bg-primary/10 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:text-primary"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + skillIndex * 0.05, duration: 0.3 }}
                      viewport={{ once: true }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
