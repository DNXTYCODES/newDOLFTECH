/** @type {import('tailwindcss').Config} */
export default {
  // content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyan: {
          500: '#00d8ff',
          600: '#00a3cc',
        },
        purple: {
          700: '#7928ca',
          800: '#5a1e9e',
        },
        red: {
          500: '#ff2d55',
          600: '#e02045',
        },
      },
      backgroundImage: {
        'gaming-pattern': "url('/src/assets/gaming-pattern.svg')",
        'circuit-board': "url('/src/assets/circuit-board.svg')",
      },
      animation: {
        'rgb-cycle': 'rgb-cycle 4s ease infinite',
      },
      keyframes: {
        'rgb-cycle': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};





















// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   // theme: {
//   //   extend: {},
//   // },
//   theme: {
//     extend: {
//       backgroundImage: {
//         "golden-brown": "linear-gradient(90deg, #996515, white)", // Adjust colors as needed
//       },
//     },
//   },
//   plugins: [
//     // require('@tailwindcss/aspect-ratio')
//   ],
// };
