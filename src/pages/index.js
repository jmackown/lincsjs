import React from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image"

const BlogPost = ({node}) => {
    return (
        <div style={{
            marginBottom: '1.5rem',
            padding: '1.5rem',
            border: '1px solid #ccc'
        }}>
            <h3><Link to={node.postTitle}>{node.postTitle}</Link></h3>
            <p>created at</p>
            <div>
                <div>{node.postBody.childMarkdownRemark.excerpt}</div>
            </div>
        </div>
    )
}

const IndexPage = (props) => {

    console.log(props)
    return (
        <div>
            {props.data.allContentfulBlogPost.edges.map((edge) => <BlogPost key={edge.node.id} node={edge.node} />)}
        </div>
    )
}

export default IndexPage

export const pageQuery = graphql`
    query pageQuery {
          allContentfulBlogPost(
                filter: {
                    node_locale: {eq: "en-GB"}
                },
                sort: {
                    fields: [createdAt], order: DESC
                }
            ) {
            edges {
              node {
                id
                createdAt(formatString: "MMMM DD, YYYY")
                postTitle
                postBody {
                  id
                  childMarkdownRemark{
                    excerpt
                  }
                }  
              }
            }
          }
        }
`