import React from "react"
import { graphql } from "gatsby"
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
  return <BlogHome single blog={blog} />
}

export default SingleBlog
