/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#F4EFE6', // Warm parchment / studio paper tone from screenshot
          pure: '#FAF7F2',
          subtle: '#EFE8DC',
          dark: '#E7DFCFCF',
        },
        charcoal: {
          DEFAULT: '#2A2724', // Warm deep brown-charcoal ink
          soft: '#4A4540',
          muted: '#7A746D',
          border: '#DDD5C8',
        },
        ochre: {
          DEFAULT: '#D49B45',
          dark: '#B87B2E',
        },
        terracotta: {
          DEFAULT: '#C35E44',
          soft: '#D97A62',
        },
        sage: {
          DEFAULT: '#6B7A63',
        },
      },
      fontFamily: {
        hand: ['"Caveat"', 'cursive'],
        serif: ['"Newsreader"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'canvas-float': '0 12px 32px -8px rgba(42, 39, 36, 0.16), 0 4px 12px -2px rgba(42, 39, 36, 0.08)',
        'canvas-subtle': '0 6px 20px -4px rgba(42, 39, 36, 0.10)',
        'polaroid': '0 4px 16px -2px rgba(42, 39, 36, 0.12), 0 0 0 1px rgba(42, 39, 36, 0.05)',
      },
    },
  },
  plugins: [],
};
