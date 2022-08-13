import React from "react"
import { graphql } from "gatsby"
import { BlogHome } from "../components/BlogHome/BlogHome"
import Seo from "../components/Seo"

export const BlogsQuery = graphql`
  query blogListQuery($limit: Int!, $offset: Int!) {
    allSanityBlog(
      sort: { fields: publishedAt, order: DESC }
      limit: $limit
      skip: $offset
    ) {
      nodes {
        id
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
        excerpt {
          children {
            text
          }
        }
      }
    }
  }
`

const BlogList = ({ data, pageContext }) => {
  const { currentPage, numberOfPages } = pageContext
  const blogs = data.allSanityBlog.nodes
  return (
    <>
      <Seo title="Blog" />
      <BlogHome
        home
        paginated
        currentPage={currentPage}
        numberOfPages={numberOfPages}
        blogs={blogs}
      />
    </>
  )
}

export default BlogList
