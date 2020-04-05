import { Link, graphql, StaticQuery } from "gatsby"
import React from "react"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
// import Menu from "./menu"

import ThemeContext from "../context/ThemeContext"
import ElSalvadorConectadoLogo from "../images/elsalvadorconectado-logo.svg"

const blueTransparentColor = "rgba(23, 72, 237, 0.85)"

const StyledLink = styled.a`
  color: #fff;
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 32px;
  padding: 13px 6px;
  position: relative;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background-color: #8ca2ec;
    opacity: 0.85;
    width: 31px;
    height: 100%;
  }
`

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(
          relativePath: { eq: "perry-grone-lbLgFFlADrY-unsplash.jpg" }
        ) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData
      const imageFluid = data.desktop.childImageSharp.fluid
      return (
        <>
          <BackgroundImage
            Tag="section"
            className="test-bg"
            fluid={imageFluid}
            backgroundColor={blueTransparentColor}
          >
            <ThemeContext.Consumer>
              {theme => (
                <div
                  style={{
                    minHeight: `840px`,
                  }}
                >
                  <button className="dark-switcher" onClick={theme.toggleDark}>
                    {theme.dark ? <span>☀</span> : <span>☾</span>}
                  </button>
                  <div
                    style={{
                      margin: `0 auto`,
                      maxWidth: 960,
                      padding: `0 1.0875rem`,
                    }}
                  >
                    <div style={{ paddingTop: "140px" }}>{/* spacing */}</div>
                    <Link to="/">
                      <img
                        src={ElSalvadorConectadoLogo}
                        alt="El texto se lee El Salvador Conectado con un logotipo formando una especie de abrazo"
                        style={{
                          height: "75px",
                          width: "254px",
                        }}
                      />
                    </Link>

                    {/* <Menu /> */}

                    <h1
                      style={{
                        color: "#fff",
                        width: "583px",
                        paddingTop: "80px",
                        fontWeight: "700",
                        fontSize: "62px",
                      }}
                    >
                      <span style={{ fontWeight: "400", display: "block" }}>
                        {`El Salvador es más `}
                      </span>
                      si está conectado
                    </h1>

                    <div style={{ height: "48px" }}>{/* spacing */}</div>

                    <StyledLink
                      className="testingstyledlink"
                      href="http://unete.elsalvadorconectado.org"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Únete ahora →
                    </StyledLink>
                  </div>
                </div>
              )}
            </ThemeContext.Consumer>
          </BackgroundImage>
          <div
            className="test-this"
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `0 1.0875rem`,
            }}
          >
            <span>
              Photo by{" "}
              <a
                href="https://unsplash.com/@perrygrone?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
                target="_blank"
                rel="noopener noreferrer"
              >
                Perry Grone
              </a>{" "}
              on{" "}
              <a
                href="https://unsplash.com/s/photos/together?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
                target="_blank"
                rel="noopener noreferrer"
              >
                Unsplash
              </a>
            </span>
          </div>
        </>
      )
    }}
  ></StaticQuery>
)

export default Header
