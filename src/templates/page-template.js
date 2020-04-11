import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import tw from "twin.macro"
import { theme as CustomTheme } from "../../tailwind.config"

import LayoutPreview from "../components/layoutPreview"
import SEO from "../components/seo"

const SecondPage = ({ data }) => (
  <LayoutPreview>
    <SEO
      title={data.wpgraphql.post.title}
      description={data.wpgraphql.post.excerpt}
    />
    <LayoutWrapper className="container">
      <div className="publication">
        {data.wpgraphql.post.featuredImage && (
          <div
            style={{ backgroundImage: `url(${data.wpgraphql.post.featuredImage.mediaItemUrl})` }}
            alt={data.wpgraphql.post.title}
            className="publication__cover"
          />
        )}
        <h1
          className="publication__title"
          dangerouslySetInnerHTML={{ __html: data.wpgraphql.post.title }}
        />
        <div
          className="publication__content"
          dangerouslySetInnerHTML={{ __html: data.wpgraphql.post.content }}
        />
        <Link to="/">Go back to the homepage</Link>
      </div>
    </LayoutWrapper>
  </LayoutPreview>
)

const LayoutWrapper = styled.div`
  .publication {
    ${tw`px-4 py-8`}

    &__cover {
      ${tw`rounded-t`}
      ${tw`bg-local bg-center bg-no-repeat bg-cover`}
      ${tw`h-32`}
    }

    &__title {
      line-height: 1.5;
      ${tw`font-semibold text-3xl`}
      ${tw`mb-4`}
    }
  }

@media (min-width: ${CustomTheme.extend.screens.tablet}) {
  .publication {
    ${tw`px-8`}

    &__cover {
      ${tw`h-64`}
    }
  }
}

@media (min-width: ${CustomTheme.extend.screens.laptop}) {
  .publication {
    ${tw`px-0`}

    &__title {
      ${tw`text-4xl`}
    }
  }
}
`
export default SecondPage

export const query = graphql`
  query($databaseId: ID!) {
    wpgraphql {
      post(id: $databaseId, idType: DATABASE_ID) {
        title
        date
        content(format: RENDERED)
        categories {
          edges {
            node {
              name
            }
          }
        }
        excerpt(format: RENDERED)
        featuredImage {
          altText
          title(format: RENDERED)
          mediaItemUrl
          slug
        }
      }
    }
  }
`
