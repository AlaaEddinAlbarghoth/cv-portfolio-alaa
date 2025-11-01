'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { getPersonalInfo } from '@/lib/data';

export default function About() {
  const personal = getPersonalInfo();
  const prefersReducedMotion = useReducedMotion();

  // Enhanced highlights with improved animation structure
  const highlights = [
    { value: '8', suffix: '+', label: 'Years Experience' },
    { value: '50', suffix: 'M+', label: 'Users Reached' },
    { value: '10', suffix: '+', label: 'Projects Delivered' },
    { value: '35', suffix: '%', label: 'Build Time Reduced' },
  ];

  // Animated Counter Component with enhanced effects
  const AnimatedCounter = ({ value, suffix }: { value: string; suffix: string }) => {
    const numericValue = parseInt(value);
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      const timer = setTimeout(() => {
        setCount(numericValue);
      }, 500);
      
      return () => clearTimeout(timer);
    }, [numericValue]);
    
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ 
          opacity: 1, 
          scale: 1,
          transition: { 
            duration: 0.8, 
            ease: "easeOut",
            delay: 0.2
          }
        }}
        viewport={{ once: true }}
        className="relative"
      >
        <motion.span
          animate={prefersReducedMotion ? {} : {
            textShadow: [
              "0 0 0px rgba(59, 130, 246, 0)",
              "0 0 10px rgba(59, 130, 246, 0.3)",
              "0 0 0px rgba(59, 130, 246, 0)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {count}{suffix}
        </motion.span>
      </motion.div>
    );
  };

  // Enhanced card with hover lift effects
  const HighlightCard = ({ item, index }: { item: typeof highlights[0]; index: number }) => {
    return (
      <motion.div
        className="text-center p-6 rounded-2xl bg-foreground/5 hover:bg-foreground/10 transition-all duration-300 relative overflow-hidden cursor-pointer group"
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        whileInView={{ 
          opacity: 1, 
          y: 0, 
          scale: 1,
          transition: { 
            delay: index * 0.15, 
            duration: 0.6,
            ease: "easeOut"
          }
        }}
        viewport={{ once: true }}
        whileHover={{ 
          y: -8,
          scale: 1.05,
          boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)",
          transition: { duration: 0.2, ease: "easeOut" }
        }}
        whileTap={{ 
          scale: 0.98,
          transition: { duration: 0.1 }
        }}
      >
        {/* Enhanced hover background with shadow-blue-500/10 */}
        <motion.div
          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100"
          initial={{ scale: 0.8 }}
          whileHover={{ 
            scale: 1,
            opacity: 0.1,
            transition: { duration: 0.3 }
          }}
        />
        
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0) 50%, rgba(139, 92, 246, 0.1) 100%)',
            filter: 'blur(20px)',
          }}
          initial={{ opacity: 0, scale: 0 }}
          whileHover={{ 
            opacity: 1, 
            scale: 1.1,
            transition: { duration: 0.3 }
          }}
        />

        <div className="relative z-10">
          <div className="text-4xl font-bold text-primary mb-2 flex items-center justify-center gap-1">
            <AnimatedCounter value={item.value} suffix={item.suffix} />
          </div>
          <div className="text-secondary font-medium">{item.label}</div>
        </div>

        {/* Scale effect overlay */}
        <motion.div
          className="absolute inset-0 bg-blue-500/5 rounded-2xl opacity-0"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    );
  };

  // Enhanced feature cards with improved animations
  const FeatureCard = ({ children, index }: { children: React.ReactNode; index: number }) => {
    return (
      <motion.div
        className="flex items-start gap-4 p-6 bg-gray-900/50 rounded-xl hover:bg-gray-900/70 transition-all duration-300 group relative overflow-hidden"
        initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
        whileInView={{ 
          opacity: 1, 
          x: 0,
          transition: { 
            delay: index * 0.1, 
            duration: 0.6,
            ease: "easeOut"
          }
        }}
        viewport={{ once: true }}
        whileHover={{ 
          scale: 1.02,
          boxShadow: "0 10px 30px rgba(59, 130, 246, 0.1)",
          transition: { duration: 0.2 }
        }}
      >
        <motion.div
          className="w-2 h-2 rounded-full bg-blue-400 mt-3 flex-shrink-0"
          animate={prefersReducedMotion ? {} : {
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2,
            delay: index * 0.2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <div className="relative z-10">{children}</div>
        
        {/* Hover effect overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.6 }}
        />
      </motion.div>
    );
  };

  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      {/* Background elements */}
      {!prefersReducedMotion && (
        <>
          <motion.div
            className="absolute top-1/3 left-1/6 w-24 h-24 bg-blue-500/3 rounded-full blur-2xl"
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/6 w-32 h-32 bg-purple-500/3 rounded-full blur-2xl"
            animate={{
              x: [0, -25, 0],
              y: [0, 15, 0],
              scale: [1.2, 1, 1.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </>
      )}

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
            About <span className="text-primary">Me</span>
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {highlights.map((item, index) => (
              <HighlightCard key={index} item={item} index={index} />
            ))}
          </div>

          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12 text-center max-w-4xl mx-auto">
              I'm a passionate Android Engineer with 8+ years of experience building and scaling mobile applications for millions of users. I specialize in Kotlin, Jetpack Compose, and Clean Architecture, with a proven track record of modernizing legacy systems and improving CI/CD pipelines.
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              <FeatureCard index={0}>
                <p className="text-gray-300 leading-relaxed">Built and optimized features for Ayoba messaging app serving 50M+ users, improving stability and user experience</p>
              </FeatureCard>
              
              <FeatureCard index={1}>
                <p className="text-gray-300 leading-relaxed">Drove CI/CD modernization with GitLab CI and AppCenter, reducing build times by 25-35% and enabling weekly releases</p>
              </FeatureCard>
              
              <FeatureCard index={2}>
                <p className="text-gray-300 leading-relaxed">Modernized legacy security apps with Jetpack, Hilt, and Room, improving stability and reducing crashes by ~40%</p>
              </FeatureCard>
              
              <FeatureCard index={3}>
                <p className="text-gray-300 leading-relaxed">Led code reviews and mentored junior engineers to improve code quality and modularization best practices</p>
              </FeatureCard>
              
              <FeatureCard index={4}>
                <p className="text-gray-300 leading-relaxed">Implemented offline-first synchronization and real-time push via Kotlin Coroutines and FCM</p>
              </FeatureCard>
              
              <FeatureCard index={5}>
                <p className="text-gray-300 leading-relaxed">Built real-time auction and AR-based apps using WebSocket, ARCore, and Kotlin/Java</p>
              </FeatureCard>
            </div>
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
