import { Link, graphql, StaticQuery } from "gatsby"
import React from "react"

import ElSalvadorConectadoLogo from "../images/elsalvadorconectado-logo.svg"

const HeaderContent = () => (
  <StaticQuery
    query={graphql`
      query GET_HEADER {
        wpgraphql {
          page(id: "cGFnZToy") {
            content(format: RENDERED)
          }
        }
      }
    `}
    render={data => {
      const { content } = data.wpgraphql.page
      return (
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem`,
          }}
        >
          <div style={{ height: "140px" }}>{/* spacing */}</div>
          <Link className="logo" to="/">
            <img
              src={ElSalvadorConectadoLogo}
              alt="El texto se lee El Salvador Conectado con un logotipo formando una especie de abrazo"
              style={{
                height: "75px",
                width: "254px",
              }}
            />
          </Link>
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
      )
    }}
  ></StaticQuery>
)

export default HeaderContent
