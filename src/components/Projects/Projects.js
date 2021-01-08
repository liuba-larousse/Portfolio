import React from 'react'
import s from './ProjectsStyles.module.scss'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'
import { InView } from 'react-intersection-observer'
import { projects } from './projects-data'
import { AiOutlineLink } from 'react-icons/ai'
import { FaGithubSquare, FaStaylinked } from 'react-icons/fa'

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

    console.log(projects)

    const projectList = projects.slice(0, 3).map((project, index) => (
        <div className={s.project_list_item} key={index}>
            <div className={s.img}>
                <div className={s.hide}></div>
                <Img fluid={images[project.id].childImageSharp.fluid} />
            </div>

            <InView threshold={0.9}>
                {({ inView, ref }) => (
                    <div ref={ref} className={s.title_box}>
                        <div
                            className={
                                inView ? `${s.hr} ${s.hrAnimate}` : `${s.hr} `
                            }
                        ></div>
                        <div
                            className={
                                inView ? `${s.vl} ${s.vlAnimate}` : `${s.vl} `
                            }
                        ></div>
                        <div className={s.title}>
                            <span>{project.field}</span>
                            <span className={s.links}>
                                <Link to={project.git} class={s.icon}>
                                    <FaGithubSquare />
                                </Link>
                                <Link to={project.url} class={s.icon}>
                                    <FaStaylinked />
                                </Link>
                            </span>
                        </div>
                    </div>
                )}
            </InView>
        </div>
    ))

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
                {projectList}
            </div>
        </section>
    )
}
