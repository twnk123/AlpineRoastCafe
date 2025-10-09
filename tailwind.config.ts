import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './content/**/*.json',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0b0b0b',
        foreground: '#ffffff',
        accent: '#5c3d2e',
        muted: '#111111',
        card: '#0f0f0f',
        border: '#232323',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-space)'],
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.35)',
        glow: '0 0 0 1px rgba(255,255,255,0.06), 0 20px 40px rgba(0,0,0,0.45)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' }
        }
      },
      animation: {
        float: 'float 8s ease-in-out infinite'
      }
    }
  },
  plugins: []
}

export default config

