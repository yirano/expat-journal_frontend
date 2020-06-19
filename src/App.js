import React from 'react'
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { Button, Navbar } from 'reactstrap'

import Login from './Components/Login'
import SignUp from './Components/SignUp'
import Posts from './Components/Posts'
import Albums from './Components/Albums'
import Photos from './Components/Photos'
import Photo from './Components/Photo'

// import PrivateRoute from './Components/PrivateRoute'
import './App.css'
// import SignUp from './Components/SignUp'

function App() {
  return (
    <Router>
      <Navbar color='info'>
        <Link to="/albums">
          <Button color='info'>Home</Button>
        </Link>
        <Link to="/photos">
          <Button color='info'>Photos</Button>
        </Link>
        <Link to="/posts">
          <Button color='info'>Posts</Button>
        </Link>
      </Navbar>

      <Switch>
        {/* Photos component will act as both Public/Private. Private has edit options & etc */}
        <Route exact path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/posts" component={Posts} />
        <Route path="/albums" component={Albums} />
        <Route exact path="/photos/:id" component={Photo} />
        <Route exact path="/photos" component={Photos} />


        {/* <PrivateRoute path="/posts" component={Posts} /> */}
        {/* <PrivateRoute path="/photos" component={Photos} /> */}
        {/* <PrivateRoute path="/albums" component={Albums} */}
      </Switch>
    </Router>

  )
}

export default App
