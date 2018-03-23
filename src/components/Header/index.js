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
        padding: '1.45rem 1.0875rem 0.45rem 1.0875rem',
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
      <ul className="header">
      <li>
        <h2 style={{ margin: 0 }}>
          <Link
            to="/about"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            About
          </Link>        
        </h2>    
      </li>
      <li>
        <h2 style={{ margin: 0 }}>
          <Link
            to="/blog"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            Blog
          </Link>        
        </h2>  
      </li>
      <li>        
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
      </li>
      <li>        
        <h2 style={{ margin: 0 }}>
          <Link
            to="/joinus"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            Join
          </Link>        
        </h2>  
        </li>
      </ul>                        
    </div>
  </div>
)

export default Header
