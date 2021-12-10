import React from 'react'
import s from './AboutStyles.module.scss'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default function About() {
    const { file } = useStaticQuery(graphql`
        {
            file(relativePath: { eq: "profile_img2.jpg" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    const image = file.childImageSharp.fluid

    return (
        <section className={s.section} id="about">
            <h2
                data-sal="slide-up"
                data-sal-duration="500"
                data-sal-delay="250"
                data-sal-easing="ease-in"
            >
                About me
            </h2>

            <div
                className={`${s.container} ${s.front}`}
                data-sal="fade"
                data-sal-duration="500"
                data-sal-delay="500"
                data-sal-easing="ease-in"
            >
                <div className={s.top}>
                    <div className={s.c1}>
                        <div className={s.circle}></div>
                    </div>
                    <div className={s.c2}>
                        <div className={s.circle}></div>
                    </div>
                    <div className={s.c3}>
                        <div className={s.circle}></div>
                    </div>
                </div>
                <div className={s.bottom}>
                    <div className={s.text}>
                        <p>
                            Born and raised in Russia ,I have been living in US
                            for past 10 years, with my base in awesome Austin,
                            TX now. After working in customer service and
                            healthcare positions for past few years, my desire
                            for learning, progress and creativity as well as my
                            love for technology have lead me to explore the tech
                            world.
                            <br />
                            <br />I have been self-taught developer for a year
                            now. It has been a challanging and fun journey that
                            I hope to explore for many years now, and help
                            others along the way by creating innovative,
                            human-centered and accessible web applications.
                        </p>
                    </div>
                    <div className={s.imgContainer}>
                        <div className={s.img}>
                            <Img fluid={image} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
