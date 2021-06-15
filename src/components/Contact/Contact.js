import React from 'react'
import s from './ContactStyles.module.scss'

import component from '~/css/components.module.scss'
import { social } from '~/components/socialMedia'

export default function contactPage() {
    const links = [...social]
    return (
        <section id="contact" className={s.section}>
            <h2
                data-sal="slide-up"
                data-sal-duration="500"
                data-sal-delay="250"
                data-sal-easing="ease-in"
            >
                Get in touch
            </h2>

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
                            Thank you for visiting my page. I am excited to help
                            you with your project.
                        </p>
                        <a
                            href="mailto:liubovkapitulskaya@gmail.com"
                            className={`${component.button} ${s.btn_contact}`}
                        >
                            Let`s connect!
                        </a>
                    </div>
                    <ul className={`${component.links} ${s.links}`}>
                        {links.map((link, index) => {
                            return (
                                <li
                                    key={link.id}
                                    data-sal="slide-up"
                                    data-sal-duration="300"
                                    data-sal-delay="1000s"
                                    data-sal-easing="ease-in"
                                >
                                    <a href={link.link}>{link.icon}</a>
                                </li>
                            )
                        })}
                    </ul>
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
