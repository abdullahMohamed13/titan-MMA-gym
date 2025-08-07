/** @type {import('tailwindcss').Config} */
export default {
  // darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './public/index.html'
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-bg)',
        text: 'var(--color-text)',
        card: 'var(--color-card)',
        border: 'var(--color-border)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        reset: 'var(--color-reset)',
        'reset-hover': 'var(--color-reset-hover)',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
};
