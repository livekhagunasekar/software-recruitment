/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        peach: '#FFA987',
        mellowYellow: '#FFE25B',
      },
      keyframes: {
        fadeInOut: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
        'bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'fade-in-out': 'fadeInOut 3s ease-in-out infinite',
        'bounce-fast': 'bounce 0.6s infinite ease-in-out',
         marquee: 'marquee 30s linear infinite',
        'spin-slow': 'spinSlow 2s linear infinite',
      },
    },
  },
  plugins: [],
}
