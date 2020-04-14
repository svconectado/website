import React from "react"
import styled from "styled-components"
import tw from "twin.macro"

import Layout from "./layout"
import SEO from "./seo"
import CardPostListComponent from "./cardPostListComponent"

const PostsListComponent = ({ data, typeList }) => (
  <Layout>
    <SEO
      title={data.wpgraphql[typeList].name}
      description={data.wpgraphql[typeList].name}
    />
    <StyledPostsList className="container">
      <div className="list">
        <h1 dangerouslySetInnerHTML={{ __html: data.wpgraphql[typeList].name }} className="list__title" />
        {!data.wpgraphql[typeList].posts.edges && (
        <p className="list__title-not-found">
          No hay publicaciones disponibles
        </p>
        )}
        {data.wpgraphql[typeList].posts.edges
         && data.wpgraphql[typeList].posts.edges.map(({ node }) => (
           <CardPostListComponent post={node} key={node.id} />
         ))}
      </div>
    </StyledPostsList>
  </Layout>
)

const StyledPostsList = styled.div`
  .list {
    ${tw`font-montserrat`}

    &__title-not-found {
      ${tw`text-center font-medium`}
      ${tw`my-16`}
    }
  }
`

export default PostsListComponent
