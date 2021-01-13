import React from 'react'
import { skills } from './skillsdata.js'
import s from './SkillStyles.module.scss'

export default function Skills() {
    console.log(skills)

    return (
        <section id="skills" className={s.section}>
            <h2
                data-sal="slide-up"
                data-sal-duration="500"
                data-sal-delay="250"
                data-sal-easing="ease-in"
            >
                Skills
            </h2>
            <div className={s.flexlist}>
                {skills.map(skill => (
                    <div className={s.box}>
                        <span className={s.icon}>{skill.icon}</span>
                        <span className={s.title}>{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}
