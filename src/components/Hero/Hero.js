import React from 'react'
import { social } from '../socialMedia'
import s from './HeroStyles.module.scss'
import component from '~/css/components.module.scss'

import BackgroundImage from 'gatsby-background-image'
import { graphql, useStaticQuery } from 'gatsby'

export default function Hero() {
    const { allFile } = useStaticQuery(graphql`
        {
            allFile(filter: { relativePath: { eq: "pattern2.jpg" } }) {
                nodes {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    `)

    const { fluid } = allFile.nodes[0].childImageSharp

    const links = [...social]

    return (
        <>
            <BackgroundImage className={s.bkg} fluid={fluid}>
                <section className={s.section}>
                    <div className={s.text}>
                        <h1 className={s.animTypeWrap}>
                            <span className={s.animType}>Hi, I`m Liuba</span>
                        </h1>
                        <h1>
                            {' '}
                            Front-end{' '}
                            <span className={s.titleHighlight}>Developer</span>
                        </h1>

                        {/* <span>I will code your dreams into reality</span> */}
                        <a href="mailto:liuba.larousse@gmail.com">
                            <span className={component.flash_wait}>
                                <button
                                    className={`${component.button} ${s.btn_contact}`}
                                >
                                    Contact me
                                </button>
                            </span>
                        </a>
                        <ul className={`${component.links} ${s.links}`}>
                            {links.map(link => {
                                return (
                                    <li
                                        key={link.id}
                                        data-sal="slide-up"
                                        data-sal-duration="500"
                                        data-sal-delay="1000"
                                    >
                                        <a href={link.link}>{link.icon}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className={s.overlay}></div>
                </section>
            </BackgroundImage>
        </>
    )
}
