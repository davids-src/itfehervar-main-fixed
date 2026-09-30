import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#102235',
          secondary: '#173049',
        },
        red: {
          DEFAULT: '#E00018',
          hover: '#C70016',
        },
        paper: '#FFFFFF',
        mist: '#F5F7F8',
        ink: '#18212A',
        muted: '#65717C',
        line: '#D8DEE3',
      },
      fontFamily: {
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        display: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        base: ['1rem', { lineHeight: '1.5' }],
        lg: ['1.125rem', { lineHeight: '1.6' }],
        xl: ['1.3125rem', { lineHeight: '1.4' }],
        '2xl': ['1.75rem', { lineHeight: '1.25' }],
        '3xl': ['2.5rem', { lineHeight: '1.1' }],
        '4xl': ['3.5rem', { lineHeight: '1.05' }],
      },
      maxWidth: {
        content: '1080px',
      },
      screens: {
        xs: '420px',
      },
    },
  },
  plugins: [],
};
export default config;
