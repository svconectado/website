import React from "react"
import { ThemeProvider } from "./src/context/ThemeContext"
import "tailwindcss/dist/base.css"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)
