import React from "react"
import Styled from "styled-components"
import TwCss from "twin.macro"
import { theme as CustomTheme } from "../../tailwind.config"
import "../../node_modules/font-awesome/css/font-awesome.min.css"

import ElSalvadorConectadoLogo from "../images/elsalvadorconectado-logo.svg"

const Footer = () => (
  <StyledFooter>
    <div className="footer">
      <div className="footer__containerLeft">
        <img src={ElSalvadorConectadoLogo} className="footer__containerLeft__image" alt="El texto se lee El Salvador Conectado con un logotipo formando una especie de abrazo" />
      </div>
      <div className="footer__containerRight">
        <p className="footer__containerRight__links">
          <span className="footer__containerRight__links__element"><a href="http://unete.elsalvadorconectado.org">Unirse</a></span>
          <span className="footer__containerRight__links__element"><a href="/">Nosotros</a></span>
          <span className="footer__containerRight__links__element"><a href="/">Iniciativas</a></span>
        </p>
        <p className="footer__containerRight__social">
          <a href="https://www.facebook.com/svconectado" aria-label="Facebook" className="footer__containerRight__social__element"><i className="fa fa-facebook" /></a>
          <a href="https://twitter.com/svconectado" aria-label="Twitter" className="footer__containerRight__social__element"><i className="fa fa-twitter" /></a>
          <a href="https://www.instagram.com/svconectado/" aria-label="Instagram" className="footer__containerRight__social__element"><i className="fa fa-instagram" /></a>
        </p>
      </div>
    </div>
  </StyledFooter>
)

const StyledFooter = Styled.div`
  .footer{
    ${TwCss`w-full`}
    height:200px;
    background-color:${CustomTheme.extend.colors.gray};
    &__containerLeft{
      ${TwCss`w-2/5 float-left h-full`}
      background-color:${CustomTheme.extend.colors.gray};
      &__image{
        ${TwCss`mx-auto`}
        width:250px;
        height:74px;
        top:calc(50% - 37px);
        position:relative;
      }
    }
    &__containerRight{
      ${TwCss`w-3/5 float-left h-full`}
      background-color:${CustomTheme.extend.colors.gray};
      display: flex;
      justify-content: center;
      align-content: center;
      flex-direction: column;
      &__links{
        ${TwCss`w-full leading-none text-right`}
        padding: 0px 50px 0px 0px;
        margin:0px;
        font-size:18px;
        &__element{
          padding-left:30px;
          color:${CustomTheme.extend.colors.graytext};
          transition: 0.4s all ease;
          &:hover{
             color: #1b7bed;   
          }
        }
      }
      &__social{
        ${TwCss`w-full leading-none text-right`}
        padding: 0px 50px 0px 0px;
        margin:0px;
        font-size:30px;
        &__element{
          margin:0px;
          padding: 0px 0px 0px 0px;         
          color:${CustomTheme.extend.colors.graytext};
          transition: 0.4s all ease;
          &:hover{
            color: #1b7bed;   
          }
        }
      }
    }
  }
  @media (max-width: ${CustomTheme.extend.screens.tablet}) {
    .footer{
      ${TwCss`h-auto`}
      &__containerLeft{
        ${TwCss`w-full float-left h-auto`}
        &__image{
          top:0px;
          margin-top:40px;
          margin-bottom:40px;
        }
      }
      &__containerRight{
        ${TwCss`w-full float-left h-auto`}
        &__links{
          ${TwCss`text-center`}
          padding: 0px;
          &__element{
            ${TwCss`w-full float-left `}
            padding-top:5px;
            padding-bottom:5px;
          }
        }
        &__social{
          ${TwCss`text-center`}
          padding: 0px;
          margin-top:10px;
          font-size:35px;
        }
      }
    }
  }
`
export default Footer
