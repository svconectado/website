import React from "react"
import styled from "styled-components"
import tw from "twin.macro"

import { theme as CustomTheme } from "../../tailwind.config"
import Layout from "../components/layout"
import SEO from "../components/seo"
import notFoundImage from "../images/404.png"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <StyledWrapper className="not-found container">
      <img
        src={notFoundImage}
        alt="No encontrado"
        className="not-found__image"
      />
      <h1 className="not-found__title">No encontrado</h1>
      <p className="not-found__message">
        El contenido solicitado no está disponible.
      </p>
    </StyledWrapper>
  </Layout>
)

const StyledWrapper = styled.div`
  ${tw`flex flex-col justify-center items-center`}
  ${tw`font-montserrat`}
  ${tw`mt-20`}

  @media (min-width: ${CustomTheme.extend.screens.laptop}) {
    .not-found {
      &__image {
        ${tw`w-2/6`}
      }
    }
  }
`

export default NotFoundPage
