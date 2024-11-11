/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.{html,js,md}',
    './_layouts/**/*.{html,js,md}',
    './_*/*.{html,js,md}',
    './*.{html,js,md}'
  ],
  theme: {
    extend: {
      colors: {
        navy: '#003ea1',
        bright: '#3A86FF',
        focus: '#ff006e',
        focus_example: 'var(--focus-color)',
        byellow: '#ffbe0b',
    },
  },
  plugins: [],
}}