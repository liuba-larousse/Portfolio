import React from "react"
import Layout from "../components/Layout"
import styles from "../css/about.module.scss"
import Img from "gatsby-image"
import { Link } from "gatsby"

export default function aboutPage({ data }) {
  console.log(data)
  return (
    <Layout>
      <section className={styles.section}>
        <div className={styles.image_area}>
          <Img
            className={styles.image}
            fluid={data.file.childImageSharp.fluid}
          ></Img>
        </div>
        <article className={styles.article}>
          <h1>Some things about myself</h1>
          <p>
            Gluten-free cray vexillologist, dreamcatcher ugh sartorial
            chartreuse disrupt kinfolk. Pok pok pabst lyft scenester banjo man
            bun. Shabby chic chia echo park single-origin coffee deep v ennui
            umami chambray fixie photo booth cray put a bird on it YOLO venmo.
            Hashtag bitters wolf mixtape woke tattooed.
          </p>
          <Link className={styles.button} to="/contact">
            <button>contact me</button>
          </Link>
        </article>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    file(relativePath: { eq: "me.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
