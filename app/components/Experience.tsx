'use client';

import { motion } from 'framer-motion';
import { getExperience } from '@/lib/data';

export default function Experience() {
  const experiences = getExperience();

  return (
    <section id="experience" className="section-padding bg-foreground/5">
      <div className="max-w-6xl mx-auto">
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
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-primary/20" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 ? 'md:ml-auto md:pl-12' : 'md:mr-auto md:pr-12'
                } md:w-1/2`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-background ${
                    index % 2 === 0
                      ? 'md:left-0 md:-translate-x-1/2 left-0'
                      : 'md:right-0 md:translate-x-1/2 left-0'
                  }`}
                />

                <div className="bg-background rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 ml-8 md:ml-0 transform hover:-translate-y-1">
                  <div className="text-sm text-primary font-semibold mb-2">{exp.period}</div>
                  <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                  <h4 className="text-lg text-secondary mb-4">{exp.company}</h4>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start gap-2 text-secondary">
                        <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
