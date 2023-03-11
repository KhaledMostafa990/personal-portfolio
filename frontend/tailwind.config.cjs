/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1600px',
      '4xl': '1920px',
    },
    extend: {
      fontFamily: {
        primary: ['var(--font-family-primary)'],
      },

      fontSize: {
        xs: [
          '12px',
          {
            lineHeight: '14px',
            letterSpacing: '2px',
          },
        ],
        sm: [
          '15px',
          {
            lineHeight: '22px',
            letterSpacing: '1px',
          },
        ],
        base: [
          '16px',
          {
            lineHeight: '25px',
          },
        ],
        lg: [
          '20px',

          {
            lineHeight: '25px',
            letterSpacing: '2px',
          },
        ],
        xl: [
          '24px',

          {
            lineHeight: '25px',
            letterSpacing: '2px',
          },
        ],
        '2xl': [
          '28px',
          {
            lineHeight: '36px',
            fontWeight: '500',
          },
        ],
        '3xl': [
          '32px',
          {
            lineHeight: '36px',
            fontWeight: '500',
          },
        ],
        '4xl': [
          '40px',
          {
            lineHeight: '48px',
            letterSpacing: '2px',
          },
        ],
        '5xl': [
          '48px',
          {
            lineHeight: '48px',
            letterSpacing: '2px',
          },
        ],
        '6xl': [],
      },

      colors: {
        primary: {
          default: '#5FB4A2',
        },
        background: {
          default: '#FFFFFF',
          black: '#1D1C1E',
        },
        error: '#F43030',
        'dark-grey': '#33323D',
        'dark-blue': '#203A4C',
        'light-grey': '#EAEAEB',
        'very-light-grey': '#FAFAFA',
      },
    },
  },
  plugins: [],
};
