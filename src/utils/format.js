/** 1 → "01" */
export const pad2 = (n) => String(n).padStart(2, '0');

/** "PolicyX.com" → "P", "Haut IT Solutions" → "HI" */
export const initials = (text) =>
  text
    .replace(/\.com$/i, '')
    .split(/\s+/)
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
