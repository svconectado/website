import React from "react"
import { graphql } from "gatsby"

import PostsListComponent from "../components/postsListComponent"

const CategoryPostsListTemplate = ({ pageContext, data }) => (
  <PostsListComponent typeList={pageContext.typeList} data={data} />
)

export default CategoryPostsListTemplate

export const query = graphql`
  query($databaseId: ID!) {
    wpgraphql {
      category(id: $databaseId, idType: DATABASE_ID) {
        name
        posts {
          edges {
            node {
              slug
              databaseId
              title
              excerpt
              date
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
              featuredImage {
                altText
                title(format: RENDERED)
                mediaItemUrl
                slug
              }
            }
          }
        }
      }
    }
  }
`
