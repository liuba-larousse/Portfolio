import React from 'react'
import Layout from '~/components/Layout/Layout'
import Hero from '~/components/Hero/Hero'
import Projects from '~/components/Projects/Projects'
import Contact from '~/components/Contact/Contact'
import About from '~/components/About/About'
import SEO from '~/components/SEO/SEO'

import Skills from '~/components/Skills/Skills'

import '../css/main.scss'

export default function Home() {
    const msg = '%c Hi there 🧚‍♀️! Welcome to my site!'
    const styles = [
        'font-size: 15px',
        'font-family: semplicitapro',
        'background: #ff5252',
        'display: inline-block',
        'color: black',
        'padding: 20px 40px',
        'border: 1px ;',
        'border-radius: 20px ;',
    ].join(';')
    console.log(msg, styles)
    return (
        <Layout>
            <SEO title="Front-end Developer. HTML, CSS, JS, React" />
            <Hero />
            <div className="parallax"></div>
            <Projects />
            <div className="parallax full_height">
                <About />
            </div>
            {/* <Skills />
            <div className="parallax"></div> */}
            <Skills />
            <div className="parallax full_height">
                <Contact />
            </div>
        </Layout>
    )
}
