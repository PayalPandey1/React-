import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom'
import Post from './Components/posts'
import Profile from './Components/profiles'
import Home from './Components/home'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Link to='/profile'> Profile Works <br /> </Link>
          <Link to='/posts/:id/:username'> Post with id and username Works <br /> </Link>
          <Link to='/posts'> Post without id and username works <br /> </Link>
          <Link to='/'> Home Works <br /> </Link>
        </div>
        <Switch>
          <div>
            <Redirect from='/profile' to='/' />
            <Route path='/posts/:id/:username' component={Post} />
            <Route path='/profile' component={Profile} />
            <Route path='/posts' component={Post} />
            <Route path='/' component={Home} />
          </div>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))

/* <Route path='/p' component={Post} />
*/
