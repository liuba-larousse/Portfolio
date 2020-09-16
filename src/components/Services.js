import React from "react"
import styles from "../css/services.module.scss"
import Img from "gatsby-image"

export default function Services({ service, fluid }) {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.c1}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.c2}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.c3}>
          <div className={styles.circle}></div>
        </div>
      </div>
      <div className={styles.bottom}>
        <Img className="image" fluid={fluid} />
        <h2>{service}</h2>
      </div>
    </div>
  )
}
