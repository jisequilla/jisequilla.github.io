/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: '#1B365D',
        'steel-blue': '#4A90A4',
        orange: '#F4A261',
      },
      fontFamily: {
        'sans': ['Open Sans', 'system-ui', 'sans-serif'],
        'heading': ['Roboto', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'fade-in-delay-1': 'fadeIn 1s ease-out 0.2s both',
        'fade-in-delay-2': 'fadeIn 1s ease-out 0.4s both',
        'fade-in-delay-3': 'fadeIn 1s ease-out 0.6s both',
        'fade-in-delay-4': 'fadeIn 1s ease-out 0.8s both',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};