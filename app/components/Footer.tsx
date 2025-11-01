'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = useMemo(() => new Date().getFullYear(), []);
  const lastUpdated = '2025-10-30';

  return (
    <footer 
      className="bg-gray-900/80 border-t border-gray-700 py-12 mt-12"
      role="contentinfo"
      aria-labelledby="footer-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Footer Content */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mb-8">
            <h3 
              id="footer-heading"
              className="text-2xl font-bold mb-3"
            >
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Alaa Eddin Albarghoth
              </span>
            </h3>
            <p className="text-gray-300 text-lg font-medium">
              Senior Android Engineer
            </p>
          </div>

          {/* Copyright and Last Updated */}
          <div className="space-y-2 text-sm">
            <p className="text-gray-300 font-medium">
              © {currentYear} Alaa Eddin Albarghoth. All rights reserved.
            </p>
            <p className="text-gray-400">
              Last updated: {lastUpdated}
            </p>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="mt-12 pt-6 border-t border-gray-700"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        />

        {/* Tech Stack */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-gray-400 mb-4">
            Crafted with modern technologies
          </p>
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs border border-blue-500/30 hover:bg-blue-500/30 transition-colors duration-300">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v1a2 2 0 01-2 2H10a2 2 0 01-2-2V5z" />
              </svg>
              Next.js
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs border border-blue-500/30 hover:bg-blue-500/30 transition-colors duration-300">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              TypeScript
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs border border-blue-500/30 hover:bg-blue-500/30 transition-colors duration-300">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h4a2 2 0 002-2V9a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
              </svg>
              Tailwind CSS
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs border border-blue-500/30 hover:bg-blue-500/30 transition-colors duration-300">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Framer Motion
            </span>
          </div>
        </motion.div>

        {/* Additional Links */}
        <motion.div
          className="mt-8 pt-6 border-t border-gray-800 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-6 text-xs text-gray-500">
            <a 
              href="#home" 
              className="hover:text-blue-400 transition-colors duration-300 focus:outline-none focus:text-blue-400"
              aria-label="Go to home section"
            >
              Back to Top
            </a>
            <span className="text-gray-600">•</span>
            <span className="text-gray-500">
              Made with ❤️ for open source
            </span>
            <span className="text-gray-600">•</span>
            <a 
              href="https://github.com/AlaaEddinAlbarghoth" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-300 focus:outline-none focus:text-blue-400"
              aria-label="View source on GitHub"
            >
              Source Code
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
