import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Img from "gatsby-image"

class SingleBlogPost extends Component {
    render() {
        console.log(this.props)
        const { postTitle, createdAt, postBody } = this.props.data.contentfulBlogPost
        return (
            <div>
                <h1 style={{
                    borderBottom: '1px solid #ccc',
                    paddingBottom: '0.5rem'
                }}>
                    {postTitle}
                </h1>
                <p>{createdAt}</p>

                <hr />
                <div>
                    <div dangerouslySetInnerHTML={{__html:postBody.childMarkdownRemark.html}} />
                </div>
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
            postTitle
            createdAt(formatString: "MMMM DD, YYYY")
            postBody {
                childMarkdownRemark {
                    html
                }
            }
        }
    }
`