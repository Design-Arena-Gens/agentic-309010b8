/**** @type {import('tailwindcss').Config} ****/
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        acid: '#D3FF29', // neon lime
        punch: '#FF3B3B', // brutalist red
        ink: '#0F0F0F',
        paper: '#FAFAFA',
        sky: '#5AD7FF',
        grape: '#6C47FF',
        peach: '#FFB86B'
      },
      boxShadow: {
        hard: '8px 8px 0 0 rgba(0,0,0,0.9)',
        xhard: '14px 14px 0 0 rgba(0,0,0,1)'
      },
      borderWidth: {
        3: '3px',
        6: '6px',
        10: '10px'
      },
      rotate: {
        2: '2deg',
        3: '3deg',
        6: '6deg'
      },
      animation: {
        'marquee': 'marquee 24s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-hard': 'pulse-hard 2s steps(2, end) infinite'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'pulse-hard': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.03)' }
        }
      }
    },
  },
  plugins: [],
};
