import React from 'react'
import s from './ProjectsStyles.module.scss'
import { useStaticQuery, graphql } from 'gatsby'
// import { Link } from 'gatsby'
import { InView } from 'react-intersection-observer'
import { projects } from './projects-data'
import BackgroundImage from 'gatsby-background-image'
import { FaGithubSquare, FaStaylinked } from 'react-icons/fa'

export default function Projects() {
    const { allFile, allMarkdownRemark } = useStaticQuery(graphql`
        {
            allFile(
                sort: {
                    fields: childrenImageSharp___fluid___originalName
                    order: ASC
                }
                filter: { relativeDirectory: { eq: "project_images" } }
            ) {
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
            allMarkdownRemark(sort: { fields: frontmatter___id, order: ASC }) {
                totalCount
                edges {
                    node {
                        id
                        frontmatter {
                            title
                            id
                            slug
                        }
                    }
                }
            }
        }
    `)

    const images = allFile.nodes
    // const markdown = allMarkdownRemark.edges

    const projectList = projects.slice(0, 3).map((project, index) => (
        <div
            className={s.project_list_item}
            key={index}
            data-sal="slide-up"
            data-sal-duration="500"
            data-sal-delay="250"
            data-sal-easing="ease-in"
        >
            <div className={s.img}>
                <a
                    className={s.overlay}
                    href={project.url}
                    // to={markdown[project.id].node.frontmatter.slug}
                />
                <BackgroundImage
                    className={s.img_each}
                    fluid={images[project.id].childImageSharp.fluid}
                />
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
                                <a href={project.git} className={s.icon}>
                                    <FaGithubSquare />
                                </a>
                                <a href={project.url} className={s.icon}>
                                    <FaStaylinked />
                                </a>
                            </span>
                        </div>
                    </div>
                )}
            </InView>
        </div>
    ))

    return (
        <section id="projects" className={s.section}>
            <h2
                data-sal="slide-up"
                data-sal-duration="500"
                data-sal-delay="250"
                data-sal-easing="ease-in"
            >
                Projects
            </h2>

            <div className={s.project_list}>{projectList}</div>
        </section>
    )
}
