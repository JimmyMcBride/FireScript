import React from 'react'
import './App.css'
import styled from 'styled-components'

// import { Route } from 'react-router-dom'

// import LandingPage from './components/LandingPage/LandingPage'
// import Login from './components/Login/Login'
// import PrivateRoute from './components/PrivateRoute/PrivateRoute'
// import HomePage from './components/HomePage/HomePage'

const Heading = styled.div`background: red;`


function App() {
  return (
    <div className='app'>
      <Heading>Header</Heading>
      {/* <h1>Heading</h1> */}
          {/* <Route
          path='/'
          exact
          component={LandingPage}
        />
        <Route
          path='/login'
          render={props => (
            <Login {...props} />
          )}
        />
        <PrivateRoute
          path="/protected"
          component={HomePage}
        /> */}
    </div>
  )
}

export default App