import React from 'react'
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { Button, Navbar } from 'reactstrap'

import Login from './Components/Login'
import SignUp from './Components/SignUp'
import Posts from './Components/Posts'
import Albums from './Components/Albums'
import Photos from './Components/Photos'
import Photo from './Components/Photo'
import Edit from './Components/Edit'

import PrivateRoute from './Components/PrivateRoute'
import './App.css'


function App() {
  const logOut = () => {
    localStorage.setItem('token', '')
  }

  return (

    <Router>
      <header className="nav">

        <Link to="/albums">
          <Button>Home</Button>
        </Link>
        <Link to="/photos">
          <Button>Photos</Button>
        </Link>
        <Link to="/posts">
          <Button>Posts</Button>
        </Link>
        <Link to="/signup">
          <Button>Sign Up</Button>
        </Link>
        <Link to="/login">
          <Button>Login</Button>
        </Link>
        <Link to="/login">
          <Button onClick={logOut}>LogOut</Button>
        </Link>

      </header>

      <Switch>

        <Route exact path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/posts" component={Posts} />
        <Route path="/edit" component={Edit} />
        <Route path="/albums" component={Albums} />
        <Route exact path="/photos/:id" component={Photo} />
        <Route exact path="/photos" component={Photos} />

        <PrivateRoute path="/posts" component={Posts} />
      </Switch>
    </Router>



  )
}

export default App
