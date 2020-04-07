import React from "react"
import { ThemeProvider } from "./src/context/ThemeContext"
import "tailwindcss/dist/base.css"

const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)

export default wrapRootElement
