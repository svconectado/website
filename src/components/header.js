import { Link, graphql, StaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"
import tw from "twin.macro"
import { theme as themeTw } from "../../tailwind.config"

import ThemeContext from "../context/ThemeContext"
import ElSalvadorConectadoLogo from "../images/elsalvadorconectado-logo.svg"

const blueTransparentColor = "rgba(23, 72, 237, 0.85)"

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
    render={(data) => {
      // Set ImageData
      const imageFluid = data.desktop.childImageSharp.fluid
      return (
        <StyledWrapper className="header" imageFluid={imageFluid} bgColor={blueTransparentColor}>
          <div className="header__hero">
            <ThemeContext.Consumer>
              {(theme) => (
                <div className="header__hero__container container">
                  <button type="button" className="dark-switcher" onClick={theme.toggleDark}>
                    {theme.dark ? <span>☀</span> : <span>☾</span>}
                  </button>
                  <div className="header__hero__container__text">
                    <Link className="header__hero__container__text__logo" to="/">
                      <img
                        src={ElSalvadorConectadoLogo}
                        alt="El texto se lee El Salvador Conectado con un logotipo formando una especie de abrazo"
                      />
                    </Link>

                    {/* <Menu /> */}

                    <h1 className="header__hero__container__text__message">
                      <span className="header__hero__container__text__message__light">
                        {"El Salvador es más "}
                      </span>
                      si está conectado
                    </h1>

                    <div className="header__hero__container__text__button">
                      <a
                        className="header__hero__container__text__button__href"
                        href="http://unete.elsalvadorconectado.org"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Únete ahora →
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </ThemeContext.Consumer>
          </div>
          <div>
            <span>
              Photo by
              {" "}
              <a
                href="https://unsplash.com/@perrygrone?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
                target="_blank"
                rel="noopener noreferrer"
              >
                Perry Grone
              </a>
              {" "}
              on
              {" "}
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
  />
)

const StyledWrapper = styled.div`
  .header__hero {
    background-image: url(${(props) => props.imageFluid.src});
    ${tw`bg-local bg-center bg-no-repeat bg-cover`}
    ${tw`relative`}

    &::after {
      ${tw`absolute inset-0 w-full h-full`}
      content: " ";
      z-index: 0;
      background-color: ${(props) => props.bgColor};
    }

    &__container {
      ${tw`font-montserrat text-white`}
      ${tw`relative`}
      ${tw`mx-auto`}
      z-index: 1;

      &__text {
        ${tw`h-screen flex flex-col justify-around items-center`}
        ${tw`text-4xl`}

        &__logo {
          ${tw`w-2/4`}
          ${tw`flex justify-center`}

          img {
            ${tw`mb-0`}
          }
        }

        &__message {
          ${tw`text-center font-bold`}
          ${tw`flex flex-col justify-center items-center`}

          &__light {
            ${tw`font-normal`}
          }
        }

        &__button {
          ${tw`text-2xl font-bold underline`}

          &__href {
            ${tw`flex justify-center items-center`}
            ${tw`relative`}

            &::after {
              content: '';
              ${tw`absolute inset-0 h-full w-1/12`}
              background-color: #8ca2ec;
              opacity: 0.50;
              transition: width 1s ease-out;
            }

            &:hover {
              &::after {
                ${tw`w-full`}
              }
            }
          }
        }
      }
    }
  }

@media (min-width: ${themeTw.extend.screens.tablet}) {
  .hero__container__text__button__href {
    ${tw`text-3xl`}
  }

  .header__hero__container__text__message {
    ${tw`text-5xl`}
  }
}

@media (min-width: ${themeTw.extend.screens.laptop}) {
  .header__hero {
    &__container__text {
      ${tw`items-start justify-start`}
      ${tw`py-24`}

      &__logo {
        ${tw`justify-start`}
        ${tw`w-1/4`}
      }

      &__message {
        ${tw`pt-20`}
      }

      &__button {
        ${tw`pt-8`}
      }
    }
  }
}

@media (min-width: ${themeTw.extend.screens.desktop}) {
  .header__hero__container__text__message {
    ${tw`pt-24`}
    ${tw`text-6xl`}
  }

  .header__hero__container__text__button {
    ${tw`pt-12`}
    ${tw`text-4xl`}
  }
}
`

export default Header
