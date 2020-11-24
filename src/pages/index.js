import React from "react"
import Layout from "~/components/Layout/Layout"
import Hero from "~/components/Hero/Hero"
import MyServices from "~/components/MyServices/MyServices"
import Projects from "~/components/Projects/Projects"
import Contact from "~/components/Contact/Contact"

import "../css/main.scss"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <div class="parallax"></div>
      <MyServices />
      <div class="parallax"></div>
      <Projects />
      <div class="parallax full_height">
        <Contact />
      </div>
    </Layout>
  )
}
