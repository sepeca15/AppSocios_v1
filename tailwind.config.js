module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        red: "#F64E60",
        fondogray: "#F3F6F9",
        blue: "#3699FF",
        green: "#65DF74",
        yellow: "#E8EB62",
        gray: "#C4C4C4",
        texto:"#B5B5C3"
      },
    },
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
