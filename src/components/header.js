import { Link } from "gatsby"
import React from "react"
import Menu from "./menu"

import ThemeContext from "../context/ThemeContext"
import ElSalvadorConectadoLogo from "../images/elsalvadorconectado-logo.svg"
import ImagenManosEnMedio from "../images/perry-grone-lbLgFFlADrY-unsplash.jpg"

const Header = () => (
  <ThemeContext.Consumer>
    {theme => (
      <div>
        <div
          style={{
            backgroundImage: `url(${ImagenManosEnMedio})`,
            backgroundPosition: `center center`,
            backgroundSize: `cover`,
            backgroundColor: `rgba(23, 72, 237, 0.85)`,
            marginBottom: `1.45rem`,
            minHeight: `840px`,
          }}
        >
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `1.45rem 1.0875rem`,
            }}
          >
            <Link to="/">
              <img
                src={ElSalvadorConectadoLogo}
                alt="El texto se lee El Salvador Conectado con un logotipo formando una especie de abrazo"
              />
            </Link>

            <Menu />

            <button className="dark-switcher" onClick={theme.toggleDark}>
              {theme.dark ? <span>☀</span> : <span>☾</span>}
            </button>
          </div>
        </div>
        <span>
          Photo by{" "}
          <a href="https://unsplash.com/@perrygrone?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            Perry Grone
          </a>{" "}
          on{" "}
          <a href="/s/photos/together?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            Unsplash
          </a>
        </span>
      </div>
    )}
  </ThemeContext.Consumer>
)

export default Header
