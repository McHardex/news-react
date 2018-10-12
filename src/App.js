import React, { Component } from 'react';
// // import Login from './components/Login'
// // import SignUp from './components/SignUp'
// import Articles from './components/Articles'
import { Link } from 'react-router'

export class App extends Component {
  render() {
  const token = localStorage.getItem('user-token');
  if(token) {
    return (
      <div className="App">
        <Link to='users'>View Users</Link>
        {this.props.children}
      </div>
    );
  } else {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
  }
}