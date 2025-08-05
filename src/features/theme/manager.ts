export type ThemeName = 'light' | 'dark';

const lightPalette = {
  '--color-bg': '#f5f7fa',
  '--color-text': '#2C3E50',
  '--color-card': '#ffffff',
  '--color-border': '#d1d5db',
  '--color-primary': '#e20000',
  '--color-secondary': '#9b59b6',
  '--color-reset': '#ff6b6b',
  '--color-reset-hover': '#ff8c8c',
};

const darkPalette = {
  '--color-bg': '#213547',
  '--color-text': '#ffffff',
  '--color-card': '#2d4961',
  '--color-border': '#3e6384',
  '--color-primary': '#e20000',
  '--color-secondary': '#8E44AD',
  '--color-reset': '#c0392b',
  '--color-reset-hover': '#e74c3c',
};

const PALETTE_MAP: Record<ThemeName, Record<string, string>> = {
  light: lightPalette,
  dark: darkPalette,
};

export function applyTheme(name: ThemeName) {
  const root = document.documentElement;
  const palette = PALETTE_MAP[name];
  
  // Apply CSS variables
  Object.entries(palette).forEach(([varName, value]) => {
    root.style.setProperty(varName, value);
  });
  
  // Toggle dark class for Tailwind dark mode
  if (name === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
  
  localStorage.setItem('theme', name);
}

export function initTheme() {
  const stored = localStorage.getItem('theme') as ThemeName | null;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme: ThemeName = stored ?? (prefersDark ? 'dark' : 'light');
  applyTheme(theme);
  return theme;
}
