import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import moment from "moment"
import _ from "lodash"
import styled from "styled-components"
import tw from "twin.macro"
import { theme as CustomTheme } from "../../tailwind.config"

const PostCardList = ({ post }) => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(
        relativePath: { eq: "elsalvadorconectado-cover.png" }
      ) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const coverDefault = data.desktop.childImageSharp.fluid.src
  const cover = post.featuredImage ? post.featuredImage.mediaItemUrl : coverDefault
  const date = moment(post.date).format("DD MMM YYYY")
  const author = `${_.get(post, "author.name", "")} ${_.get(post, "author.lastname", "")}`

  return (
    <StyledPostCardList>
      <div className="wrapper__link">
        <div className="card">
          <Link
            to={`/${post.slug}`}
            style={{ backgroundImage: `url(${cover})` }}
            className="card__cover"
          />
          <div className="card__details">
            <Link to={`/${post.slug}`} className="card__details__title">
              { post.title }
            </Link>
            <Link to={`/${post.slug}`} className="card__details__more">
              <span className="card__details__author">
                { author }
              </span>
              <span>
                <span>&nbsp;&#183;&nbsp;</span>
              </span>
              <span className="card__details__date">
                { date }
              </span>
            </Link>
            {Object.keys(post.tags).length > 0 && (
              <div className="card__details__tags">
                {post.tags.edges.map((tag) => (
                  <Link
                    to={`/tag/${tag.node.slug}`}
                    className="card__details__tags__element"
                    key={tag.node.id}
                  >
                    <span>
                      #
                      {tag.node.name}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </StyledPostCardList>
  )
}

const StyledPostCardList = styled.div`
  .wrapper__link {
    ${tw`w-full mb-4`}
  }

  .card {
    ${tw`flex flex-col`}
    ${tw`border border-separator rounded`}
    ${tw`font-montserrat`}

    &__cover {
      ${tw`rounded-t`}
      ${tw`bg-local bg-center bg-no-repeat bg-cover`}
      ${tw`h-32`}
    }

    &__details {
      ${tw`flex flex-col`}
      ${tw`px-2 py-4`}

      &__title {
        ${tw`font-medium`}
        min-height: auto;
      }

      &__more {
        ${tw`flex my-1`}
        ${tw`text-xs text-gray`}
        min-height: auto;
      }

      &__tags {
        ${tw`flex flex-wrap`}
        ${tw`text-xs text-gray`}

        &__element {
          ${tw`border border-separator rounded bg-gray`}
          ${tw`px-1 m-1`}
          min-height: auto;
        }
      }
    }
  }

@media (min-width: ${CustomTheme.extend.screens.tablet}) {
  .card {
    ${tw`flex-row`}
    min-height: 10rem;

    &__cover {
      ${tw`w-3/12 h-auto`}
    }

    &__details {
      ${tw`w-9/12`}
    }
  }
}

@media (min-width: ${CustomTheme.extend.screens.laptop}) {
  .card {
    min-height: 10rem;

    &__details__title {
      ${tw`text-lg`}
    }
  }
}

@media (min-width: ${CustomTheme.extend.screens.desktop}) {
  .card {
    min-height: 12rem;
  }
}
`
export default PostCardList
