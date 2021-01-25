import React from "react"
import { graphql } from "gatsby"

export default function Home({ data }) {
  console.log(data)
  return (
    <div>
      <div>
        {data.allMarkdownRemark.totalCount}
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h3>
              {node.frontmatter.title}{" "}
              <span>
                — {node.frontmatter.date}
              </span>
            </h3>
            <p>{node.excerpt}</p>

          </div>
        ))}       
      </div>
    </div>
  )
}

export const query = graphql`
    query {
        allMarkdownRemark {
        totalCount
        edges {
            node {
            htmlAst
            id
            frontmatter {
                title
            }
            excerpt
            }
        }
        }
  }
`