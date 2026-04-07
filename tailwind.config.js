/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-crimson': '#dc2626',
        'brand-crimson-strong': '#b91c1c',
        'brand-crimson-soft': '#fee2e2',
        'brand-charcoal': '#111827',
        'brand-charcoal-soft': '#374151',
        'brand-canvas': '#ffffff',
        'brand-mist': '#f9fafb',
        'brand-line': '#e5e7eb',
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'brand-sm': '0 10px 30px rgba(17, 24, 39, 0.06)',
        'brand-md': '0 20px 48px rgba(17, 24, 39, 0.1)',
        'brand-lg': '0 30px 90px rgba(17, 24, 39, 0.14)',
        glass: '0 16px 40px rgba(17, 24, 39, 0.08)',
      },
      backgroundImage: {
        'brand-grid':
          'linear-gradient(rgba(17, 24, 39, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(17, 24, 39, 0.06) 1px, transparent 1px)',
        'grid-slate-100':
          'linear-gradient(rgba(226, 232, 240, 0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(226, 232, 240, 0.9) 1px, transparent 1px)',
        'grid-slate-800':
          'linear-gradient(rgba(51, 65, 85, 0.55) 1px, transparent 1px), linear-gradient(90deg, rgba(51, 65, 85, 0.55) 1px, transparent 1px)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.65' },
        },
        sweep: {
          '0%': { transform: 'translateX(-12%)' },
          '100%': { transform: 'translateX(12%)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        sweep: 'sweep 10s ease-in-out infinite alternate',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      maxWidth: {
        '8xl': '90rem',
      },
    },
  },
  plugins: [],
};
