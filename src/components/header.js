import { Link, graphql, StaticQuery } from "gatsby"
import React from "react"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
// import Menu from "./menu"

import ThemeContext from "../context/ThemeContext"
import ElSalvadorConectadoLogo from "../images/elsalvadorconectado-logo.svg"

const blueTransparentColor = "rgba(23, 72, 237, 0.85)"

const StyledWrapper = styled.div`
  .logo {
    width: 172.72px;
    margin: auto;
    display: block;
  }

  .headline {
    color: #fff;
    padding-top: 80px;
    font-weight: 700;
    font-size: 36px;
    text-align: center;

    span {
      font-weight: 400;
    }
  }

  .header_cta__wrapper {
    text-align: center;
  }

  .header_cta {
    color: #fff;
    font-family: "Montserrat";
    font-weight: 500;
    font-size: 24px;
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
      transition: width 1s ease-out;
    }

    &:hover {
      ::before {
        width: 100%;
      }
    }
  }

  @media (min-width: 376px) {
    .headline span {
      display: block;
    }
  }

  @media (min-width: 769px) {
    .logo {
      display: initial;
      margin: 0;
    }

    .headline {
      font-size: 62px;
      text-align: left;
    }

    .header_cta__wrapper {
      text-align: left;
    }

    .header_cta {
      font-size: 32px;
    }
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
        <StyledWrapper>
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
                    <div style={{ height: "140px" }}>{/* spacing */}</div>
                    <Link className="logo" to="/">
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

                    <h1 className="headline">
                      <span>{`El Salvador es más `}</span>
                      si está conectado
                    </h1>

                    <div style={{ height: "48px" }}>{/* spacing */}</div>

                    <div className="header_cta__wrapper">
                      <Link
                        className="header_cta"
                        href="http://unete.elsalvadorconectado.org"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Únete ahora →
                      </Link>
                    </div>
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
        </StyledWrapper>
      )
    }}
  ></StaticQuery>
)

export default Header
