import React from 'react'
import PropTypes from 'prop-types'

const Route = ({ path, component }, { location }) => location.pathname.match(path)
                                                     ? React.createElement(component)
                                                     : null

Route.contextTypes = {
  location: PropTypes.object,
}

export default Route
