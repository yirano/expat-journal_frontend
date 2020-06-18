import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { Button, Navbar } from 'reactstrap'

import Login from './Components/Login'
import SignUp from './Components/SignUp'
import './App.css'
// import SignUp from './Components/SignUp'

function App() {
  return (
    <>
      <Navbar color='info'>
        <Link to="/">
          <Button color='info'>Home</Button>
        </Link>
      </Navbar>
      <Switch>

        <Route path="/signup" component={SignUp} />
        <Route path="/" component={Login} />
      </Switch>

    </>
  )
}

export default App
