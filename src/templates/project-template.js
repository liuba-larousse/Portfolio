import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { GiCutDiamond } from 'react-icons/gi'
import s from '~/css/project-template.module.scss'
import { FaGithubSquare, FaStaylinked, FaChevronRight } from 'react-icons/fa'

export default function ProjectTemplate({
    data, // this prop will be injected by the GraphQL query below.
}) {
    const {
        markdownRemark,
        allFile: { nodes },
    } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark

    const image = nodes.filter(
        node => node.childImageSharp.fluid.originalName === frontmatter.image
    )

    return (
        <>
            <Link to="/" className={s.homeLink}>
                <GiCutDiamond />
            </Link>
            <div className={s.container}>
                <h1>{frontmatter.title}</h1>
                <h2>{frontmatter.subtitle}</h2>
                <span className={s.links}>
                    <a href={frontmatter.git} className={s.link}>
                        <FaGithubSquare />

                        <span className={s.linkName}>GitHub</span>
                    </a>
                    <a href={frontmatter.url} className={s.link}>
                        <FaStaylinked />

                        <span className={s.linkName}>Web</span>
                    </a>
                </span>
                <div className={s.image}>
                    <Img fluid={image[0].childImageSharp.fluid} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
        </>
    )
}
export const pageQuery = graphql`
    query($slug: String!) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                slug
                id
                title
                image
                git
                url
            }
        }
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
    }
`
