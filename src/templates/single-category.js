import { graphql } from "gatsby"
import React from "react"
import { BlogHome } from "../components/BlogHome/BlogHome"
export const query = graphql`
  query SingleBlogCategory($id: String!) {
    sanityBlogCategory(id: { eq: $id }) {
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
    allSanityBlogCategory {
      nodes {
        id
        slug {
          current
        }
      }
    }
    allSanityBlog(
      filter: { blogCategory: { elemMatch: { id: { eq: $id } } } }
    ) {
      nodes {
        id
        excerpt {
          children {
            text
          }
        }
        title
        publishedAt
        slug {
          current
        }
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
      }
    }
  }
`

const SingleCategory = ({ data }) => {
  const catBlog = data.sanityBlogCategory
  const blogsCat = data.allSanityBlog.nodes
  return <BlogHome catBlog={catBlog} blogsCat={blogsCat} categ />
}

export default SingleCategory
