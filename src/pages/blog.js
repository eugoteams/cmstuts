import React from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
import { graphql } from "gatsby"
import {navigate} from 'gatsby'
import "bootstrap/dist/css/bootstrap.min.css"

export default function blog({ data }) {
  const { edges } = data.allMarkdownRemark
  console.log("edges,", edges)
  return (
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0 1.0875rem 1.45rem`,
        border: `1px solid red`,
      }}
    >
      {edges.map(edge => {
        const { frontmatter } = edge.node
        return (
          <div key={frontmatter.path}>
            <Card onClick={() =>navigate('/blog/'+frontmatter.path)}>
              <Card.Body>
                <Card.Title>{frontmatter.title}</Card.Title>
                <Card.Text>{frontmatter.description}</Card.Text>
                <Card.Text>
                  <small className="text-muted">{frontmatter.date}</small>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        )
      })}
    </div>
  )
}

export const homePostTemplateQuery2 = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            path
            date
            description
          }
          html
        }
      }
    }
  }
`
