/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        display: ['Sora', 'system-ui', 'sans-serif'],
        body: ['Hind', 'system-ui', 'sans-serif'],
        hindi: ['"Rozha One"', '"Tiro Devanagari Hindi"', 'Hind', 'serif'],
      },
      colors: {
        navy: {
          950: '#03213B', // Primary Dark Navy
          900: '#0a2a47',
          800: '#133A5B', // Secondary Navy
          700: '#1d4d75',
        },
        purple: {
          accent: '#5B4BDB', // Primary Purple Accent
          light: '#EEEBFF',  // Light Purple
          hover: '#4b3bc9',
        },
        beige: {
          accent: '#BFA88F', // Premium Beige Accent
        },
        surface: {
          50: '#F8FAFA',  // Main Background
          100: '#FFFFFF', // White
          200: '#EEF1F1', // Soft Gray
          border: '#E5E8E8', // Card Border
        },
        accent: {
          100: '#EEEBFF', // Light Purple
          500: '#5B4BDB', // Primary Purple CTA Accent
          600: '#4b3bc9',
          gold: '#BFA88F', // Subtle Beige Accent
        },
        ink: {
          700: '#66737F', // Secondary Text
          800: '#133A5B', // Secondary Navy
          900: '#03213B', // Primary Navy
          950: '#17202A', // Primary Text
        },
        cream: {
          50: '#F8FAFA',
          100: '#FFFFFF',
          200: '#EEF1F1',
        },
        teal: {
          500: '#25d366',
          600: '#1ebe5a',
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(180deg, #F8FAFA 0%, #EEF1F1 55%, #F8FAFA 100%)',
        'purple-gradient': 'linear-gradient(135deg, #5B4BDB, #4b3bc9)',
        'accent-gradient': 'linear-gradient(135deg, #5B4BDB, #4b3bc9)',
        'navy-gradient': 'linear-gradient(135deg, #03213B, #133A5B)',
        'dark-gradient': 'linear-gradient(135deg, #03213B, #133A5B)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotateY(0deg)' },
          '50%': { transform: 'translateY(-12px) rotateY(3deg)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.85)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        pulse3d: {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(132,120,239,0.4)' },
          '50%': { transform: 'scale(1.02)', boxShadow: '0 0 0 15px rgba(132,120,239,0)' },
        },
        rotateBg: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        fadeInUp: 'fadeInUp 0.7s ease forwards',
        slideInLeft: 'slideInLeft 0.7s ease forwards',
        slideInRight: 'slideInRight 0.7s ease forwards',
        scaleIn: 'scaleIn 0.5s ease forwards',
        pulse3d: 'pulse3d 3s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
      perspective: {
        '500': '500px',
        '800': '800px',
        '1000': '1000px',
      },
      boxShadow: {
        '3d': '0 25px 60px -15px rgba(3,33,59,0.2), 0 8px 25px -8px rgba(191,168,143,0.2)',
        'card': '0 20px 50px -15px rgba(3,33,59,0.07), 0 4px 15px -4px rgba(0,0,0,0.03)',
        'card-hover': '0 30px 70px -15px rgba(3,33,59,0.14), 0 8px 25px -5px rgba(191,168,143,0.22)',
        'glow': '0 0 30px rgba(191,168,143,0.4)',
        'glow-sm': '0 0 15px rgba(191,168,143,0.25)',
        'wa': '0 10px 30px -8px rgba(37,211,102,0.5)',
      },
    },
  },
  plugins: [],
}
