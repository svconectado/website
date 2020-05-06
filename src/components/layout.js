import React from "react"
import PropTypes from "prop-types"
import ThemeContext from "../context/ThemeContext"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import "./layoutPreview.scss"

const Layout = ({ children, data, headerVh }) => (
  <ThemeContext.Consumer>
    {(theme) => (
      <div className={`body ${theme.dark ? "dark" : "light"}`}>
        <Header data={data} headerVh={headerVh} />
        <div>{children}</div>
        <Footer />
      </div>
    )}
  </ThemeContext.Consumer>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
