import React from "react"
import { graphql } from "gatsby"
import { FilterLayout } from "../components/Product/Filter/FilterLayout"

export const query = graphql`
  query SingleCategory($id: String!) {
    sanityProductCategory(id: { eq: $id }) {
      title
      id
      slug {
        current
      }
      coverImage {
        alt
        asset {
          gatsbyImageData
        }
      }
      description {
        children {
          text
        }
      }
    }
    allSanityProduct(
      filter: { productCategory: { elemMatch: { id: { eq: $id } } } }
    ) {
      nodes {
        id
        name
        publishedAt
        price
        slug {
          current
        }
        productCategory {
          title
          slug {
            current
          }
          coverImage {
            alt
            asset {
              gatsbyImageData
            }
          }
        }
        coverImage {
          alt
          asset {
            gatsbyImageData
          }
        }
      }
    }
    allSanityProductCategory {
      nodes {
        id
        title
        slug {
          current
        }
      }
    }
  }
`

const SingleProductCategory = ({ data }) => {
  const catProduct = data.sanityProductCategory
  const productsCat = data.allSanityProduct.nodes
  const allCat = data.allSanityProductCategory.nodes
  return (
    <FilterLayout
      single
      catProduct={catProduct}
      allCat={allCat}
      productsCat={productsCat}
    />
  )
}

export default SingleProductCategory
