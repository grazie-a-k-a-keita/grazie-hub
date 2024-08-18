import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(100px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'flip-down': {
          from: { opacity: '0', transform: 'perspective(2500px) rotateX(100deg)' },
          to: { opacity: '1', transform: 'perspective(2500px) rotateX(0)' },
        },
        'flip-right-top': {
          from: { opacity: '0', transform: 'translate(-20px, 80px) rotate(25deg)' },
          to: { opacity: '1', transform: 'translate(0,1) rotate(0deg)' },
        },
        'rotate-y': {
          from: { transform: 'rotateY(0)' },
          to: { transform: 'rotateY(-360deg)' },
        },
        'zoom-out': {
          from: { transform: 'scale(1.5)' },
          to: { transform: 'scale(1)' },
        },
        smooth: {
          from: { opacity: '0', transform: 'translate3d(0, 100%, 0) skewY(80deg)' },
          to: { opacity: '1', transform: 'translate3d(0) skewY(0)' },
        },
        'bg-extend-base': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'bg-extend-second': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'bg-left-extend': {
          '0%': { transformOrigin: 'left', transform: 'scaleX(0)' },
          '50%': { transformOrigin: 'left', transform: 'scaleX(1)' },
          '50.001%': { transformOrigin: 'right' },
          '100%': { transformOrigin: 'right', transform: 'scaleX(0)' },
        },
        'fluid-rotate': {
          '0%, 100%': {
            borderRadius: '63% 37% 54% 46%/55% 48% 52% 45%',
          },
          '14%': {
            borderRadius: '40% 60% 54% 46%/49% 60% 40% 51%',
          },
          '28%': {
            borderRadius: '54% 46% 38% 62%/49% 70% 30% 51%',
          },
          '42%': {
            borderRadius: '61% 39% 55% 45%/61% 38% 62% 39%',
          },
          '56%': {
            borderRadius: '61% 39% 67% 33%/70% 50% 50% 30%',
          },
          '70%': {
            borderRadius: '50% 50% 34% 66%/56% 68% 32% 44%',
          },
          '84%': {
            borderRadius: '46% 54% 50% 50%/35% 61% 39% 65%',
          },
        },
        shine: {
          '100%': {
            left: '125%',
          },
        },
        'glow-anime-on': {
          '0%': {
            opacity: '0',
            textShadow: '0 0 0 #0f172a, 0 0 0 #0f172a',
          },
          '50%': {
            opacity: '1',
            textShadow: '0 0 8px #0f172a, 0 0 12px #0f172a',
          },
          '100%': {
            opacity: '1',
            textShadow: '0 0 0 #fff, 0 0 0 #fff',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'bg-extend-base': 'bg-extend-base 1s forwards',
        'bg-extend-second': 'bg-extend-second 2s forwards',
        'bg-left-extend': 'bg-left-extend 1s forwards',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
} satisfies Config;

export default config;
