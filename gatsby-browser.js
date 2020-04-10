import React from "react"
import { ThemeProvider } from "./src/context/ThemeContext"
import "tailwindcss/dist/base.css"
import "tailwindcss/dist/components.css"
import "tailwindcss/dist/utilities.css"
import "font-awesome/css/font-awesome.min.css"
import "./src/styles/base.scss"

const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)

export default wrapRootElement
