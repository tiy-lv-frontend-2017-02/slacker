import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Chatroom from './Chatroom.js'
import Login from './Login'
import '../assets/styles/App.css'
import 'font-awesome/css/font-awesome.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Route exact={true} path="/" component={Login} />
          <Route path="/chatroom" component={Chatroom} />
        </div>
      </Router>
    )
  }
}

export default App