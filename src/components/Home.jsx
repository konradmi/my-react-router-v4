import React from 'react'
import Link from './router/Link'

const Home = () => (
  <div>
    <ul>
      <li>
        <Link to='/test1'>
          <code>/test1</code>
        </Link>
      </li>
      <li>
        <Link to='/test2'>
          <code>/test2</code>
        </Link>
      </li>
    </ul>
  </div>
)

export default Home
