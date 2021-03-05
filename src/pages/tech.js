import React from "react"
import {graphql, Link} from "gatsby"

import Layout from "../components/Layout"

export default function Tech({data}) {
  return (
    <Layout>
      <h1>Tech &mdash; Recent Projects</h1>
      {data.allMarkdownRemark.edges.map(({node}) => {
        const postdate = new Date(node.frontmatter.date);
        return (
        <div className="blog-card" key={node.id}>
        <div>
          <h2 className="mr-2"><Link to={node.fields.slug}>{node.frontmatter.title}</Link></h2>
          <div className="post-meta d-block d-md-inline">
            ({postdate.toDateString()})
            [
            <a href={node.frontmatter.url} target="_blank" rel="noopener noreferrer" >project</a>&mdash;
            <a href={node.frontmatter.github} target="_blank" rel="noopener noreferrer" >github</a>
            ]
          </div>
        </div>
        <p>
          {node.excerpt}
          <span className='ml-1'><Link to={node.fields.slug}>(continued)</Link></span>
        </p>
        </div>
      )})}
    </Layout>
  )
}

export const query = graphql`
query TechPosts {
  allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/tech/"}}
    sort: { fields: [frontmatter___date], order: DESC }
    ) {
    edges {
      node {
        id
        excerpt(pruneLength: 400)
        fields {
          slug
        }
        fileAbsolutePath
        frontmatter {
          date
          github
          url
          title
        }
      }
    }
  }
}
`