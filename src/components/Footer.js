import React from "react"
import { FaHeart, FaReact } from "react-icons/fa"
import styles from "../css/footer.module.scss"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer>
      <span className={styles.copyright}>
        Made with{" "}
        <span className={styles.icon}>
          <FaHeart className="pulse" />{" "}
        </span>{" "}
        and{" "}
        <span className={styles.icon}>
          <FaReact className="pulse-delay" />
        </span>{" "}
        © Liuba LaRousse {year}
      </span>
    </footer>
  )
}
