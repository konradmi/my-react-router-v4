import React from 'react'

const Route = ({ path, component }) => {
  const pathname = window.location.pathname
  return pathname.match(path) ? React.createElement(component) : null
}

export default Route
