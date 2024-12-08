/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        customYellow: '#e0a708',  // Custom color example
        customGreen: '#32a852', // Another custom color
        customGray: '#f5f5f5',  // Another custom gray color
      },
      scrollBehavior: {
        smooth: 'smooth',
      },
      spacing: {
        '56rem': '56rem', // Custom class for 56rem
        '896px': '896px', // Optional alias for px value
      },
    },
  },
  plugins: [],
};
