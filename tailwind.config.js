/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFF5F5',
          100: '#FFE6E6',
          200: '#FFC7C7',
          300: '#FFA8A8',
          400: '#FF8A8A',
          500: '#FF4136', // Main primary color
          600: '#FF1F1F',
          700: '#DB0000',
          800: '#B20000',
          900: '#910000',
        },
        secondary: {
          50: '#F8F5F0',
          100: '#F1EAE0',
          200: '#E3D5C1',
          300: '#D6C0A2',
          400: '#C8AC83',
          500: '#BA9764',
          600: '#A67E47',
          700: '#8B653B',
          800: '#704D2E',
          900: '#583E26',
        },
        accent: {
          50: '#FFFBF0',
          100: '#FFF7E0',
          200: '#FFEEB0',
          300: '#FFE480',
          400: '#FFDB50',
          500: '#FFCB1F', // Main accent color
          600: '#EBB700',
          700: '#C69800',
          800: '#A17A00',
          900: '#7D5F00',
        },
        burger: {
          bun: '#F6C288',
          patty: '#582C14',
          lettuce: '#4CAF50',
          tomato: '#E53935',
          bacon: '#964B00',
          cheese: '#FFC107',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Poppins', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      backgroundImage: {
        'wood-pattern': "url('https://images.pexels.com/photos/129733/pexels-photo-129733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        'dark-pattern': "url('https://images.pexels.com/photos/2078266/pexels-photo-2078266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      }
    },
  },
  plugins: [],
};