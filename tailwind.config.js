module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        futura: ['Futura', 'sans-serif'],
      },
      backgroundColor: (theme) => ({
        ...theme('colors'),
        primary: '#2d2d2d',
        secondary: '#525050',
        site: '#f5f5f5',
        mini_nav_sale: '#007a20',
        btn_green_bg: '#008848',
      }),
      screens: {
        xxs: '280px',
        xs: '360px',
        smd: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      container: {
        center: true,
        padding: '1.5rem',
      },
      maxHeight: {
        100: '30rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
