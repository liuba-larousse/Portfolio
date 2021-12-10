import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import s from '~/css/project-template.module.scss'
import { FaGithubSquare, FaStaylinked } from 'react-icons/fa'

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
                <img
                    src="/images/left-arrow.png"
                    alt="logo"
                    width="80"
                    height="80"
                ></img>
            </Link>
            <div className={s.container}>
                <h1>{frontmatter.title}</h1>
                <span className={s.links}>
                    <a href={frontmatter.git} className={s.link}>
                        <FaGithubSquare />

                        <span className={s.linkName}>Code</span>
                    </a>
                    <a href={frontmatter.url} className={s.link}>
                        <FaStaylinked />

                        <span className={s.linkName}>Web</span>
                    </a>
                </span>
                <div className={s.image}>
                    <Img fluid={image[0].childImageSharp.fluid} />
                </div>
                <div
                    className={s.stack}
                    dangerouslySetInnerHTML={{ __html: frontmatter.stack }}
                />
                <div
                    className={s.frontmatter}
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            </div>
        </>
    )
}
export const pageQuery = graphql`
    query($slug: String!) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                stack
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
