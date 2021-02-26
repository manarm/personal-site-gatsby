import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/Layout"

export default function Template({ data }) {
  const post = data.markdownRemark;
  const postdate = new Date(post.frontmatter.date);
  return (
    <Layout>
      <div className="blog-header">
        <h1 className="mr-2">{post.frontmatter.title}</h1>
        <div className="post-meta d-block d-md-inline">
          ({postdate.toDateString()})
          [
          <a href={post.frontmatter.url} target="_blank" rel="noopener noreferrer" >project</a>&mdash;
          <a href={post.frontmatter.github} target="_blank" rel="noopener noreferrer" >github</a>
          ]
        </div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export const query = graphql`
query($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug } }) {
    html
    frontmatter {
      title
      date
      url
      github
    }
  }
}
`