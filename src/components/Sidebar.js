import React from "react"
import { Link } from "gatsby"
import styles from "../css/sidebar.module.scss"

export default function Sidebar() {
  return (
    <nav className={styles.sidebar}>
      <ul
        className={styles.links}
        // className={{ isActive } ? " nav-links fadeIn" : " nav-links collapsed"}
      >
        <li>
          <Link className={styles.link} to="/">
            {" "}
            <h2>home</h2>
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/about">
            {" "}
            <h2>about</h2>
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/projects">
            {" "}
            <h2>projects </h2>
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/services">
            {" "}
            <h2>services </h2>
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/contact">
            {" "}
            <h2>contact </h2>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
