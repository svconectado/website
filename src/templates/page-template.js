import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPageTemplate = ({ data }) => {
  const {
    wpgraphql: { post }
  } = data
  return (
    <Layout>
      <SEO title={post.title} description={post.excerpt} />
      <div className="container html-format">
        <div className="publication">
          <div
            className="publication__content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </Layout>
  )
}

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
