import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/Seo"
import { BlogHome } from "../components/BlogHome/BlogHome"

export const postQuery = graphql`
  query SingleBlogQuery($id: String!) {
    sanityBlog(id: { eq: $id }) {
      title
      publishedAt
      _rawBody
      excerpt {
        children {
          text
        }
      }
      coverImage {
        alt
        asset {
          gatsbyImageData
        }
      }
      blogCategory {
        title
        slug {
          current
        }
      }
    }
  }
`
const SingleBlog = ({ data }) => {
  const blog = data.sanityBlog
  return (
    <>
      <Seo title="Blog Post" />
      <BlogHome single blog={blog} />
    </>
  )
}

export default SingleBlog
