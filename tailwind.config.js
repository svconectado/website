module.exports = {
  theme: {
    extend: {
      colors: {
        gray: "#E9E9E9",
        graytext: "#555555",
        separator: "#D6DFE0"
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
      fontSize: {
        baseSize: "1rem",
        "7xl": "5rem",
        "8xl": "6rem",
        "9xl": "7rem",
        "10xl": "8rem"
      },
      borderColor: (theme) => ({
        separator: theme("colors.separator")
      }),
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
