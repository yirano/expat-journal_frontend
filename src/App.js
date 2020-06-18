import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { Button, Navbar } from 'reactstrap'

import Login from './Components/Login'
import SignUp from './Components/SignUp'
import Posts from './Components/Posts'
import Photos from './Components/Photos'
import './App.css'
// import SignUp from './Components/SignUp'

function App() {
  return (
    <>
      <Navbar color='info'>
        <Link to="/">
          <Button color='info'>Home</Button>
        </Link>
        <Link to="/posts">
          <Button color='info'>Posts</Button>
        </Link>
      </Navbar>

      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/posts" component={Posts} />
        <Route path="/photos" component={Photos} />
      </Switch>
    </>
  )
}

export default App
