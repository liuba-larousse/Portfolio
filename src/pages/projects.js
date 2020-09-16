import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

export default function projectsPage({
  data: {
    projects: { nodes },
  },
}) {
  console.log(nodes)
  return (
    <Layout className="layout">
      <div className="container-projects">
        {nodes.map(node => {
          return (
            <Link
              key={node.id}
              to={`/projects/${node.slug}`}
              className="project-cover"
            >
              <Img
                className="project-cover"
                fluid={node.image.childImageSharp.fluid}
              />
            </Link>
          )
        })}
      </div>
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
            fluid(
              fit: COVER
              duotone: { highlight: "#da1737", shadow: "#252525", opacity: 50 }
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
