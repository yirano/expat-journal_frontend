import React from 'react'
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { Button } from 'reactstrap'
import { connect } from 'react-redux'

import PrivateRoute from './Components/PrivateRoute'
import { logOut } from './Action/action'

import Login from './Components/Form/Login'
import SignUp from './Components/Form/SignUp'
import Edit from './Components/Form/Edit'
import Posts from './Components/Form/Posts'
import AddAlbum from './Components/Form/AddAlbum'
import Albums from './Components/Album/Albums'
import Photos from './Components/Photo/Photos'
import Photo from './Components/Photo/Photo'

import './App.css'



function App(props) {
  const logOut = () => {
    props.logOut()
    alert("Thanks for visiting Expat Journal!")
  }

  return (
    <Router>
      <header className="nav">
        {localStorage.getItem('token') === null ?
          <a href="https://xpatjournal.netlify.app/">
            <Button>Home</Button>
          </a>
          : <Link to="/albums">
            <Button>Albums</Button>
          </Link>
        }

        {localStorage.key('token') !== null ?
          <Link to="/addalbum">
            <Button>New Album</Button>
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
        <Route path="/edit/:id" component={Edit} />
        <Route path="/albums/:id" component={Photos} />
        <Route path="/albums" component={Albums} />
        <Route exact path="/photo/:id" component={Photo} />

        <PrivateRoute path="/album/:id/post" component={Posts} />
        <PrivateRoute exact path="/addalbum" component={AddAlbum} />
        <PrivateRoute exact path="/album/edit/:id" component={AddAlbum} />
      </Switch>
    </Router>

  )
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
    spotLight: state.spotLight
  }
}

export default connect(mapStateToProps, { logOut })(App)
