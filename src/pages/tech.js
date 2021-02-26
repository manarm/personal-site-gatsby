import React from "react"
import {graphql} from "gatsby"

import Layout from "../components/Layout"

export default function Tech({data}) {
  return (
    <Layout>
      <h1>Tech &mdash; Recent Projects</h1>
      {data.allMarkdownRemark.edges.map(({node}) => {
        const postdate = new Date(node.frontmatter.date);
        return (
        <div className="blog-card">
        <div>
          <h2 className="mr-2">{node.frontmatter.title}</h2>
          <div className="post-meta d-block d-md-inline">
            ({postdate.toDateString()})
            [
            <a href={node.frontmatter.url} target="_blank" rel="noopener noreferrer" >project</a>&mdash;
            <a href={node.frontmatter.github} target="_blank" rel="noopener noreferrer" >github</a>
            ]
          </div>
        </div>
        <p>{node.excerpt}</p>
        </div>
      )})}
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
            date
            url
            github
          }
        }
      }
    }
  }`