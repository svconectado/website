import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import tw from "twin.macro"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPageTemplate = ({ data }) => {
  const {
    wpgraphql: { post }
  } = data
  return (
    <Layout>
      <SEO title={post.title} description={post.excerpt} />
      <LayoutWrapper className="container html-format">
        <div className="publication">
          <h1
            className="publication__title"
            dangerouslySetInnerHTML={{ __html: post.title }}
          />
          <div
            className="publication__content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </LayoutWrapper>
    </Layout>
  )
}

const LayoutWrapper = styled.div`
  .publication {
    ${tw`pt-12`}

    &__title {
      ${tw`font-semibold mt-6 mb-8`}
    }
  }
`

export default BlogPageTemplate

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
        author {
          name
          lastName
        }
        tags {
          edges {
            node {
              name
              slug
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
