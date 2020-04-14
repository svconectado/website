import React from "react"
import { graphql } from "gatsby"

import PostsListComponent from "../components/postsListComponent"

const TagPostsListTemplate = ({ pageContext, data }) => (
  <PostsListComponent typeList={pageContext.typeList} data={data} />
)

export default TagPostsListTemplate

export const query = graphql`
  query($databaseId: ID!) {
    wpgraphql {
      tag(id: $databaseId, idType: DATABASE_ID) {
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
