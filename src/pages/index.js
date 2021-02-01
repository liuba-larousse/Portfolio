import React from 'react'
import Layout from '~/components/Layout/Layout'
import Hero from '~/components/Hero/Hero'
import MyServices from '~/components/MyServices/MyServices'
import Projects from '~/components/Projects/Projects'
import Contact from '~/components/Contact/Contact'
import About from '~/components/About/About'
import SEO from '~/components/SEO/SEO'

import Skills from '~/components/Skills/Skills'

import '../css/main.scss'

export default function Home() {
    return (
        <Layout>
            <SEO title="Front-end Developer. HTML, CSS, JS, React" />
            <Hero />
            <div className="parallax full_height">
                <About />
            </div>

            <Skills />
            <div className="parallax"></div>
            <Projects />
            <div className="parallax full_height">
                <Contact />
            </div>
        </Layout>
    )
}
