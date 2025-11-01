'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { getSkills } from '@/lib/data';

export default function Skills() {
  const skills = getSkills();
  const skillCategories = Object.entries(skills);
  const prefersReducedMotion = useReducedMotion();

  // Enhanced category icon component with better visual design
  const CategoryIcon = ({ category, index }: { category: string; index: number }) => {
    const iconVariants = {
      hidden: { 
        scale: 0, 
        rotate: -180,
        opacity: 0
      },
      visible: { 
        scale: 1, 
        rotate: 0,
        opacity: 1,
        transition: {
          delay: index * 0.1,
          type: 'spring',
          stiffness: 200,
          damping: 20
        }
      },
      hover: {
        scale: 1.1,
        rotate: 5,
        transition: { duration: 0.2 }
      }
    };

    const getEnhancedIcon = (category: string) => {
      const baseIconClass = "w-6 h-6";
      
      switch (category) {
        case 'Languages':
          return (
            <motion.svg 
              className={`${baseIconClass} text-blue-400`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              variants={iconVariants}
              whileHover="hover"
            >
              <motion.path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" 
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
              />
            </motion.svg>
          );
        case 'Frameworks & Libraries':
          return (
            <motion.svg 
              className={`${baseIconClass} text-green-400`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              variants={iconVariants}
              whileHover="hover"
            >
              <motion.path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 9.172V5L8 4z" 
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: index * 0.1 + 0.3 }}
              />
            </motion.svg>
          );
        case 'Architecture & Patterns':
          return (
            <motion.svg 
              className={`${baseIconClass} text-purple-400`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              variants={iconVariants}
              whileHover="hover"
            >
              <motion.path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" 
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: index * 0.1 + 0.3 }}
              />
            </motion.svg>
          );
        case 'Tools & DevOps':
          return (
            <motion.svg 
              className={`${baseIconClass} text-orange-400`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              variants={iconVariants}
              whileHover="hover"
            >
              <motion.path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" 
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.8, delay: index * 0.1 + 0.3 }}
              />
              <motion.circle 
                cx="12" 
                cy="12" 
                r="3"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
              />
            </motion.svg>
          );
        default:
          return (
            <motion.svg 
              className={`${baseIconClass} text-cyan-400`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              variants={iconVariants}
              whileHover="hover"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </motion.svg>
          );
      }
    };

    return (
      <motion.div 
        className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-blue-400 border border-blue-500/30 group-hover:border-blue-400/50 transition-all duration-300"
        variants={iconVariants}
        whileHover="hover"
      >
        {getEnhancedIcon(category)}
      </motion.div>
    );
  };

  // Enhanced skill chip with individual animations
  const SkillChip = ({ skill, skillIndex, categoryIndex }: { 
    skill: string; 
    skillIndex: number; 
    categoryIndex: number; 
  }) => {
    return (
      <motion.div
        className="flex items-center gap-3 p-3 bg-gray-800/50 hover:bg-blue-500/10 rounded-lg transition-all duration-300 transform hover:scale-105 group cursor-pointer relative overflow-hidden"
        initial={{ 
          opacity: 0, 
          scale: 0.8, 
          x: -20 
        }}
        whileInView={{ 
          opacity: 1, 
          scale: 1, 
          x: 0,
          transition: {
            delay: (categoryIndex * 0.2) + (skillIndex * 0.05),
            duration: 0.4,
            ease: "easeOut"
          }
        }}
        viewport={{ once: true }}
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 8px 25px rgba(59, 130, 246, 0.15)",
          transition: { duration: 0.2 }
        }}
        whileTap={{ 
          scale: 0.95,
          transition: { duration: 0.1 }
        }}
      >
        <motion.div
          className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0 relative z-10"
          animate={prefersReducedMotion ? {} : {
            scale: [1, 1.5, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            delay: skillIndex * 0.1,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <span className="text-gray-200 text-sm font-medium group-hover:text-blue-300 transition-colors duration-300 relative z-10">
          {skill}
        </span>
      </motion.div>
    );
  };

  return (
    <section 
      id="skills" 
      className="section-padding bg-foreground/5 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Skills & <span className="text-primary">Expertise</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map(([category, items], categoryIndex) => (
              <motion.div
                key={category}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-900/70 transition-all duration-300 border border-gray-200/10 hover:border-blue-500/30 relative overflow-hidden group"
                initial={{ 
                  opacity: 0, 
                  y: 40,
                  scale: 0.95 
                }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: { 
                    delay: categoryIndex * 0.15, 
                    duration: 0.6,
                    ease: "easeOut"
                  }
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.1)",
                  transition: { duration: 0.2 }
                }}
              >
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <CategoryIcon category={category} index={categoryIndex} />
                  <h3 className="text-xl font-bold text-blue-300 group-hover:text-blue-200 transition-colors duration-300">
                    {category}
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-3 relative z-10">
                  {items.map((skill, skillIndex) => (
                    <SkillChip 
                      key={skillIndex} 
                      skill={skill} 
                      skillIndex={skillIndex}
                      categoryIndex={categoryIndex}
                    />
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
