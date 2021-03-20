import React from 'react'
import s from './AboutStyles.module.scss'

export default function About() {
    return (
        <section className={s.section} id="about">
            <div
                className={`${s.container} ${s.front}`}
                data-sal="fade"
                data-sal-duration="500"
                data-sal-delay="500"
                data-sal-easing="ease-in"
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
                    <div className={s.text}>
                        <p>
                            Born and raised in Russia ,I have been living in US
                            for past 10 years, with my base in awesome Austin,
                            TX now. After working in customer service and
                            healthcare positions for past few years, my desire
                            for learning, progress and creativity as well as my
                            love for technology have lead me to explore the tech
                            world. I have been self-taught developer for a year
                            now. It has been a challanging and fun journey that
                            I hope to explore for many years now, and help
                            others along the way by creating innovative,
                            human-centered and accessible web applications.
                        </p>
                    </div>
                </div>
            </div>
            {/* <div
                className={`${s.container} ${s.back}`}
                data-sal="fade"
                data-sal-duration="500"
                data-sal-delay="0"
                data-sal-easing="ease-in"
            >
                <div className={s.top}>
                    <div className={s.c1}></div>
                    <div className={s.c2}></div>
                    <div className={s.c3}></div>
                </div>
                <div className={s.bottom}></div>
            </div> */}
        </section>
    )
}
