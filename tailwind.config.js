/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '1.125rem',
      base: '1.25rem',
      lg: '1.5rem',
      xl: '1.875rem',
      '2xl': '2.25rem',
      '3xl': '3rem',
      '4xl': '4.25rem',
      '5xl': '5rem',
      '6xl': '6rem',
    },
    extend: {
      backgroundImage: {
        'fp-background': "url('/flowerpatch-home-bg.jpg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
      colors: {
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        blue: {
          100: '#ebf8ff',
          200: '#bee3f8',
          300: '#90cdf4',
          400: '#63b3ed',
          500: '#4299e1',
          600: '#3182ce',
          700: '#2b6cb0',
          800: '#2c5282',
          900: '#2a4365',
        },
        default: {
          100: '#343E3D',
          200: '#607466',
          300: '#AEDCC0',
          400: '#7BD389',
          500: '#38E4AE',
        },
        nugbasePurple: {
          100: 'rgb(229, 77, 207)',
          200: 'rgb(177, 38, 156)',
          300: 'rgb(166, 107, 208)',
          400: 'rgb(110, 68, 130)',
        },
      },
    },
  },
  plugins: [],
};
