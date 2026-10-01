/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        'off-white': '#F7F7F4',
        ivory: '#FBFBF9',
        navy: {
          light: '#EBF1F8',
          700: '#122B4E',
          800: '#0B1F3A',
          900: '#071426',
        },
        gold: {
          pale: '#FDF8EA',
          light: '#DDBB5A',
          DEFAULT: '#C9A227',
          dark: '#A88419',
        },
        neutral: {
          muted: '#6B7280',
          border: '#E5E7EB',
          subtle: '#F3F4F6'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(11, 31, 58, 0.05)',
        'elevated': '0 20px 40px -15px rgba(11, 31, 58, 0.08)',
        'luxury': '0 25px 50px -12px rgba(7, 20, 38, 0.12)',
        'gold-glow': '0 0 25px rgba(201, 162, 39, 0.25)',
      },
      letterSpacing: {
        'widest-luxury': '0.25em',
        'ultra-wide': '0.35em',
      }
    },
  },
  plugins: [],
}
