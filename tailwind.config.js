/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#1D232A',
        accent1: '#FE5860',
        accent2: '#3BC14A',
        'nav-heading': 'white',
        'text': 'white',
        'normal-text': 'white',
        'section-title': '#FE5860',
      },
      fontSize: {
        'heading': ['2rem', { lineHeight: '2.5rem' }],
        'normal': ['2rem', { lineHeight: '1.5rem' }],
        'nav-heading': ['1rem', { lineHeight: '1.5rem' }],
        'section-title': ['1.5rem', { lineHeight: '2rem' }],
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
