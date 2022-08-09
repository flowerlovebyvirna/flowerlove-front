import React from "react"
import { graphql } from "gatsby"
import { HomePage } from "../components/HomePage/HomePage"

export default function Home({ data }) {
  const latestNews = data.allSanityBlog.nodes
  const latestProduct = data.allSanityProduct.nodes
  return <HomePage latestNews={latestNews} latestProduct={latestProduct} />
}

export const query = graphql`
  query blogQuery {
    allSanityBlog(sort: { fields: [publishedAt], order: ASC }, limit: 3) {
      nodes {
        id
        slug {
          current
        }
        title
        blogCategory {
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
        publishedAt
        excerpt {
          children {
            text
          }
        }
      }
    }
    allSanityProduct(sort: { fields: [publishedAt], order: ASC }, limit: 3) {
      nodes {
        id
        slug {
          current
        }
        name
        publishedAt
        price
        productCategory {
          title
          slug {
            current
          }
        }
        coverImage {
          asset {
            gatsbyImageData
          }
          alt
        }
      }
    }
  }
`
