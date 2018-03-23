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
            <h3><Link to={node.slug}>{node.postTitle}</Link></h3>
            <p>written by {node.author.name} on {node.createdAt}</p>
          
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

export const indexQuery = graphql`
    query indexQuery {
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
                slug
                createdAt(formatString: "MMMM DD, YYYY")
                author {
                  id
                  name
                  headshot {
                    file {
                      url
                      fileName
                      contentType
                    }
                  }
                }                
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