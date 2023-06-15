/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'mocorito': ['Rubik'],
        'base': ['Poppins'],
        'cursiva': ['Just Another Hand']
      }
    }
  },
  plugins: []
};