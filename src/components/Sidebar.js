import React from "react"
import { Link } from "gatsby"
import styles from "../css/sidebar.module.scss"

export default function Sidebar({ isActive }) {
  return (
    <nav className={styles.sidebar}>
      <ul
        className={styles.links}
        // className={{ isActive } ? " nav-links fadeIn" : " nav-links collapsed"}
      >
        <li>
          {" "}
          <Link className={styles.link} to="/about">
            {" "}
            about{" "}
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/projects">
            {" "}
            projects{" "}
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/services">
            {" "}
            services{" "}
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/contact">
            {" "}
            contact{" "}
          </Link>
        </li>
      </ul>
    </nav>
  )
}
