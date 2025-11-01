// Unit tests for Navigation component
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { motion } from 'framer-motion';
import Navigation from '@/app/components/Navigation';

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    nav: ({ children, ...props }: any) => <nav {...props}>{children}</nav>,
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    a: ({ children, ...props }: any) => <a {...props}>{children}</a>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
    span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
    span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
  },
  AnimatePresence: ({ children }: any) => children,
}));

// Mock IntersectionObserver
global.IntersectionObserver = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

describe('Navigation Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    
    // Mock scroll and element methods
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true });
    Object.defineProperty(window, 'addEventListener', {
      value: vi.fn(),
      writable: true,
    });
    Object.defineProperty(window, 'removeEventListener', {
      value: vi.fn(),
      writable: true,
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders navigation with all menu items', () => {
    render(<Navigation />);
    
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Experience')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Skills')).toBeInTheDocument();
    expect(screen.getByText('Education')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('has proper ARIA attributes for accessibility', () => {
    render(<Navigation />);
    
    const navigation = screen.getByRole('navigation');
    expect(navigation).toHaveAttribute('aria-label', 'Main navigation');
    
    const logo = screen.getByLabelText('Go to home section');
    expect(logo).toBeInTheDocument();
  });

  it('handles scroll events to update navigation state', async () => {
    render(<Navigation />);
    
    // Simulate scroll
    Object.defineProperty(window, 'scrollY', { value: 100, writable: true });
    fireEvent.scroll(window, { target: { scrollY: 100 } });
    
    await waitFor(() => {
      expect(screen.getByRole('navigation')).toHaveClass('bg-background/80');
    });
  });

  it('navigates to correct sections when clicked', async () => {
    render(<Navigation />);
    
    const aboutLink = screen.getByText('About');
    fireEvent.click(aboutLink);
    
    expect(aboutLink).toHaveAttribute('href', '#about');
  });

  it('shows mobile menu button on small screens', () => {
    render(<Navigation />);
    
    // Mobile menu button should be visible
    const menuButton = screen.getByLabelText(/toggle menu/i);
    expect(menuButton).toBeInTheDocument();
  });

  it('toggles mobile menu when button is clicked', async () => {
    render(<Navigation />);
    
    const menuButton = screen.getByLabelText(/toggle menu/i);
    
    // Initial state - menu should be closed
    expect(screen.queryByText('About')).not.toBeInTheDocument();
    
    // Click to open menu
    fireEvent.click(menuButton);
    
    // Menu should be open now
    await waitFor(() => {
      expect(screen.getByText('About')).toBeInTheDocument();
    });
  });

  it('highlights active section based on scroll position', async () => {
    render(<Navigation />);
    
    // Mock getBoundingClientRect for active section
    const mockElement = {
      getBoundingClientRect: () => ({
        top: 50,
        bottom: 150,
        height: 100,
      }),
      id: 'about',
    };
    
    vi.spyOn(document, 'getElementById').mockReturnValue(mockElement);
    
    // Simulate scroll to about section
    Object.defineProperty(window, 'scrollY', { value: 100, writable: true });
    fireEvent.scroll(window, { target: { scrollY: 100 } });
    
    await waitFor(() => {
      const aboutLink = screen.getByText('About');
      expect(aboutLink).toHaveClass('text-primary');
    });
  });

  it('applies custom className when provided', () => {
    render(<Navigation className="custom-class" />);
    
    expect(screen.getByRole('navigation')).toHaveClass('custom-class');
  });

  it('has focusable elements for keyboard navigation', () => {
    render(<Navigation />);
    
    const focusableElements = screen.getAllByRole('link');
    focusableElements.forEach(element => {
      expect(element).toHaveAttribute('tabIndex');
    });
  });

  it('clamps scroll position correctly', async () => {
    render(<Navigation />);
    
    // Test scroll threshold
    Object.defineProperty(window, 'scrollY', { value: 25, writable: true });
    fireEvent.scroll(window, { target: { scrollY: 25 } });
    
    await waitFor(() => {
      expect(screen.getByRole('navigation')).not.toHaveClass('bg-background/80');
    });
  });
});
