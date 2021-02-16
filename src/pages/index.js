import React from "react"
import { FaLinkedin } from 'react-icons/fa'; 
import { IconContext } from "react-icons";

import styles from "./index.module.css"
import StickyNav from "../Components/StickyNav/StickyNav"
import favicon from '../images/favicon.png'
import Helmet from 'react-helmet'

export default function Home() {
  return (
    <div>
          <Helmet>
      <link rel="icon" href={favicon} />
    </Helmet>
      <StickyNav />
      <>
      <span className="anchor" id="intro"></span>

      <section id="intro">
        <div className={styles.aboutContainer}>
          <h1 className={styles.heading}>Candy Goodison</h1>

          <div className={styles.blurb}>
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
      <span className="anchor" id="work"></span>
      <section>
        <div className={styles.aboutContainer}>
          <h1 className={styles.heading}>My Work</h1 >

          <div className={styles.aboutContent}>
          <h3>StarRez - Oct 2018 - Nov 2020</h3>

            <p>
              Housing software solutions for universities and colleges -
              Melbourne Australia Software Engineer. Oct 2018 - present
            </p>
            <p>
              Working as part of an agile team to improve the StarRez
              administration facing student housing solution.
            </p>
            <ul>
            <li>
              Contributed significantly to the shared React component library by developing code and participating in the cross team 'design guild' to shape the company's frontend development direction.
            </li>
            <li>
              Implemented new React frontend views for sections of the StarRez admin interface, including integration with the ASP.NET backend legacy code base.
            </li>
            <li>
              Implementing new React frontend microservices, using Apollo Graphql to interface with other services.
            </li>
            <li>
              Implemented front end for new admin tools, integrating with api endpoints and Azure log analytics. Contributed to architecture for new event service based integration with a third party data lake (Ellucian ethos).
            </li>
            <li>
              Designed and implemented graphQL resolvers for queries in ASP.net and Node.js.
            </li>
            <li>
              Comprehensively implemented unit tests for React, maintaining a high level of test coverage.
            </li>
            </ul>
            <h3>Redbubble - Dec 2015 - Oct 2018</h3>

            <p>
              Print on demand ecommerce art platform - Melbourne Australia
              Software Engineer.
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


          </div>
          <div className={styles.ribbonWrapper}>
            <div className={styles.ribbon1} />
            <div className={styles.ribbon2} />
            <div className={styles.ribbon3} />
          </div>
        </div>
      </section>
      <span className="anchor" id="contact"></span>
      <section>
        <div className={styles.aboutContainer}>
          <h1 className={styles.heading}>
            Contact Me

          </h1>
          <div className={styles.contactContent}>
            <p>
                <a href="https://www.linkedin.com/in/candygoodison/">
                  <span className={styles.socialLink}>
                    <IconContext.Provider value={{ style: { marginRight: "10px" }}}>
                      <FaLinkedin size="23px"/>
                    </IconContext.Provider>
                      Candy Goodison
                  </span>

                </a>

            </p>
          </div>
        </div>
      </section>
      </>
    </div>
  )
}
