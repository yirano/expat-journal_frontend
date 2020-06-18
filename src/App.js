import React from 'react'
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { Button, Navbar } from 'reactstrap'

import Login from './Components/Login'
import SignUp from './Components/SignUp'
import Posts from './Components/Posts'
import Albums from './Components/Albums'
import PrivateRoute from './Components/PrivateRoute'
import './App.css'
// import SignUp from './Components/SignUp'

function App() {
  return (
    <Router>
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

        {/* <PrivateRoute path="/posts" component={Posts} /> */}
        {/* <PrivateRoute path="/photos" component={Photos} /> */}
        {/* <PrivateRoute path="/albums" component={Albums} */}
      </Switch>
    </Router>

  )
}

export default App
