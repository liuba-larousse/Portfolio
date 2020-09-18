import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"
import styles from "../css/projects.module.scss"

export default function projectsPage({
  data: {
    projects: { nodes },
  },
}) {
  console.log(nodes)
  return (
    <Layout>
      <section className={styles.section}>
        <h1>Projects</h1>
        <div className={styles.container}>
          {nodes.map(node => {
            return (
              <Link
                key={node.id}
                to={`/projects/${node.slug}`}
                className={styles.cover}
              >
                <div className={styles.title}>
                  <span>{node.title}</span>
                </div>
                <Img
                  className={`${styles.cover} ${styles.image}`}
                  fluid={node.image.childImageSharp.fluid}
                />
              </Link>
            )
          })}
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    projects: allStrapiProject {
      nodes {
        id
        slug
        title
        image {
          childImageSharp {
            fluid(fit: COVER) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
// duotone: { highlight: "#da1737", shadow: "#252525", opacity: 50 }
