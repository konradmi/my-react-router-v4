import React, { PureComponent } from 'react'

import Route from './router/Route'
import Link from './router/Link'

import Test1 from './Test1'
import Test2 from './Test2'

import './App.scss'

export default class App extends PureComponent {
  render() {
  	return(
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

        <Route path='/test1' component={Test1}/>
        <Route path='/test2' component={Test2}/>
      </div>
    )
  }
}






