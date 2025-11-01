'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { getExperience } from '@/lib/data';

export default function Experience() {
  const experiences = getExperience();
  const prefersReducedMotion = useReducedMotion();

  // Enhanced container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      }
    }
  };

  // Enhanced item animation variants with more sophisticated staggering
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom cubic-bezier for smooth motion
      }
    }
  };

  // Parallax effect component
  const ParallaxCard = ({ children, index }: { children: React.ReactNode; index: number }) => {
    return (
      <motion.article
        className="relative pl-12 pb-12 last:pb-0"
        variants={itemVariants}
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        style={{
          y: prefersReducedMotion ? 0 : undefined,
        }}
        whileHover={{ 
          scale: 1.02,
          transition: { duration: 0.2 }
        }}
      >
        {/* Enhanced timeline dot with pulse animation */}
        <motion.div 
          className="absolute left-0 top-2 w-8 h-8 rounded-full bg-blue-600 ring-4 ring-background shadow-lg flex items-center justify-center"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ 
            delay: (index * 0.2) + 0.1,
            type: 'spring',
            stiffness: 200,
            damping: 20
          }}
        >
          <motion.div 
            className="w-3 h-3 rounded-full bg-background"
            animate={prefersReducedMotion ? {} : {
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Parallax background layer */}
        {!prefersReducedMotion && (
          <motion.div
            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5"
            style={{
              x: index % 2 === 0 ? -10 : 10,
            }}
            whileInView={{
              x: index % 2 === 0 ? 0 : 0,
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * 0.5,
              ease: "easeInOut"
            }}
          />
        )}

        {children}
      </motion.article>
    );
  };

  return (
    <section 
      id="experience" 
      className="py-16 md:py-24 bg-foreground/5 relative overflow-hidden"
    >
      {/* Background parallax elements */}
      {!prefersReducedMotion && (
        <>
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl"
            animate={{
              x: [0, -40, 0],
              y: [0, 40, 0],
              scale: [1.2, 1, 1.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </>
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            variants={itemVariants}
          >
            Work <span className="text-primary">Experience</span>
          </motion.h2>

          <div className="relative">
            {/* Enhanced left border timeline line */}
            <motion.div 
              className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-blue-500 to-purple-600"
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            />

            {experiences.map((exp, index) => (
              <ParallaxCard key={index} index={index}>
                <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200/20 relative overflow-hidden">
                  {/* Enhanced hover background effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />

                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <motion.div 
                        className="text-sm text-blue-400 font-semibold mb-2 md:mb-0"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index * 0.2) + 0.3, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        {exp.period}
                      </motion.div>
                      <motion.div 
                        className="text-sm text-gray-400 font-medium"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index * 0.2) + 0.4, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        {exp.title}
                      </motion.div>
                    </div>
                    
                    <motion.h3 
                      className="text-xl md:text-2xl font-bold mb-3 text-gray-100"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: (index * 0.2) + 0.2, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {exp.company}
                    </motion.h3>
                    
                    <ul className="space-y-4">
                      {exp.highlights.map((highlight, hIndex) => (
                        <motion.li 
                          key={hIndex} 
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ 
                            delay: (index * 0.2) + (hIndex * 0.1) + 0.5, 
                            duration: 0.4 
                          }}
                          viewport={{ once: true }}
                        >
                          <motion.span 
                            className="text-blue-400 mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-400"
                            animate={prefersReducedMotion ? {} : {
                              scale: [1, 1.5, 1],
                            }}
                            transition={{
                              duration: 2,
                              delay: hIndex * 0.2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                          <span className="text-gray-300 leading-relaxed">{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ParallaxCard>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
