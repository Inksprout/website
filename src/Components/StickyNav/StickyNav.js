import React from "react"
import styles from "./stickyNav.module.css"
import { Link } from "gatsby"

export default function StickyNav() {


  return (
    <ul className={styles.nav}>
      <li>
        <Link className={styles.navLink} to="/#intro">Intro</Link>
      </li>
      <li>
        <Link className={styles.navLink} to="/#work">Work</Link>
      </li>
      <li>
        <Link className={styles.navLink}to="/#contact">Contact</Link>
      </li>
    </ul>
  )
}
