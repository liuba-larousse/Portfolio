import React from 'react'
import { Link } from 'gatsby'
import s from './SideBarStyles.module.scss'
import scrollTo from 'gatsby-plugin-smoothscroll'

export default function Sidebar({ closeSidebar }) {
    return (
        <>
            <nav className={s.sidebar}>
                <ul
                    className={s.links}
                    // className={{ isActive } ? " nav-links fadeIn" : " nav-links collapsed"}
                >
                    <li>
                        <button
                            className={s.link}
                            onClick={() => scrollTo('#projects')}
                        >
                            {' '}
                            portfolio
                        </button>
                    </li>
                    <li>
                        <button
                            className={s.link}
                            onClick={() => scrollTo('#about')}
                        >
                            {' '}
                            about me
                        </button>
                    </li>

                    <li>
                        <button
                            className={s.link}
                            onClick={() => scrollTo('#skills')}
                        >
                            skills
                        </button>
                    </li>
                    <li>
                        <button
                            className={s.link}
                            onClick={() => scrollTo('#contact')}
                        >
                            {' '}
                            contact
                        </button>
                    </li>
                    <li>
                        <Link className={s.pdfLink} to="/pdf">
                            Resume
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
