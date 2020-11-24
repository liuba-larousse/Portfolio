import React from "react"
import s from "./ProjectsStyles.module.scss"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { InView } from "react-intersection-observer"

export default function Projects() {
  const { allFile } = useStaticQuery(graphql`
    {
      allFile(filter: { relativeDirectory: { eq: "project_images" } }) {
        nodes {
          relativeDirectory
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }
  `)

  const images = allFile.nodes

  console.log(images)

  return (
    <section id="projects" className={s.section}>
      <h1
        data-sal="slide-up"
        data-sal-duration="500"
        data-sal-delay="250"
        data-sal-easing="ease-in"
      >
        Projects
      </h1>

      <div
        className={s.project_list}
        data-sal="slide-up"
        data-sal-duration="500"
        data-sal-delay="250"
        data-sal-easing="ease-in"
      >
        {images.slice(0, 3).map((image, index) => (
          <div className={s.project_list_item} key={index}>
            <div className={s.img}>
              <Img
                fluid={image.childImageSharp.fluid}
                alt-text={image.childImageSharp.originalName}
              />
            </div>

            <InView threshold={0.9}>
              {({ inView, ref, entry }) => (
                <div ref={ref} className={s.title_box}>
                  <div
                    className={inView ? `${s.hr} ${s.hrAnimate}` : `${s.hr} `}
                  ></div>
                  <div
                    className={inView ? `${s.vl} ${s.vlAnimate}` : `${s.vl} `}
                  ></div>
                  <div className={s.title}>
                    <span>
                      {image.childImageSharp.fluid.originalName.slice(
                        0,
                        image.childImageSharp.fluid.originalName.length - 5
                      )}
                    </span>
                  </div>
                </div>
              )}
            </InView>
          </div>
        ))}
      </div>
    </section>
  )
}
