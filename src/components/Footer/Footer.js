import React from 'react'
import { FaHeart } from 'react-icons/fa'
import { GrGatsbyjs } from 'react-icons/gr'
import s from './footer.module.scss'

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer>
            <span className={s.copyright}>
                Made with{' '}
                <span className={s.icon}>
                    <FaHeart className="pulse" />{' '}
                </span>{' '}
                and{' '}
                <span className={s.icon}>
                    <GrGatsbyjs className="pulse-delay" />
                </span>{' '}
            </span>
            <span> © Liuba Kapitulskaya {year}</span>
            <div className={s.flaticons}>
                Icons made by{' '}
                <a
                    href="https://www.flaticon.com/authors/freepik"
                    title="Freepik"
                >
                    Freepik
                </a>{' '}
                from{' '}
                <a href="https://www.flaticon.com/" title="Flaticon">
                    www.flaticon.com
                </a>
            </div>
        </footer>
    )
}
