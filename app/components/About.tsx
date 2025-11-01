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
              <div className="flex items-start gap-4 p-6 bg-gray-900/50 rounded-xl hover:bg-gray-900/70 transition-all duration-300 group">
                <div className="w-2 h-2 rounded-full bg-blue-400 mt-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                <p className="text-gray-300 leading-relaxed">Built and optimized features for Ayoba messaging app serving 50M+ users, improving stability and user experience</p>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-gray-900/50 rounded-xl hover:bg-gray-900/70 transition-all duration-300 group">
                <div className="w-2 h-2 rounded-full bg-blue-400 mt-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                <p className="text-gray-300 leading-relaxed">Drove CI/CD modernization with GitLab CI and AppCenter, reducing build times by 25-35% and enabling weekly releases</p>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-gray-900/50 rounded-xl hover:bg-gray-900/70 transition-all duration-300 group">
                <div className="w-2 h-2 rounded-full bg-blue-400 mt-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                <p className="text-gray-300 leading-relaxed">Modernized legacy security apps with Jetpack, Hilt, and Room, improving stability and reducing crashes by ~40%</p>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-gray-900/50 rounded-xl hover:bg-gray-900/70 transition-all duration-300 group">
                <div className="w-2 h-2 rounded-full bg-blue-400 mt-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                <p className="text-gray-300 leading-relaxed">Led code reviews and mentored junior engineers to improve code quality and modularization best practices</p>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-gray-900/50 rounded-xl hover:bg-gray-900/70 transition-all duration-300 group">
                <div className="w-2 h-2 rounded-full bg-blue-400 mt-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                <p className="text-gray-300 leading-relaxed">Implemented offline-first synchronization and real-time push via Kotlin Coroutines and FCM</p>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-gray-900/50 rounded-xl hover:bg-gray-900/70 transition-all duration-300 group">
                <div className="w-2 h-2 rounded-full bg-blue-400 mt-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                <p className="text-gray-300 leading-relaxed">Built real-time auction and AR-based apps using WebSocket, ARCore, and Kotlin/Java</p>
              </div>
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
