'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { getPersonalInfo } from '@/lib/data';

export default function Hero() {
  const personal = getPersonalInfo();
  const prefersReducedMotion = useReducedMotion();

  // Enhanced staggered animation variants
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Button variants with enhanced contrast
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden section-padding"
    >
      {/* Optimized animated background with reduced opacity */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-accent/3 to-background" />
        
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/8 rounded-full blur-3xl"
          animate={
            prefersReducedMotion 
              ? { opacity: 0.2 }
              : {
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                }
          }
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : {
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
          }
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/8 rounded-full blur-3xl"
          animate={
            prefersReducedMotion 
              ? { opacity: 0.2 }
              : {
                  scale: [1.2, 1, 1.2],
                  opacity: [0.2, 0.4, 0.2],
                }
          }
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : {
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
          }
        />
      </div>

      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
            variants={itemVariants}
          >
            {personal.name}
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-4xl font-semibold mb-8 text-gray-200"
            variants={itemVariants}
          >
            {personal.title}
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl font-medium text-gray-300 max-w-3xl mx-auto mb-16 leading-relaxed"
            variants={itemVariants}
          >
            {personal.summary}
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-20"
            variants={itemVariants}
          >
            <motion.a
              href="#contact"
              className="btn-primary w-full sm:w-auto text-center px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 touch-target group relative overflow-hidden"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              aria-label="Get in touch via email or contact form"
            >
              <span className="relative z-10 group-hover:scale-105 transition-transform duration-200">
                Get In Touch
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: '-100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
            
            <motion.a
              href="/resume/alaa-albarghoth-cv.pdf"
              download
              className="btn-secondary w-full sm:w-auto text-center px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 touch-target group relative overflow-hidden border-2 border-blue-500/30 hover:border-blue-400/50"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              aria-label="Download Alaa Eddin Albarghoth's CV and resume"
            >
              <span className="relative z-10 group-hover:scale-105 transition-transform duration-200">
                Download CV
              </span>
              <motion.div
                className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <a href="#about" className="block" aria-label="Scroll to about section">
            <motion.svg
              className="w-6 h-6 text-gray-400 hover:text-blue-400 transition-colors duration-300"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={
                prefersReducedMotion
                  ? {}
                  : { y: [0, 10, 0] }
              }
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : { duration: 2, repeat: Infinity }
              }
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </motion.svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
