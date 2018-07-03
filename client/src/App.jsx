import React, { Component } from 'react';
import './css/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './js/components/Home';
import SignIn from './js/components/SignIn';
import About from './js/components/About';
import News from './js/components/News';
import Navbar from './js/components/CustomNavbar';

const fetch = require('isomorphic-fetch');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { users: '' };
  }
  
  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }
 
  render() {
    console.log(this.state.users);
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={SignIn} />
          <Route path="/about" component={About} />
          <Route path="/news" component={News} />
        </div>
      </Router>
    );
  }
}

export default App;
