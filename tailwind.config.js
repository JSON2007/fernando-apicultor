/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: { extend: { colors: { cream: '#F5E8CC', amber: '#D99A22', forest: '#234735', deep: '#173326', bark: '#29251E', leaf: '#688F58' }, fontFamily: { display: ['Playfair Display', 'serif'], sans: ['Inter', 'sans-serif'] }, boxShadow: { soft: '0 18px 50px rgba(41,37,30,.10)' } } },
  plugins: []
};
