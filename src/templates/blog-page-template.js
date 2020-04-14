import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import tw from "twin.macro"
import moment from "moment"
import _ from "lodash"

import { theme as CustomTheme } from "../../tailwind.config"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPageTemplate = ({ data }) => {
  const { wpgraphql: { post } } = data
  const date = moment(post.date).format("DD MMM YYYY")
  const author = `${_.get(post, "author.name", "")} ${_.get(post, "author.lastname", "")}`
  return (
    <Layout>
      <SEO
        title={post.title}
        description={post.excerpt}
      />
      <LayoutWrapper className="container html-format">
        <div className="publication">
          {post.featuredImage && (
            <div
              style={{ backgroundImage: `url(${post.featuredImage.mediaItemUrl})` }}
              alt={post.title}
              className="publication__cover"
            />
          )}
          <h1
            className="publication__title"
            dangerouslySetInnerHTML={{ __html: post.title }}
          />
          <div className="publication__details">
            <div className="publication__details__more">
              <span className="publication__details__author">
                { author }
              </span>
              <span>
                <span>&nbsp;&#183;&nbsp;</span>
              </span>
              <span className="publication__details__date">
                { date }
              </span>
            </div>
            {Object.keys(post.tags).length > 0 && (
              <div className="publication__details__tags">
                {post.tags.edges.map((tag) => (
                  <Link
                    to={`/tag/${tag.node.slug}`}
                    className="publication__details__tags__element"
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

    &__details {
      ${tw`flex flex-col`}
      ${tw`pb-4`}

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
          ${tw`no-underline text-gray`}
          ${tw`px-1 m-1`}
          min-height: auto;

          &:hover {
            ${tw`no-underline`}
          }
        }
      }
    }
  }

@media (min-width: ${CustomTheme.extend.screens.tablet}) {
  .publication__cover {
    ${tw`h-64`}
  }
}

@media (min-width: ${CustomTheme.extend.screens.laptop}) {
  .publication__title {
    ${tw`text-4xl`}
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
