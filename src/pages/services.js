import React from "react"
import Layout from "../components/Layout"
import Services from "../components/Services"
import styles from "../css/services.module.scss"
import { graphql } from "gatsby"

export default function servicesPage({ data: { design, develop } }) {
  console.log(design, develop)

  return (
    <Layout>
      <h1>Services</h1>
      <section className={styles.section}>
        <Services
          service="Wed-Design"
          fluid={design.nodes[0].childImageSharp.fluid}
        />
        <Services
          service="Web-Development"
          fluid={develop.nodes[0].childImageSharp.fluid}
        />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query ServicePageQuery {
    design: allFile(filter: { relativePath: { eq: "service-design.jpeg" } }) {
      nodes {
        childImageSharp {
          fluid(
            fit: CONTAIN
            duotone: { highlight: "#DA2C4A", shadow: "#252525", opacity: 50 }
          ) {
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
          fluid(
            fit: CONTAIN
            duotone: { highlight: "#DA2C4A", shadow: "#252525", opacity: 50 }
          ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
