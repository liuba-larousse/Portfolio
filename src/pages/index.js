import React from "react"
import Layout from "../components/Layout"
import About from "../components/About"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import "../css/main.scss"

export default function Home() {
  const {
    bkgImg: { nodes },
  } = useStaticQuery(query)

  return (
    <BackgroundImage
      className="main-bkg"
      fluid={nodes[0].childImageSharp.fluid}
    >
      <Layout className="layout">
        <About />
      </Layout>
    </BackgroundImage>
  )
}

export const query = graphql`
  {
    bkgImg: allFile(filter: { relativePath: { eq: "bkg-img-dark.jpg" } }) {
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
