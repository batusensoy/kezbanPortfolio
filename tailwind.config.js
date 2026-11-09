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
          DEFAULT: '#FAF8F5', // Warm ivory
          subtle: '#F4EFEB',  // Soft linen beige
          muted: '#EDE6DF',   // Earthy neutral stone
          elevated: '#FFFFFF',
        },
        charcoal: {
          DEFAULT: '#1C1B1A', // Deep organic charcoal
          light: '#2E2C2A',
          muted: '#615E59',   // Warm graphite
          border: '#E3DDD5',  // Subtle canvas border
        },
        terracotta: {
          DEFAULT: '#B45A3C', // Earthy art accent
          hover: '#9E4E33',
          light: '#F8EFEA',
        },
        ochre: {
          DEFAULT: '#C49746',
          light: '#FAF3E3',
        },
        olive: {
          DEFAULT: '#606B56',
          light: '#EFF2EC',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Cormorant Garamond', 'Baskerville', 'Georgia', 'serif'],
        sans: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'gallery-sm': '0 2px 8px -2px rgba(28, 27, 26, 0.05)',
        'gallery-md': '0 8px 24px -4px rgba(28, 27, 26, 0.08)',
        'gallery-lg': '0 20px 40px -8px rgba(28, 27, 26, 0.12)',
        'frame': '0 0 0 1px rgba(28, 27, 26, 0.08), 0 16px 36px -12px rgba(28, 27, 26, 0.14)',
      },
    },
  },
  plugins: [],
};
