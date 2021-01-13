import React from 'react'
import s from './ServiceCardStyles.module.scss'
import Img from 'gatsby-image'

export default function ServiceCard({ service, fluid, delay }) {
    return (
        <div
            className={s.container}
            data-sal="fade"
            data-sal-duration="500"
            data-sal-delay={delay}
        >
            <div className={s.top}>
                <div className={s.c1}>
                    <div className={s.circle}></div>
                </div>
                <div className={s.c2}>
                    <div className={s.circle}></div>
                </div>
                <div className={s.c3}>
                    <div className={s.circle}></div>
                </div>
            </div>
            <div className={s.bottom}>
                <Img className={s.img} fluid={fluid}></Img>
                <div className={s.text}>
                    <span>{service}</span>
                </div>
            </div>
        </div>
    )
}
