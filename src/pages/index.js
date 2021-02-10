import React from "react"
import styles from "./index.module.css"
import StickyNav from "../Components/StickyNav/StickyNav"

export default function Home() {
  return (
    <div>
      <StickyNav />
            <span class="anchor" id="intro"></span>

      <section id="intro">
        <div className={styles.aboutContainer}>
          <h1 className={styles.heading}>Candy Goodison</h1>

          <div className={styles.blurb}>
            <hr className={styles.line} />
            <p>
              Hey there, I’m a full stack software engineer named Candy. I’m
              passionate about user experience and enjoy working with React and
              CSS to create awesome front-ends.
            </p>
            <p>
              In my spare time I enjoy board games, video games, electric guitar
              and trying to skateboard.
            </p>
          </div>
          <div className={styles.ribbonWrapper}>
            <div className={styles.ribbon1} />
            <div className={styles.ribbon2} />
            <div className={styles.ribbon3} />
          </div>
        </div>
      </section>
      <span class="anchor" id="work"></span>
      <section>
        <div className={styles.aboutContainer}>
          <h1 className={styles.heading}>My Work</h1 >

          <div className={styles.aboutContent}>
            <hr className={styles.line} />
            <h3>Redbubble</h3>

            <p>
              Print on demand ecommerce art platform - Melbourne Australia
              Software Engineer, Dec 2015 - Oct 2018
            </p>
            <p>
              Worked as part of multiple cross functional teams following agile
              methodologies to maintain and improve Redbubble’s website.
            </p>
            <ul>
              <li>
                Maintaining and improving a monolithic 11 year old Ruby on Rails
                code base.
              </li>
              <li>
                Integrating React and Redux into the monolith to improve user
                experience Worked on creating microservices to break up the
                monolith such as estimated delivery dates service,
                authentication service, and multiple single page React apps
                replacing legacy Ruby on Rails frontends.
              </li>
              <li>
                Developing APIs that allow multiple clients to interact and
                share data. Researched and developed a new authentication system
                backed by AWS cognito, allowing a consistent user experience
                across multiple web apps and the iPhone app.
              </li>
            </ul>

            <h3>StarRez</h3>

            <p>
              Housing software solutions for universities and colleges -
              Melbourne Australia Software Engineer, Oct 2018 - present
            </p>
            <p>
              Working as part of an agile team to improve the StarRez
              administration facing student housing solution.
            </p>
            <ul>
              <li>
                Maintaining and improving a monolithic 11 year old Ruby on Rails
                code base.
              </li>
              <li>
                Integrating React and Redux into the monolith to improve user
                experience Worked on creating microservices to break up the
                monolith such as estimated delivery dates service,
                authentication service, and multiple single page React apps
                replacing legacy Ruby on Rails frontends.
              </li>
              <li>
                Developing APIs that allow multiple clients to interact and
                share data. Researched and developed a new authentication system
                backed by AWS cognito, allowing a consistent user experience
                across multiple web apps and the iPhone app.
              </li>
            </ul>
          </div>
          <div className={styles.ribbonWrapper}>
            <div className={styles.ribbon1} />
            <div className={styles.ribbon2} />
            <div className={styles.ribbon3} />
          </div>
        </div>
      </section>
      <span class="anchor" id="contact"></span>
      <section>
        <div className={styles.contactContainer}>
          <h1 className={styles.heading}>
            Contact Me
          </h1>

          <div className={styles.contactContent}>
            <hr className={styles.line} />

            <p>Email: CandyGoodison@gmail.com </p>
            <p>
              Twitter:
              <a href="https://www.linkedin.com/in/candygoodison/">
                @CandyGoodison
              </a>
            </p>

            <p>
              Linkedin:
              <a href="https://www.linkedin.com/in/candygoodison/">
                Candy Goodison
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
