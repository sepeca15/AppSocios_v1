module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        red1: "#F64E60",
        fondogray1: "#F3F6F9",
        blue1: "#3699FF",
        green1: "#65DF74",
        greenLight1: "#77bd7f",
        greenBlack1: "#0a7917",
        yellow1: "#E8EB62",
        gray1: "#C4C4C4",
        grayBlack1: "#4c4d4f",
        texto1: "#B5B5C3"
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
