import React from 'react'

import Route from './router/Route'
import Router from './router/Router'
import Redirect from './router/Redirect'

import Test1 from './Test1'
import Test2 from './Test2'
import Home from './Home'

import './App.scss'

const App = () => (
  <Router>
    <div>
      <Redirect to='/test1' />
      <Home />
      <Route path='/test1' component={Test1} />
      <Route path='/test2' component={Test2} />
    </div>
  </Router>
)

export default App
