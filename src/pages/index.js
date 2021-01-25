import React from "react";
import styles from "./index.module.css"
import StickyNav from "../Components/StickyNav/StickyNav";

export default function Home() {
  return (
    <>
    <StickyNav/>
      <section id="intro">
        <div className={styles.aboutContainer}>
            <h1 className={styles.heading}>Candy Goodison</h1>
            <hr className={styles.line}/>
            <div className={styles.blurb}>
              <p>Hey there, I’m a full stack software engineer named Candy. I’m passionate about user experience and enjoy working with React and CSS to create awesome front-ends.</p>
              <p>In my spare time I enjoy board games, video games, electric guitar and trying to skateboard.</p>
            </div>
            <div className={styles.ribbonWrapper}>
              <div className={styles.ribbon1}/>
              <div className={styles.ribbon2}/>
              <div className={styles.ribbon3}/>
            </div>
          </div>
      </section>
      <section id="about">
        <div className={styles.aboutContainer}>
            <h1 className={styles.heading}>About Me</h1>
            <hr className={styles.line}/>
            <div className={styles.blurb}>
            </div>
            <div className={styles.ribbonWrapper}>
              <div className={styles.ribbon1}/>
              <div className={styles.ribbon2}/>
              <div className={styles.ribbon3}/>
            </div>
          </div>
      </section>
      <section id="work">
        <div className={styles.aboutContainer}>
            <h1 className={styles.heading}>My Work</h1>
            <hr className={styles.line}/>
            <div className={styles.blurb}>
            </div>
            <div className={styles.ribbonWrapper}>
              <div className={styles.ribbon1}/>
              <div className={styles.ribbon2}/>
              <div className={styles.ribbon3}/>
            </div>
          </div>
      </section>
      <section id="contact">
        <div className={styles.aboutContainer}>
            <h1 className={styles.heading}>Get in Touch</h1>
            <hr className={styles.line}/>
            <div className={styles.blurb}>
            </div>
            <div className={styles.ribbonWrapper}>
              <div className={styles.ribbon1}/>
              <div className={styles.ribbon2}/>
              <div className={styles.ribbon3}/>
            </div>
          </div>
      </section>
    </>
  )
}
