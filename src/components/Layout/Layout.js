import React, { useState, useRef, useEffect } from 'react'
import Navbar from '~/components//Navbar/Navbar'
import Footer from '~/components/Footer/Footer'
import Sidebar from '~/components/Sidebar/Sidebar'
import s from './LayoutStyles.module.scss'

export default function Layout({ children }) {
    const ref = useRef()
    const [isOpen, setOpen] = useState(false)
    useOnClickOutside(ref, () => setOpen(false))

    function toggleSidebar() {
        setOpen(prevState => ({
            isOpen: !prevState.isOpen,
        }))
    }
    function closeSidebar() {
        setOpen(false)
    }
    return (
        <div>
            <div className={s.grid_container}>
                <div className={s.navbar}>
                    <Navbar
                        isOpen={isOpen}
                        toggleSidebar={toggleSidebar}
                        closeSidebar={closeSidebar}
                    />
                </div>
                <div className={s.main}>
                    {isOpen && (
                        <div ref={ref} className={s.sidebar}>
                            <Sidebar closeSidebar={closeSidebar} />
                        </div>
                    )}
                    <div
                        className={
                            isOpen
                                ? `${s.children} ${s.backdrop_blur} ${s.fadeIn}`
                                : `${s.children}`
                        }
                    >
                        {children}
                    </div>
                </div>
                <div className={s.footer}>
                    {' '}
                    <Footer />
                </div>
            </div>
        </div>
    )
}

// Hook
function useOnClickOutside(ref, handler) {
    useEffect(() => {
        const listener = event => {
            // Do nothing if clicking ref's element or descendent elements
            if (!ref.current || ref.current.contains(event.target)) {
                return
            } else if (window.innerWidth < 800) {
                return
            }

            handler(event)
        }

        document.addEventListener('mousedown', listener)
        document.addEventListener('touchstart', listener)

        return () => {
            document.removeEventListener('mousedown', listener)
            document.removeEventListener('touchstart', listener)
        }
    }, [ref, handler])
}
