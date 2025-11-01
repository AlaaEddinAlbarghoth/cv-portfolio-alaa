'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Types for enterprise-grade type safety
interface NavItem {
  id: string;
  label: string;
}

interface NavigationProps {
  className?: string;
}

interface MobileMenuProps {
  navItems: NavItem[];
  activeSection: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

const SCROLL_THRESHOLD = 50;
const SECTION_VIEWPORT_OFFSET = 100;

export default function Navigation({ className }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Memoized navigation items for performance
  const navItems = useMemo(() => NAV_ITEMS, []);

  // Debounced scroll handler for performance optimization
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > SCROLL_THRESHOLD);

    // Update active section based on scroll position with improved detection
    const sections = navItems.map(item => item.id);
    let currentActive = activeSection;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
        const elementBottom = elementTop + rect.height;
        const scrollPosition = window.scrollY + SECTION_VIEWPORT_OFFSET;

        if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
          currentActive = section;
          break;
        }
      }
    }

    if (currentActive !== activeSection) {
      setActiveSection(currentActive);
    }
  }, [navItems, activeSection]);

  useEffect(() => {
    let ticking = false;
    
    const scrollListener = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollListener, { passive: true });
    return () => window.removeEventListener('scroll', scrollListener);
  }, [handleScroll]);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      } ${className || ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.a
            href="#home"
            className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Go to home section"
          >
            AA
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative text-sm font-medium transition-colors duration-300 hover:text-blue-400 focus:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 rounded ${
                  activeSection === item.id 
                    ? 'text-primary font-semibold' 
                    : 'text-secondary'
                }`}
                aria-label={`Navigate to ${item.label} section`}
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400"
                    layoutId="activeSection"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          <MobileMenu navItems={navItems} activeSection={activeSection} />
        </div>
      </div>
    </motion.nav>
  );
}

function MobileMenu({ navItems, activeSection }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const handleLinkClick = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 rounded transition-colors"
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        <motion.span 
          className="w-6 h-0.5 bg-foreground transition-all"
          animate={isOpen ? { rotate: 45, translateY: 8 } : { rotate: 0, translateY: 0 }}
        />
        <motion.span 
          className="w-6 h-0.5 bg-foreground transition-all"
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        />
        <motion.span 
          className="w-6 h-0.5 bg-foreground transition-all"
          animate={isOpen ? { rotate: -45, translateY: -8 } : { rotate: 0, translateY: 0 }}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-lg border-t border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="flex flex-col p-6 gap-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={handleLinkClick}
                  className={`text-lg font-medium transition-colors duration-300 hover:text-blue-400 focus:text-blue-400 focus:outline-none py-2 rounded ${
                    activeSection === item.id 
                      ? 'text-primary font-semibold' 
                      : 'text-secondary'
                  }`}
                  aria-label={`Navigate to ${item.label} section`}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
