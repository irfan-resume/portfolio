import { useEffect } from 'react';

/**
 * Adds `is-visible` to every `.reveal` element as it scrolls into view.
 * Falls back to showing everything when IntersectionObserver is unavailable.
 */
export function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal');

    if (!('IntersectionObserver' in window)) {
      nodes.forEach((node) => node.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}
