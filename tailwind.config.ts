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
          DEFAULT: '#1C3461',
          deep: '#14264B',
        },
        red: {
          DEFAULT: '#E3262E',
          hover: '#C91F27',
        },
        mist: '#EEF2F8',
        paper: '#FFFFFF',
        ink: '#16223B',
        line: '#D3DDEC',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
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
        'xs': '420px',
      },
    },
  },
  plugins: [],
};
export default config;
