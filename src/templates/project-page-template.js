import React from "react";
import { graphql } from "gatsby";
import styles from "./project-page-template.module.css";

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <div className={styles.content}>
      <div>
        <h1 className={styles.content}>{post.frontmatter.title}</h1>
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`