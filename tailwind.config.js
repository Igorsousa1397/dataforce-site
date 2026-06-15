/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // Tokens da identidade oficial DataForce (Manual de Identidade Visual)
      colors: {
        snow: '#F8F8F8',
        bronze: { DEFAULT: '#CFA150', soft: '#E3C485' },
        indigo: { DEFAULT: '#3E0A6C', bright: '#6A2FB0' }, // Indigo Ink
        amethyst: '#1E063A',                               // Dark Amethyst (superfície)
        void: '#13002C',                                   // Dark Amethyst (fundo)
        panel: { DEFAULT: '#1E063A', 2: '#280A4A' },
        ink: '#F8F8F8',
        muted: '#B4A6CE',
      },
      fontFamily: {
        sans: ['Urbanist', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        pulseRing: {
          '0%': { boxShadow: '0 0 0 0 rgba(207,161,80,.5)' },
          '70%': { boxShadow: '0 0 0 9px rgba(207,161,80,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(207,161,80,0)' },
        },
      },
      animation: { pulseRing: 'pulseRing 2.6s infinite' },
    },
  },
  plugins: [],
}
