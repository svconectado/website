import React from "react"
import styled from "styled-components"
import tw from "twin.macro"
import { theme as CustomTheme } from "../../tailwind.config"

import ElSalvadorConectadoLogo from "../images/elsalvadorconectado-logo.svg"

const Footer = () => (
  <StyledFooter className="footer">
    <div className="footer__container container">
      <div className="footer__container__logo">
        <img
          src={ElSalvadorConectadoLogo}
          className="footer__container__logo__img"
          alt="El texto se lee El Salvador Conectado con un logotipo formando una especie de abrazo"
        />
      </div>
      <div className="footer__container__text">
        <div className="footer__container__text__menu">
          <span className="footer__container__text__menu__element">
            <a
              className="footer__container__text__menu__element__link"
              href="http://unete.elsalvadorconectado.org"
            >
              Unirse
            </a>
          </span>
          <span className="footer__container__text__menu__element">
            <a
              className="footer__container__text__menu__element__link"
              href="/"
            >
              Nosotros
            </a>
          </span>
          <span className="footer__container__text__menu__element">
            <a
              className="footer__container__text__menu__element__link"
              href="/"
            >
              Iniciativas
            </a>
          </span>
        </div>
        <div className="footer__container__text__social">
          <a
            href="https://twitter.com/svconectado"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="footer__container__text__social__element"
          >
            <i className="fa fa-twitter" />
          </a>
          <a
            href="https://www.facebook.com/svconectado"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="footer__container__text__social__element"
          >
            <i className="fa fa-facebook" />
          </a>
          <a
            href="https://www.instagram.com/svconectado/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="footer__container__text__social__element"
          >
            <i className="fa fa-instagram" />
          </a>
        </div>
      </div>
    </div>
  </StyledFooter>
)

const StyledFooter = styled.div`
  ${tw`bg-gray h-auto`}

  .footer__container {
    ${tw`font-montserrat text-gray`}
    ${tw`flex flex-col justify-center items-center py-12`}

    &__text {
      &__menu {
        ${tw`flex flex-col justify-center items-center my-4`}
        ${tw`font-medium`}
      }

      &__social {
        ${tw`flex justify-center items-center`}

        &__element {
          ${tw`text-center text-3xl`}
        }
      }
    }
  }

  @media (min-width: ${CustomTheme.extend.screens.laptop}) {
    .footer__container {
      ${tw`flex-row py-10`}

      &__logo {
        ${tw`w-1/2`}

        &__img {
          ${tw`mb-0`}
        }
      }

      &__text {
        ${tw`w-1/2`}

        &__menu {
          ${tw`flex-row justify-end`}

          &__element {
            ${tw`ml-4`}
          }
        }

        &__social {
          ${tw`flex-row justify-end`}

          &__element {
            ${tw`text-right text-2xl`}
          }
        }
      }
    }
  }
`
export default Footer
