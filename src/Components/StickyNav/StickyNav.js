import React from "react"
import styles from "./stickyNav.module.css"
import { Link } from "gatsby"

export default function StickyNav() {
  return (
    <ul className={styles.nav}>
      <li>
        <Link to="/#intro">Intro</Link>
      </li>
      <li>
      <Link to="/#work">Work</Link>
      </li>
      <li>
      <Link to="/#contact">Contact</Link>
      </li>
    </ul>
  )
}
