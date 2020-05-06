import React from "react"
import ThemeContext from "../context/ThemeContext"
import Menu from "./menu"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import "./layoutPreview.scss"

const Layout = ({ children, data, headerVh, showHeader, inspectScroll }) => (
  <ThemeContext.Consumer>
    {(theme) => (
      <div className={`body ${theme.dark ? "dark" : "light"}`}>
        <Menu inspectScroll={inspectScroll} />
        {showHeader && <Header data={data} headerVh={headerVh} />}
        <div>{children}</div>
        <Footer />
      </div>
    )}
  </ThemeContext.Consumer>
)

Layout.defaultProps = {
  headerVh: 100,
  showHeader: false
}

export default Layout
