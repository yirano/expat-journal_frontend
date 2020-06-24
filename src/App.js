import React from 'react'
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { Button, Navbar } from 'reactstrap'
import { connect } from 'react-redux'

import PrivateRoute from './Components/PrivateRoute'
import { logOut } from './Action/action'

import Login from './Components/Login'
import SignUp from './Components/SignUp'
import Posts from './Components/Posts'
// import Albums from './Components/Albums'
import Photos from './Components/Photos'
import Photo from './Components/Photo'
import Edit from './Components/Edit'

import './App.css'


function App(props) {
  const logOut = () => {
    props.logOut()
    props.history.push('/login')
  }

  return (

    <Router>
      <header className="nav">

        <Link to="/photos">
          <Button>Home</Button>
        </Link>

        {props.isLoggedIn ?
          <Link to="/posts">
            <Button>Posts</Button>
          </Link>
          : null
        }

        {localStorage.getItem('token') === null ?
          <Link to="/login">
            <Button>Login</Button>
          </Link> :
          <Link to="/login">
            <Button onClick={logOut}>LogOut</Button>
          </Link>
        }

      </header>

      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/edit" component={Edit} />
        {/* <Route path="/albums" component={Albums} /> */}
        <Route exact path="/photos/:id" component={Photo} />
        <Route exact path="/photos" component={Photos} />

        <PrivateRoute path="/posts" component={Posts} />
      </Switch>
    </Router>

  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: state.isLoggedIn
  }
}

export default connect(mapStateToProps, { logOut })(App)
