import React, { Component } from 'react';
// import Login from './components/Login'
// import SignUp from './components/SignUp'
import Articles from './components/Articles'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <SignUp/> */}
        {/* <Login {...this.props} /> */}
        <Articles />
      </div>
    );
  }
}

export default App;
