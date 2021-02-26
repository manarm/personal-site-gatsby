import React from "react"
import {graphql} from "gatsby"

import Layout from "../components/Layout"

export default function Tech({data}) {
  return (
    <Layout>
      <h1>Recent Projects</h1>
 
      {data.allMarkdownRemark.edges.map(({node}) => (
        <div className="blog-card">
        <h2>{node.frontmatter.title}</h2>
        <span>{node.excerpt}</span>
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
          excerpt
          frontmatter {
            title
            url
            github
          }
        }
      }
    }
  }`