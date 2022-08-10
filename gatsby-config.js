const sanityConfig = require("./sanity-config")

require("dotenv").config("./.env")

module.exports = {
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-local-search",
      options: {
        name: "blogs",
        engine: "flexsearch",
        engineOptions: {
          tokenize: "forward",
        },
        query: `
        {
          allSanityBlog {
            nodes{
              id 
              title
              publishedAt
              slug{
                current
              }
              coverImage{
                alt
                asset{
                  gatsbyImageData
                }
              }
              blogCategory{
                title
                slug{
                  current
                }
              }
            }
          }
        }
        `,
        ref: "id",
        index: ["title"],
        store: [
          "id",
          "title",
          "publishedAt",
          "slug",
          "coverImage",
          "blogCategory",
        ],
        normalizer: ({ data }) =>
          data.allSanityBlog.nodes.map(node => ({
            id: node.id,
            title: node.title,
            publishedAt: node.publishedAt,
            slug: node.slug,
            coverImage: node.coverImage,
            blogCategory: node.blogCategory,
          })),
      },
    },
    {
      resolve: "gatsby-plugin-local-search",
      options: {
        name: "products",
        engine: "flexsearch",
        engineOptions: {
          tokenize: "forward",
        },
        query: `
        {
          allSanityProduct{
            nodes{
              id
              name
              slug{
                current
              }
              publishedAt
              productCategory {
              title
              slug {
              current
              }
              }
              coverImage {
              alt
              asset {
              gatsbyImageData
              }
              }
              available
              price
            }
          }
        }
        `,
        ref: "id",
        index: ["name"],
        store: [
          "id",
          "name",
          "publishedAt",
          "slug",
          "coverImage",
          "productCategory",
        ],
        normalizer: ({ data }) =>
          data.allSanityProduct.nodes.map(node => ({
            id: node.id,
            title: node.title,
            publishedAt: node.publishedAt,
            slug: node.slug,
            coverImage: node.coverImage,
            productCategory: node.productCategory,
          })),
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        ...sanityConfig,
      },
    },
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        /**
         * @property {boolean} [resetCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        resetCSS: true,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: true,
      },
    },
  ],
}
