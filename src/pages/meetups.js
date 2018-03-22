import React from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image"



const Meetups = ({node}) => {
    return (
        <div style={{
            marginBottom: '1.5rem',
            padding: '1.5rem',
            border: '1px solid #ccc'
        }}>
            <h3><Link to={"/meetups" + node.slug}>{node.meetupName}</Link></h3>
            <p>Guests: {node.meetupGuests}</p>
            <div>
                <div>{node.meetupDetails.childMarkdownRemark.excerpt}</div>
            </div>
        </div>
    )
}


const MeetupPage = (props) => {

    console.log(props)
    return (
        <div>
            {props.data.allContentfulMeetup.edges.map((edge) => <Meetups key={edge.node.id} node={edge.node} />)}
        </div>
    )
}

export default MeetupPage




export const meetuplistQuery = graphql`
    query meetuplistQuery {
          allContentfulMeetup(
                filter: {
                    node_locale: {eq: "en-GB"}
                },
                sort: {
                    fields: [createdAt], order: DESC
                }
            ) {
                edges{
                  node {
                    id
                    slug
                    meetupName
                    meetupGuests
                    meetupDate(formatString: "MMMM DD, YYYY hh:mm")
                    meetupLocation {
                      lon
                      lat
                    }
                            meetupDetails {
                              childMarkdownRemark{
                        excerpt
                      }
                            }
                  }
                }
          }
        }
`