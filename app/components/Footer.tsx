'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const lastUpdated = '2025-10-30';

  return (
    <footer className="bg-gray-900/50 border-t border-gray-700 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold mb-2">
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Alaa Eddin Albarghoth
              </span>
            </div>
            <p className="text-gray-300 text-sm">
              Senior Android Engineer
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2 text-sm text-gray-300">
            <p>© {currentYear} Alaa Eddin Albarghoth. All rights reserved.</p>
            <p className="text-xs text-gray-400">Last updated: {lastUpdated}</p>
          </div>
        </motion.div>

        <motion.div
          className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="flex items-center justify-center gap-2 flex-wrap">
            <span>Built with</span>
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">
              Next.js
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">
              TypeScript
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">
              Tailwind CSS
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">
              Framer Motion
            </span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
