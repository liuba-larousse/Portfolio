import React from "react"
import Layout from "../components/Layout"
import Services from "../components/Services"
import styles from "../css/services.module.scss"
import { graphql } from "gatsby"

export default function servicesPage({ data: { design, develop } }) {
  return (
    <Layout>
      <section className={styles.section}>
        <Services
          service="Wed-Design"
          fluid={design.nodes.childImageSharp.fluid}
        />
        <Services
          service="Web-Development"
          fluid={develop.nodes.childImageSharp.fluid}
        />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    design: allFile(filter: { relativePath: { eq: "service-design.jpeg" } }) {
      nodes {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    develop: allFile(
      filter: { relativePath: { eq: "service-development.jpeg" } }
    ) {
      nodes {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
