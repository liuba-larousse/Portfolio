import React from "react"
import { social } from "./socialMedia"
import styles from "../css/soc-links.module.scss"

export default function About() {
  const links = [...social]
  return (
    <>
      <section className="about-grid">
        <div className="about-text">
          <h3>
            <span className="anim-type">Hi, I`m Liuba</span>
          </h3>
          <h1>Web Designer</h1>
          <button>contact me</button>
          <h3>
            {" "}
            I will code your dreams into{" "}
            <span className="anim-flash">reality</span>
          </h3>
          <ul className={styles.links}>
            {links.map(link => {
              return (
                <li key={link.id}>
                  <a href={link.link}>{link.icon}</a>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    </>
  )
}
