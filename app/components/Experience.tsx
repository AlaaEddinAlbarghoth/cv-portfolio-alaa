'use client';

import { motion } from 'framer-motion';
import { getExperience } from '@/lib/data';

export default function Experience() {
  const experiences = getExperience();

  return (
    <section id="experience" className="py-16 md:py-24 bg-foreground/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Work <span className="text-primary">Experience</span>
          </h2>

          <div className="relative">
            {/* Left border timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-600/60" />

            {experiences.map((exp, index) => (
              <motion.article
                key={index}
                className="relative pl-12 pb-12 last:pb-0"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-blue-600 ring-4 ring-background shadow-lg flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-background" />
                </div>

                <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200/20">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="text-sm text-blue-400 font-semibold mb-2 md:mb-0">{exp.period}</div>
                    <div className="text-sm text-gray-400 font-medium">{exp.title}</div>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-100">{exp.company}</h3>
                  
                  <ul className="space-y-4">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start gap-3">
                        <span className="text-blue-400 mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-400" />
                        <span className="text-gray-300 leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
