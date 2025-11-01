'use client';

import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
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
const INTERSECTION_RATIO = 0.6; // 60% of section must be visible

export default function Navigation({ className }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Memoized navigation items for performance
  const navItems = useMemo(() => NAV_ITEMS, []);

  // Advanced Intersection Observer for precise scroll spy
  const setupIntersectionObserver = useCallback(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const options = {
      root: null,
      rootMargin: `-${SECTION_VIEWPORT_OFFSET}px 0px -${window.innerHeight - SECTION_VIEWPORT_OFFSET}px 0px`,
      threshold: INTERSECTION_RATIO,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      let mostVisibleSection = '';
      let maxRatio = 0;

      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          mostVisibleSection = entry.target.id;
        }
      });

      if (mostVisibleSection && mostVisibleSection !== activeSection) {
        setActiveSection(mostVisibleSection);
      }
    }, options);

    // Observe all sections
    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observerRef.current?.observe(element);
      }
    });
  }, [navItems, activeSection]);

  // Enhanced scroll handler with parallax effects
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    
    // Enhanced scroll detection
    setIsScrolled(scrollY > SCROLL_THRESHOLD);
    
    // Subtle parallax effect (clamped between -10 and 10)
    const newParallaxOffset = Math.max(-10, Math.min(10, scrollY * 0.02));
    setParallaxOffset(newParallaxOffset);
  }, []);

  useEffect(() => {
    // Initialize intersection observer
    setupIntersectionObserver();
    
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
    
    return () => {
      window.removeEventListener('scroll', scrollListener);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [handleScroll, setupIntersectionObserver]);

  // Parallax background motion variants
  const backgroundVariants = {
    idle: {
      y: 0,
      opacity: 0,
      scale: 1,
    },
    visible: {
      y: parallaxOffset,
      opacity: 0.05,
      scale: 1.02,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 30,
      },
    },
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 overflow-hidden ${
        className || ''
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Parallax Background Layer */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 blur-xl"
        variants={backgroundVariants}
        animate={isScrolled ? 'visible' : 'idle'}
      />
      
      {/* Main Navigation Content */}
      <div className={`relative transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md shadow-lg border-b border-border/20'
          : 'bg-transparent'
      }`}>
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
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`relative text-sm font-medium transition-colors duration-300 hover:text-blue-400 focus:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 rounded px-2 py-1 ${
                    activeSection === item.id 
                      ? 'text-primary font-semibold' 
                      : 'text-secondary'
                  }`}
                  aria-label={`Navigate to ${item.label} section`}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute -bottom-1 left-2 right-2 h-0.5 bg-blue-400"
                      layoutId="activeSection"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.a>
              ))}
            </div>

            <MobileMenu navItems={navItems} activeSection={activeSection} />
          </div>
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
