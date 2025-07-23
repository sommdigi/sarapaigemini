/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'wine-dark': '#4A044E',
        'wine-light': '#701A75',
        'gold-accent': '#FBBF24',
        'light-bg': '#FDF7F8',
        'dark-text': '#333333',
        'light-text': '#F3E8F2',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
