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
        </footer>
    )
}
