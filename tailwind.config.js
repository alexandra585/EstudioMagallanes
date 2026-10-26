export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {
    colors: { navy: { DEFAULT: '#0D1B2A', 800: '#13263a', 700: '#1b3350' }, gold: { DEFAULT: '#D4AF37', light: '#F0D675', dark: '#9a7b12' }, paper: '#F8F9FA', bronze: '#B08D57' },
    boxShadow: { lux: '0 20px 50px -20px rgba(13,27,42,.35)', gold: '0 10px 30px -10px rgba(212,175,55,.5)' },
    fontFamily: { serif: ['"Playfair Display"', 'Merriweather', 'serif'], sans: ['Inter', 'Roboto', 'sans-serif'] },
    keyframes: { shimmer: { to: { backgroundPosition: '200% center' } }, floaty: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-14px)' } }, shine: { to: { transform: 'translateX(120%) skewX(-20deg)' } }, pulseRing: { '0%': { boxShadow: '0 0 0 0 rgba(37,211,102,.55)' }, '70%': { boxShadow: '0 0 0 16px rgba(37,211,102,0)' }, '100%': { boxShadow: '0 0 0 0 rgba(37,211,102,0)' } } },
    animation: { shimmer: 'shimmer 6s linear infinite', floaty: 'floaty 6s ease-in-out infinite', 'pulse-ring': 'pulseRing 2.4s infinite' },
  } },
  plugins: [],
}
