import React from "react"
import { ProductDetail } from "../components/Product/ProductDetail/ProductDetail"
import { Latest } from "../components/HomePage/Latest"
import { graphql } from "gatsby"
import Seo from "../components/Seo"

export const productQuery = graphql`
  query SingleProductQuery($id: String!) {
    sanityProduct(id: { eq: $id }) {
      name
      publishedAt
      _rawProductDescription
      imagesGallery {
        asset {
          gatsbyImageData
        }
      }
      coverImage {
        alt
        asset {
          gatsbyImageData
        }
      }
      productCategory {
        title
        slug {
          current
        }
      }
      productDescription {
        children {
          text
        }
      }
      price
    }
    allSanityProduct(sort: { fields: [publishedAt], order: ASC }, limit: 3) {
      nodes {
        id
        slug {
          current
        }
        name
        publishedAt
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
        price
      }
    }
  }
`

const SingleProduct = ({ data }) => {
  const product = data.sanityProduct
  const recomendedProduct = data.allSanityProduct.nodes
  return (
    <>
      <Seo title="Prodotto" />
      <ProductDetail product={product} />
      <Latest recomended recomendedProduct={recomendedProduct} />
    </>
  )
}

export default SingleProduct
