import React from 'react'
import { Link } from 'gatsby'
import Image from './image'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#173e7d',
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
      <div style={{ margin: 0, textAlign: 'center' }} >
        <Image />
      </div>
      <h1 style={{ margin: 0, textAlign: 'center' }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
