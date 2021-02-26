import React from "react"
import {graphql} from "gatsby"

import Layout from "../components/Layout"

export default function Tech({data}) {
  return (
    <Layout>
      <h1>Recent Projects</h1>
 
      {data.allMarkdownRemark.edges.map(({node}) => (
        <div className="blog-card">
        <div>
          <h2>{node.frontmatter.title}</h2>
          <span className="post-meta">
            [
            <a href={node.frontmatter.url} target="_blank" rel="noopener noreferrer" >project</a>&mdash;
            <a href={node.frontmatter.github} target="_blank" rel="noopener noreferrer" >github</a>
            ]
          </span>
        </div>
        <p>{node.excerpt}</p>
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query TechPosts {
    allMarkdownRemark(filter: {frontmatter: {category: {eq: "tech"}}}) {
      edges {
        node {
          id
          excerpt(pruneLength: 400)
          frontmatter {
            title
            url
            github
          }
        }
      }
    }
  }`