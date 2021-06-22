module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#0062cc',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
      'black': '#343a40'
    })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
