/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      display: ['Geist', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
    },
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
      screens: {
        short: { raw: '(max-height: 800px)' },
        xshort: { raw: '(max-height: 700px)' },
      },
      backgroundImage: {
        'fp-background': "url('/flowerpatch-home-bg.jpg')",
        'hero-texture': "url('/hexagonFooter.svg')",
        'agro-background': "url('/agromation-bg.png')",
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
          100: '#0e0e0f',
          200: '#161618',
          300: '#2a2a2b',
          400: '#36ffc4',
          500: '#00e1ab',
        },
        obsidian: {
          50: '#fbfffa',
          100: '#e5e2e3',
          200: '#b9cbc1',
          300: '#83958c',
          400: '#3a4a43',
          500: '#353436',
          600: '#201f20',
          700: '#161618',
          800: '#131314',
          900: '#050505',
        },
        electric: {
          300: '#adc7ff',
          400: '#4a8eff',
          500: '#007bff',
        },
        signal: {
          400: '#ffe149',
        },
        nugbasePurple: {
          100: 'rgb(229, 77, 207)',
          200: 'rgb(177, 38, 156)',
          300: 'rgb(166, 107, 208)',
          400: 'rgb(110, 68, 130)',
        },
        dual4t: {
          100: '#343e3d',
        },
      },
      animation: {
        'slide-from-left': 'slide-in-from-left 300ms ease-out',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'slide-in-up': 'slideInUp 0.4s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
        slideInLeft: {
          '0%': {
            opacity: 0,
            transform: 'translateX(-20px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0)',
          },
        },
        slideInRight: {
          '0%': {
            opacity: 0,
            transform: 'translateX(20px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0)',
          },
        },
        slideInUp: {
          '0%': {
            opacity: 0,
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        'slide-in-from-left': {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: 0,
          },
          '80%': {
            transform: 'translateX(-20%)',
            opacity: 0.9,
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: 1,
          },
        },
        'gradient-shift': {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
        },
      },
    },
  },
  plugins: [],
};
