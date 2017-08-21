import React from 'react'
import createHistory from 'history/createBrowserHistory'

const history = createHistory()

const Link = ({ to, children }) => (
  <a
    onClick={(e) => {
      e.preventDefault()
      history.push(to)
    }}
    href={to}
  >
    {children}
  </a>
)

export default Link
