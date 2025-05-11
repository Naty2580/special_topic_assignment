// --- FILENAME: tailwind.config.js ---
/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'primary-dark': '#0A0F14', // Even darker base
          'secondary-dark': '#101820', // For cards, slightly lighter elements
          'border-dark': '#1E293B', // For subtle borders
          'accent-cyan': '#06B6D4',   // Main accent
          'accent-blue': '#3B82F6',   // Secondary accent
          'accent-orange': '#F59E0B', // Tertiary accent or highlight
          'text-primary': '#E5E7EB',  // Main text color (light gray)
          'text-secondary': '#9CA3AF',// Muted text color
          'text-heading': '#F3F4F6',  // Slightly brighter for headings
        },
        fontFamily: {
          sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
          mono: ['Roboto Mono', 'monospace'],
        },
        animation: {
          'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
          'fade-in-down': 'fadeInDown 0.7s ease-out forwards',
          'slide-in-left': 'slideInLeft 0.7s ease-out forwards',
          'slide-in-right': 'slideInRight 0.7s ease-out forwards',
          'subtle-beat': 'subtleBeat 2s infinite ease-in-out',
          'gradient-bg': 'gradientBg 15s ease infinite',
        },
        keyframes: {
          fadeInUp: {
            '0%': { opacity: '0', transform: 'translateY(30px) scale(0.98)' },
            '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
          },
          fadeInDown: {
            '0%': { opacity: '0', transform: 'translateY(-30px) scale(0.98)' },
            '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
          },
          slideInLeft: {
            '0%': { opacity: '0', transform: 'translateX(-50px)' },
            '100%': { opacity: '1', transform: 'translateX(0)' },
          },
          slideInRight: {
            '0%': { opacity: '0', transform: 'translateX(50px)' },
            '100%': { opacity: '1', transform: 'translateX(0)' },
          },
          subtleBeat: {
            '0%, 100%': { transform: 'scale(1)' },
            '50%': { transform: 'scale(1.02)' },
          },
          gradientBg: {
            '0%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
            '100%': { backgroundPosition: '0% 50%' },
          }
        },
        boxShadow: {
          'glow-cyan': '0 0 20px 0px rgba(6, 182, 212, 0.5)',
          'glow-blue': '0 0 20px 0px rgba(59, 130, 246, 0.4)',
          'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(30, 41, 59, 0.5)', // Subtle card shadow for dark theme
        },
        backgroundImage: {
          'hero-pattern': "linear-gradient(to bottom right, rgba(10, 15, 20, 0.95), rgba(16, 24, 32, 0.95)), url('/src/assets/images/hero-bg-abstract.svg')", // Add a subtle SVG background later
          'hero-gradient': "radial-gradient(ellipse at center, hsla(200, 80%, 15%, 0.5) 0%, hsla(210, 80%, 10%, 0.8) 40%, #0A0F14 100%)"
        }
      },
    },
    plugins: [],
  }