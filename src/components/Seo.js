import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"

const Seo = ({ title, description }) => {
  const { site } = useStaticQuery(graphql`
    query mySeoQuery {
      site {
        siteMetadata {
          description
          siteUrl
          title
        }
      }
    }
  `)
  const seo = {
    title: title
      ? `${title} - ${site.siteMetadata.title}`
      : site.siteMetadata.title,
    description: description || site.siteMetadata.description,
  }
  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
    </Helmet>
  )
}

export default Seo
