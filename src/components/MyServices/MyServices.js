import React from 'react'
import ServiceCard from './ServiceCard/ServiceCard'
import s from './MyServicesStyles.module.scss'
import { graphql, useStaticQuery } from 'gatsby'

export default function MyServises() {
    const { allFile } = useStaticQuery(graphql`
        {
            allFile(filter: { relativeDirectory: { eq: "service_images" } }) {
                nodes {
                    childImageSharp {
                        fluid(fit: FILL) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    `)

    const images = allFile.nodes
    console.log(images)
    return (
        <section id="services" className={s.section}>
            <h2
                data-sal="slide-up"
                data-sal-duration="500"
                data-sal-delay="250"
                data-sal-easing="ease-in"
            >
                Services
            </h2>
            <div className={s.flex}>
                <ServiceCard
                    delay="0"
                    service="Wed-Design"
                    fluid={allFile.nodes[2].childImageSharp.fluid}
                />
                <ServiceCard
                    delay="500"
                    service="Web-Development"
                    fluid={allFile.nodes[3].childImageSharp.fluid}
                />
                {/* <ServiceCard
          delay="1000"
          service="SEO"
          fluid={allFile.nodes[1].childImageSharp.fluid}
        /> */}
            </div>
        </section>
    )
}
