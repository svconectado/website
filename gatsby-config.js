require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: "El Salvador Conectado",
    description:
      "Sitio web hecho en Gatsby con GraphQL. Para el contenido se usa WordPress https://elsalvadorconectado.org",
    author: "@elsalvadorconectado"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "WPGraphQL",
        // This is field under which it's accessible
        fieldName: "wpgraphql",
        // Url to query from
        url: `${process.env.WP_API_URL ||
          "https://svc-staging-wordpress.de.quenecesito.org/graphql"}`
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/elsalvadorconectado-icon.png" // This path is relative to the root of the site.
      }
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ["develop"],
        options: {
          emitWarning: true,
          failOnError: false
        }
      }
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        /* eslint-disable */
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js")
        ]
        /* eslint-enable */
      }
    }
  ]
}
