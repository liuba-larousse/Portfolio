import React from "react"
import Layout from "../components/Layout"
import styles from "../css/contact.module.scss"
import { social } from "../components/socialMedia"
import { HiOutlineMail } from "react-icons/hi"

export default function contactPage() {
  const links = [...social]
  return (
    <Layout>
      <section className={styles.section}>
        <div className={`${styles.container} ${styles.front}`}>
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
            <p>
              Chambray jean shorts ugh, polaroid try-hard vinyl literally
              portland kale chips post-ironic hashtag keffiyeh. Selfies air
              plant lyft.
            </p>
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
        </div>
        <div className={`${styles.container} ${styles.back}`}>
          <div className={styles.top}>
            <div className={styles.c1}></div>
            <div className={styles.c2}></div>
            <div className={styles.c3}></div>
          </div>
          <div className={styles.bottom}></div>
        </div>
        <a href="mailto:liuba.larousse@gmail.com" className={styles.button}>
          <span className={styles.icon}>
            <HiOutlineMail />{" "}
          </span>
          Let`connect!
        </a>
      </section>
    </Layout>
  )
}
