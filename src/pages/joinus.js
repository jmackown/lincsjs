import React from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image"
import Iframe from 'react-iframe'

const JoinPage = (props) => {

    console.log(props)
    return (
        <div>

            <Iframe url="https://mailchi.mp/04aedddb924b/mailing-list"
                    width="780px"
                    height="900px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"
                    allowFullScreen/>


        </div>
    )
}




export default JoinPage
