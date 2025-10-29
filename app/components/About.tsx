'use client';

import { motion } from 'framer-motion';
import { getPersonalInfo } from '@/lib/data';

export default function About() {
  const personal = getPersonalInfo();

  const highlights = [
    { value: '8+', label: 'Years Experience' },
    { value: '50M+', label: 'Users Reached' },
    { value: '10+', label: 'Projects Delivered' },
    { value: '35%', label: 'Build Time Reduced' },
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            About <span className="text-primary">Me</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-2xl bg-foreground/5 hover:bg-foreground/10 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-primary mb-2">{item.value}</div>
                <div className="text-secondary">{item.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="prose prose-lg mx-auto max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-secondary leading-relaxed text-center">
              {personal.summary}
            </p>
          </motion.div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 text-secondary">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{personal.location}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
