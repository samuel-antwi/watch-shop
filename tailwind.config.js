module.exports = {
  purge: [],
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
        // site: '#f4ecde',
        site: '#f5f5f5',
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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
