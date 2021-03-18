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
                        <Link className={s.link} to="/">
                            {' '}
                            <h2>home</h2>
                        </Link>
                    </li>

                    <li>
                        <button
                            className={s.link}
                            onClick={() => scrollTo('#skills')}
                        >
                            {' '}
                            <h2>skills </h2>
                        </button>
                    </li>
                    <li>
                        <button
                            className={s.link}
                            onClick={() => scrollTo('#about')}
                        >
                            {' '}
                            <h2>about me </h2>
                        </button>
                    </li>

                    <li>
                        <button
                            className={s.link}
                            onClick={() => scrollTo('#projects')}
                        >
                            {' '}
                            <h2>projects </h2>
                        </button>
                    </li>
                    <li>
                        <button
                            className={s.link}
                            onClick={() => scrollTo('#contact')}
                        >
                            {' '}
                            <h2>contact </h2>
                        </button>
                    </li>
                </ul>
            </nav>
        </>
    )
}
