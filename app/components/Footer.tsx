'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const lastUpdated = '2025-10-30';

  return (
    <footer className="bg-background border-t border-foreground/10 py-12">
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
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Alaa Eddin Albarghoth
              </span>
            </div>
            <p className="text-secondary text-sm">
              Senior Android Engineer
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2 text-sm text-secondary">
            <p>© {currentYear} Alaa Eddin Albarghoth. All rights reserved.</p>
            <p className="text-xs">Last updated: {lastUpdated}</p>
          </div>
        </motion.div>

        <motion.div
          className="mt-8 pt-8 border-t border-foreground/10 text-center text-sm text-secondary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion</p>
        </motion.div>
      </div>
    </footer>
  );
}
