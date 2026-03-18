'use client';

import { useState, useEffect } from 'react';

/**
 * Custom hook to detect if the page has been scrolled
 * @param threshold - Scroll distance in pixels before returning true (default: 10)
 * @returns boolean indicating if page has been scrolled
 */
export function useScrolled(threshold: number = 10): boolean {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isScrolled;
}
