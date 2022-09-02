const sanityConfig = require("./sanity-config")

require("dotenv").config("./.env")

module.exports = {
  siteMetadata: {
    title: `Flower & Arts WebShop`,
    siteUrl: `https://flowerloveshop.netlify.app/`,
    description: `Flower & Arts WebShop is the best place to buy flower online`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
            name: node.name,
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
      resolve: `gatsby-plugin-snipcart-advanced`,
      options: {
        version: "3.3.3",
        publicApiKey:
          "OTIwYWU1ZDktMzFjOC00NjU3LTg2YmYtOTg1MGZmNmQ4M2M0NjM3OTYwNjA3MjU5MDM2Njg3",
        defaultLang: "it",
        currency: "eur",
        openCartOnAdd: true,
        useSideCart: true,
        templatesUrl:
          "<https://cdn.snipcart.com/themes/v3.3.3/default/snipcart.css>",
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
