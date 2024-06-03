// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // Enable dark mode support
  theme: {
    extend: {
      screens: {
        'xs': '480px',  // Extra Small devices (e.g., smartphones in portrait mode)
        'sm': '640px',  // Small devices (e.g., smartphones in landscape mode)
        'md': '768px',  // Medium devices (e.g., tablets)
        'lg': '1024px', // Large devices (e.g., desktops)
        'xl': '1280px', // Extra Large devices (e.g., large desktops)
        '2xl': '1536px', // 2X Large devices (e.g., very large desktops)
      },
      colors: {
        dark: {
          background: '#121212',
          text: '#e4e4e4',
        },
        light: {
          background: '#ffffff',
          text: '#000000',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
