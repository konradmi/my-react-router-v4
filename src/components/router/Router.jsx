import React, { Component } from 'react'
import createHistory from 'history/createBrowserHistory'
import PropTypes from 'prop-types'

export default class Router extends Component {
  
  static childContextTypes = {
    history: PropTypes.object,
    location: PropTypes.object,
  }

  constructor(props) {
    super(props)
    this.history = createHistory()
    this.history.listen(() => this.forceUpdate())
  }

  getChildContext() {
    return {
      history: this.history,
      location: window.location,
    }
  }

  render() {
    return this.props.children
  }
}
