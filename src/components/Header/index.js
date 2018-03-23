import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Lincs JS
        </Link>
      </h1>
      <h2 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Blog
        </Link>        
      </h2>    
      <h2 style={{ margin: 0 }}>
        <Link
          to="/meetups"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Meetups
        </Link>        
      </h2>            
    </div>
  </div>
)

export default Header
