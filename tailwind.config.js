module.exports = {
  theme: {
    extend: {
      colors: {
        gray: "#E9E9E9",
        graytext: "#555555"
      },
      backgroundColor: (theme) => ({
        gray: theme("colors.gray")
      }),
      textColor: (theme) => ({
        gray: theme("colors.graytext")
      }),
      fontFamily: {
        montserrat: "Montserrat, sans-serif",
        poppins: "Poppins, sans-serif"
      },
      // https://tailwindcss.com/docs/breakpoints
      // https://tailwindcss.com/docs/container
      screens: {
        tablet: "768px",
        laptop: "1024px",
        desktop: "1280px"
      }
    }
  },
  variants: {},
  plugins: []
}
