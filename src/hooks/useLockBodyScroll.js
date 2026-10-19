import { useEffect } from 'react';

/** Prevents the page behind an open overlay (e.g. mobile menu) from scrolling. */
export function useLockBodyScroll(locked) {
  useEffect(() => {
    document.body.style.overflow = locked ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [locked]);
}
