import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Img from "gatsby-image"

class singleMeetup extends Component {
    render() {
        console.log(this.props)
        const { meetupName, meetupGuests } = this.props.data.contentfulMeetup
        return (
            <div>
                <h1 style={{
                    borderBottom: '1px solid #ccc',
                    paddingBottom: '0.5rem'
                }}>
                    {meetupName}
                </h1>
                <p>{meetupGuests}</p>

                <hr />
                <div>
                    
                </div>
            </div>
        )
    }
}

singleMeetup.PropTypes = {
    data: PropTypes.object.isRequired
}

export default singleMeetup

export const meetupQuery = graphql`
    query meetupQuery($slug: String!) {
        contentfulMeetup(slug: {eq: $slug}) {
            meetupName
            meetupGuests
            createdAt(formatString: "MMMM DD, YYYY")
            meetupDetails {
                childMarkdownRemark {
                    html
                }
            }
        }
    }
`