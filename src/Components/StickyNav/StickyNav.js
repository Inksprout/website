import React from "react"
import styles from "./stickyNav.module.css"

export default function StickyNav() {
  return (
    <ul className={styles.nav}>
      <li>
        <a href="#intro">Intro</a>
      </li>
      <li>
        <a href="#work">Work</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  )
}
