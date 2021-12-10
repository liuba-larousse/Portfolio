import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import scrollTo from 'gatsby-plugin-smoothscroll'
import { Link } from 'gatsby'

import s from './NavbarStyles.module.scss'

// Hook
function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = React.useState({
        width: undefined,
        height: undefined,
    })
    React.useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }
        // Add event listener
        window.addEventListener('resize', handleResize)
        // Call handler right away so state gets updated with initial window size
        handleResize()
        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleResize)
    }, []) // Empty array ensures that effect is only run on mount
    return windowSize
}

export default function Navbar({ isOpen, toggleSidebar, closeSidebar }) {
    const size = useWindowSize()

    return (
        <nav>
            {isOpen ? (
                <AiOutlineClose
                    className={s.nav_toggle}
                    onClick={() => closeSidebar()}
                />
            ) : (
                <nav>
                    {/* <GiFairyWings
                        className={s.nav_toggle}
                        onClick={
                            size.width && size.width < 800
                                ? () => toggleSidebar()
                                : null
                        }
                    /> */}
                    <img
                        src="/images/logo.png"
                        alt="logo"
                        width="80"
                        height="80"
                        className={s.nav_toggle}
                        onClick={
                            size.width && size.width < 800
                                ? () => toggleSidebar()
                                : null
                        }
                    ></img>

                    <ul
                        className={`${s.links} ${s.hidden}`}
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
                                about
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
            )}
        </nav>
    )
}
