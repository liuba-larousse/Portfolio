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
                            Born in Russia, I have lived in the US for the past
                            ten years, currently based in Austin, TX. I dance
                            Kizomba 💃, do yoga 🧘‍♀️, travel a lot ✈️ and write
                            front-end code 👩‍💻.
                            <br />
                            <br />I am passionate about creating a{' '}
                            <strong> meaningful user-friendly</strong> web
                            applications. I love working with
                            <strong> React</strong>. Other technologies I have
                            experience with include:
                            <strong> TypeScript</strong>,
                            <strong> GraphQL</strong> , various UI libraries,
                            CMS like <strong> Firebase</strong>, and
                            <strong> Contentful</strong>. I am comfortable
                            building from scratch or adding features in already
                            exciting projects.
                            <br />
                            <br />
                            Presently I am looking for a
                            <strong> remote front-end </strong>
                            position in an organization with a great work-life
                            balance culture ☯︎ , which aims to create purposeful
                            technologies to help people 🙌.
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
