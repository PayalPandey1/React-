import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Post from './Components/posts'
import Profile from './Components/profiles'
import Home from './Components/home'
import Lifecyclereact from './Components/lifecycle'
import Conditional from './Components/conditional'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Lifecyclereact />
        <div>
          <header>
            <Link to='/profile'> Profile Works <br /> </Link>
            <Link to='/posts/:id/:username'> Post with id and username Works <br /> </Link>
            <Link to='/posts'> Post without id and username works <br /> </Link>
            <Link to='/life'> Life <br /> </Link>
            <Link to='/conditional'> Conditions are always there <br /> </Link>
            <Link to='/'> Home Works <br /> </Link>
          </header>
        </div>
        <Switch>
          <div>
            <Route path='/posts/:id/:username' component={Post} />
            <Route path='/profile' component={Profile} />
            <Route path='/posts' component={Post} />
            <Route path='/life' component={Lifecyclereact} />
            <Route path='/conditional' component={Conditional} />
            <Route path='/' exact component={Home} />
            <Route render={() => <h3> oops 404 not found</h3>} />
          </div>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))

/* <Route path='/p' component={Post} />
*/
