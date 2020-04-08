import React from "react"
import { ThemeProvider } from "./src/context/ThemeContext"
import "tailwindcss/dist/base.css"
import "tailwindcss/dist/components.css"
import "tailwindcss/dist/utilities.css"
import "./src/styles/base.css"

const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)

export default wrapRootElement
