import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Img from "gatsby-image"
import ReactDisqusThread from "react-disqus-thread"


class SingleBlogPost extends Component {
    render() {
        console.log(this.props)
        const { postTitle, createdAt, postBody, author, slug, id } = this.props.data.contentfulBlogPost
        return (
            <div>
                <h1 style={{
                    borderBottom: '1px solid #ccc',
                    paddingBottom: '0.5rem'
                }}>
                    {postTitle}
                </h1>
                <p>written by {author.name} <img src={author.url} /> on {createdAt}</p>                

                <hr />
                <div>
                    <div dangerouslySetInnerHTML={{__html:postBody.childMarkdownRemark.html}} />
                </div>

                <ReactDisqusThread
                  shortname={'lincsjs'}
                  identifier={`${id}`}
                  title={`${postTitle}`}
                  url={'http://lincsjs.uk'}
                  onNewComment={this.handleNewComment}
                />

            </div>
        )
    }
}

SingleBlogPost.PropTypes = {
    data: PropTypes.object.isRequired
}

export default SingleBlogPost

export const blogQuery = graphql`
    query blogQuery($slug: String!) {

                  contentfulBlogPost(slug: {eq: $slug}) {
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
                            html
                          }
                        } 
                  
                  }
                }

`