import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  // headerVh = vh units of the Viewport
  <Layout data={data} headerVh={100}>
    <SEO title="Home" description="" />
    <div className="container">
      Content from WP
    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    wpgraphql {
      page(id: "jcontent-page-home", idType: URI) {
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
