module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: theme => ({
      "button": "#EF8354",
      "navbar": "#2D3142",
      "content": "#4F5D75",
      "white": "#FFFFFF"
    }),
     textColor: {
      "basic": "#505050",
      "content": "#BFC0C0",
      "title": "#4F5D75",
      "white": "#FFFFFF",
      "button": "#EF8354"
     },
     borderColor: theme => ({
      "profile": "#4F5D75",
      "content": "#BFC0C0",
      "basic": "#505050"
     }),
     fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"]
     }
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
    extend: {},
  },
  plugins: [],
}
