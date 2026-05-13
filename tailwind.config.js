/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bio: {
          900: '#f8fafc', // Background (Light)
          800: '#f1f5f9',
          700: '#e2e8f0',
          600: '#cbd5e1',
          500: '#94a3b8',
          400: '#64748b',
          300: '#475569',
          200: '#334155', // Subtext
          100: '#1e293b', // Headers
          50:  '#0f172a', // Main text (Dark)
        },
        cyan: {
          DEFAULT: '#0ea5e9',
          light: '#7dd3fc',
          dark: '#0369a1',
        },
        emerald: {
          DEFAULT: '#10b981',
          light: '#6ee7b7',
          dark: '#047857',
        },
        teal: {
          DEFAULT: '#14b8a6',
          light: '#5eead4',
          dark: '#0f766e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans Thai', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'scan': 'scan 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #0ea5e944, 0 0 20px #10b98122' },
          '100%': { boxShadow: '0 0 20px #0ea5e966, 0 0 60px #10b98133' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(rgba(15,23,42,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.05) 1px, transparent 1px)",
        'radial-glow': 'radial-gradient(ellipse at center, rgba(14,165,233,0.12) 0%, transparent 70%)',
        'hero-gradient': 'linear-gradient(135deg, #f8fafc 0%, #effdf8 48%, #e0f2fe 100%)',
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
