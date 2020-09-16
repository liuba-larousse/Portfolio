import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import styles from "../css/project-template.module.scss"

export default function projectTemplate({ data }) {
  const { subtitle, title, body, image } = data.project
  console.log(body)
  return (
    <Layout className="layout">
      <div className={styles.container}>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <Img fluid={image.childImageSharp.fluid} />
        <ReactMarkdown source={body} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query projectQuery($slug: String) {
    project: strapiProject(slug: { eq: $slug }) {
      slug
      subtitle
      title
      body
      image {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 250, fit: FILL) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
