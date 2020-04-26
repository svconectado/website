import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import _ from "lodash"
import tw from "twin.macro"

import { theme as CustomTheme } from "../../tailwind.config"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const page = _.get(data, "wpgraphql.page", {})
  const sectionMotivations = _.get(
    data,
    "wpgraphql.page.customFields.bodySectionMotivations",
    {}
  )
  const sectionAboutUs = _.get(
    data,
    "wpgraphql.page.customFields.bodySectionAboutUs",
    {}
  )
  const sectionInitiatives = _.get(
    data,
    "wpgraphql.page.customFields.bodySectionInitiatives",
    {}
  )
  const notFoundPageMessageError = "No existe la página solicitada"
  return (
    // headerVh = vh units of the Viewport
    <Layout data={data} showHeader inspectScroll>
      <SEO title="Home" description="" />
      <div className="container">
        {!page && (
          <StyleError>
            <span>{notFoundPageMessageError}</span>
          </StyleError>
        )}
        {page && (
          <StyleSectionMotivations className="motivations-wrapper">
            <div className="motivations">
              <h1 className="motivations__title">
                {_.get(sectionMotivations, "title", "")}
              </h1>
              <span className="motivations__first-description">
                {_.get(sectionMotivations, "firstDescription", "")}
              </span>
              <span className="motivations__second-description">
                {_.get(sectionMotivations, "secondDescription", "")}
              </span>
              <div className="motivations__list">
                {_.map(
                  _.get(sectionMotivations, "motivationsList", []),
                  (m) => (
                    <div key={m.text} className="motivations__list__item">
                      <div className="motivations__list__item__icon">
                        <img
                          src={m.icon}
                          alt={m.text}
                          className="motivations__list__item__icon__img"
                        />
                      </div>
                      <span className="motivations__list__item__text">
                        {m.text}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </StyleSectionMotivations>
        )}
        {page && (
          <StyleSectionAboutUs
            image={_.get(sectionAboutUs, "image", {})}
            className="aboutus-wrapper"
          >
            <div className="aboutus">
              <div className="aboutus__text">
                <h1 className="aboutus__text__title">
                  {_.get(sectionAboutUs, "title", "")}
                </h1>
                <div className="aboutus__text__img">
                  <a
                    className="aboutus__text__img__credit"
                    href={_.get(sectionAboutUs, "image.sourceUrl", "")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {_.get(sectionAboutUs, "image.authorName", "")}
                  </a>
                </div>
                <span className="aboutus__text__first-description">
                  {_.get(sectionAboutUs, "firstDescription", "")}
                </span>
                <span className="aboutus__text__second-description">
                  {_.get(sectionAboutUs, "secondDescription", "")}
                </span>
                <Link
                  to={_.get(sectionAboutUs, "moreButton.href", "")}
                  className="aboutus__text__more-button"
                >
                  {_.get(sectionAboutUs, "moreButton.text", "")}
                </Link>
              </div>
              <div className="aboutus__media">
                <div className="aboutus__media__container">
                  <img
                    src={_.get(sectionAboutUs, "image.wpUrl", "")}
                    alt={_.get(sectionAboutUs, "image.alt", "")}
                    className="aboutus__media__container__img"
                  />
                  <a
                    className="aboutus__media__container__img__credit"
                    href={_.get(sectionAboutUs, "image.sourceUrl", "")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {_.get(sectionAboutUs, "image.authorName", "")}
                  </a>
                </div>
              </div>
            </div>
          </StyleSectionAboutUs>
        )}
        {page && (
          <StyleSectionInitiatives className="initiatives-wrapper">
            <div className="initiatives">
              <h1 className="initiatives__title">
                {_.get(sectionInitiatives, "title", "")}
              </h1>
              <span className="initiatives__first-description">
                {_.get(sectionInitiatives, "firstDescription", "")}
              </span>
              <span className="initiatives__second-description">
                {_.get(sectionInitiatives, "secondDescription", "")}
              </span>
              <Link
                to={_.get(sectionInitiatives, "moreButton.href", "")}
                className="initiatives__more-button"
              >
                {_.get(sectionInitiatives, "moreButton.text", "")}
              </Link>
            </div>
          </StyleSectionInitiatives>
        )}
      </div>
    </Layout>
  )
}

const StyleError = styled.div`
  ${tw`font-poppins`}
  ${tw`flex flex-col justify-center items-center py-20`}
`

const StyleSectionMotivations = styled.div`
  .motivations {
    ${tw`font-poppins text-center`}
    ${tw`flex flex-col justify-center items-center pt-4 pb-12`}

    &__title {
      ${tw`font-semibold`}
      font-size: 2rem;
    }

    &__first-description {
      ${tw`mt-4 font-light`}
    }

    &__second-description {
      ${tw`mt-4 font-light`}
    }

    &__list {
      ${tw`flex flex-col justify-center items-center`}

      &__item {
        ${tw`flex flex-col justify-center items-center mt-8 w-1/2`}

        &__icon {
          ${tw`rounded-full shadow p-4 h-24 w-24`}
          ${tw`flex flex-col justify-center items-center`}

          &__img {
            ${tw`p-0 m-0`}
          }
        }

        &__text {
          ${tw`mt-4 text-xl text-blue`}
        }
      }
    }
  }

  @media (min-width: ${CustomTheme.extend.screens.tablet}) {
    .motivations {
      ${tw`pb-12`}

      &__list {
        ${tw`flex-row`}

        &__item {
          ${tw`w-full`}

          &__icon {
            ${tw`h-20 w-20`}
          }

          &__text {
            ${tw`text-sm`}
          }
        }
      }
    }
  }

  @media (min-width: ${CustomTheme.extend.screens.laptop}) {
    .motivations {
      ${tw`pb-16`}

      &__list {
        &__item {
          ${tw`px-4`}
          &__text {
            ${tw`text-base`}
          }
        }
      }
    }
  }

  @media (min-width: ${CustomTheme.extend.screens.desktop}) {
    .motivations {
      &__list {
        &__item {
          ${tw`px-8`}
        }
      }
    }
  }
`
const StyleSectionAboutUs = styled.div`
  .aboutus {
    ${tw`font-poppins text-center`}
    ${tw`py-12 relative`}

    &::before, &::after {
      content: '';
      height: 2px;
      ${tw`absolute bg-gray w-full inset-0`}
    }

    &::after {
      ${tw`top-auto bottom-0`}
    }

    &__text {
      ${tw`flex flex-col`}

      &__title {
        ${tw`font-semibold text-2xl`}
      }

      &__img {
        ${tw`flex items-end justify-end`}
        ${tw`text-xs text-white`}
        ${tw`rounded my-4 h-48`}
        ${tw`bg-local bg-center bg-no-repeat bg-cover`}
        background-image: url(${(props) => props.image.wpUrl});

        &__credit {
          ${tw`underline mr-4`}
          min-width: auto;
          min-height: auto;
          opacity: 0.3;
        }
      }

      &__first-description {
        ${tw`mt-4 font-light`}
      }

      &__second-description {
        ${tw`mt-4 font-light`}
      }

      &__more-button {
        ${tw`mt-8`}
        ${tw`font-semibold underline`}
      }
    }

    &__media {
      ${tw`hidden`}
    }
  }

@media (min-width: ${CustomTheme.extend.screens.tablet}) {
  .aboutus {
    &__text {
      &__img {
        ${tw`bg-bottom`}
      }
    }
  }
}

@media (min-width: ${CustomTheme.extend.screens.laptop}) {
  .aboutus {
    ${tw`flex justify-between pt-16`}
    ${tw`text-left`}

    &__text {
      ${tw`flex-col w-6/12`}

      &__title {
        ${tw`text-3xl`}
      }

      &__img {
        ${tw`hidden`}
      }
    }

    &__media {
      ${tw`flex justify-center items-center w-5/12 text-white`}

      &__container {
        ${tw`relative`}

        &__img {
          ${tw`mb-0`}
        }

        &__img__credit {
          ${tw`underline text-xs`}
          ${tw`absolute mr-4 bottom-0 right-0`}
          min-width: auto;
          min-height: auto;
          opacity: 0.3;
        }
      }
    }
  }
}
`
const StyleSectionInitiatives = styled.div`
  .initiatives {
    ${tw`flex flex-col justify-center py-12`}
    ${tw`font-poppins text-center`}

    &__title {
      ${tw`font-semibold`}
      font-size: 2rem;
    }

    &__first-description {
      ${tw`mt-4 font-light`}
    }

    &__second-description {
      ${tw`mt-4 font-light`}
    }

    &__more-button {
      ${tw`mt-8`}
      ${tw`font-semibold underline`}
    }
  }

  @media (min-width: ${CustomTheme.extend.screens.laptop}) {
    .initiatives {
      ${tw`text-left`}
    }
  }
`

export default IndexPage

export const pageQuery = graphql`
  query {
    wpgraphql {
      page(id: "content-page-home", idType: URI) {
        id
        customFields {
          bodySectionHeader {
            firstSlogan
            secondSlogan
            joinButton {
              text
              href
            }
            backgroundImage {
              alt
              authorName
              authorProfile
              sourceUrl
              wpUrl
            }
          }
          bodySectionMotivations {
            title
            firstDescription
            secondDescription
            motivationsList {
              access {
                icon
                text
              }
              build {
                icon
                text
              }
              citizens {
                icon
                text
              }
              fight {
                icon
                text
              }
              help {
                icon
                text
              }
            }
          }
          bodySectionAboutUs {
            title
            firstDescription
            secondDescription
            moreButton {
              text
              href
            }
            image {
              alt
              authorName
              authorProfile
              sourceUrl
              wpUrl
            }
          }
          bodySectionInitiatives {
            title
            firstDescription
            secondDescription
            moreButton {
              text
              href
            }
            image {
              alt
              authorName
              authorProfile
              sourceUrl
              wpUrl
            }
          }
        }
      }
    }
  }
`
