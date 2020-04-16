import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import tw from "twin.macro"
import _ from "lodash"

import { theme as CustomTheme } from "../../tailwind.config"
import ThemeContext from "../context/ThemeContext"
import ElSalvadorConectadoLogo from "../images/elsalvadorconectado-logo.svg"

const blueTransparentColor = "rgba(23, 72, 237, 0.85)"

const Header = ({ data = {}, headerVh = 100 }) => {
  const height = headerVh
  const page = _.get(data, "wpgraphql.page", {})
  const header = _.get(data, "wpgraphql.page.customFields.bodySectionHeader", {})
  const firstSlogan = _.get(header, "firstSlogan", "")
  const secondSlogan = _.get(header, "secondSlogan", "")
  const joinButton = _.get(header, "joinButton", { tex: "", href: "" })
  const backgroundImage = _.get(header, "backgroundImage", { wpUrl: "" })
  const errorMessageTitle = `Error: No existe página en Wordpress con URL slug
    "content-page-home", se debe de crear desde
     el administrador de Wordpress con el nombre ya mencionado.

     Además Wordpress necesita las instalación de ciertos plugins,
     puedes encontrar la guía para implementarlo de forma local en la
     Wiki del repositorio.`
  const errorMessageBody = "https://github.com/svconectado/website/wiki"
  return (
    <StyledWrapper
      className="header"
      backgroundImage={backgroundImage}
      headerVh={height}
      bgColor={blueTransparentColor}
    >
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
                {!page && (
                  <div className="header__hero__container__text__error">
                    <span>
                      {errorMessageTitle}
                    </span>
                    <pre>
                      { errorMessageBody }
                    </pre>
                  </div>
                )}
                {page && (
                  <h1 className="header__hero__container__text__message">
                    <span className="header__hero__container__text__message__light">
                      {firstSlogan}
                    </span>
                    {secondSlogan}
                  </h1>
                )}
                {page && (
                  <div className="header__hero__container__text__button">
                    <a
                      className="header__hero__container__text__button__href"
                      href={joinButton.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      { joinButton.text }
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}
        </ThemeContext.Consumer>
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  .header__hero {
    background-image: url(${(props) => props.backgroundImage.wpUrl});
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
      ${tw`py-0`}
      z-index: 1;

      &__text {
        height: ${(props) => props.headerVh}vh;
        ${tw`flex flex-col justify-around items-center`}
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
          ${tw`flex flex-col justify-center items-center text-3xl`}

          &__light {
            ${tw`font-normal`}
          }
        }

        &__error {
          ${tw`flex flex-col items-center justify-center w-full pb-40`}
          ${tw`text-sm`}
          pre {
            ${tw`w-full mt-4`}
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

@media (min-width: ${CustomTheme.extend.screens.tablet}) {
  .hero__container__text__button__href {
    ${tw`text-3xl`}
  }

  .header__hero__container__text__message {
    ${tw`text-5xl`}
  }
}

@media (min-width: ${CustomTheme.extend.screens.laptop}) {
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

      &__error {
        ${tw`pt-32 pb-0`}
      }
    }
  }
}

@media (min-width: ${CustomTheme.extend.screens.desktop}) {
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
