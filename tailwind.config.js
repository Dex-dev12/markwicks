/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#C8102E',
        'primary-dark': '#970C22',
        'primary-light': '#E2536B',
        accent: '#111111',
        'accent-dark': '#000000',
        background: '#F9F9F9',
        surface: '#FFFFFF',
        ink: '#1A1A1A',
        muted: '#6A6A6A',
        divider: '#E0E0E0',
        deep: '#0F1419',
      },
      fontFamily: {
        display: ['"Roboto"', 'system-ui', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
        body: ['"Roboto"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        '2.5xl': '1.25rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
        '7xl': '4rem',
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'blink': 'blink 1s step-end infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
