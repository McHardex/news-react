import React, { Component } from 'react';
import Login from './components/Login'
// import SignUp from './components/SignUp'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <SignUp/> */}
        <Login {...this.props} />
      </div>
    );
  }
}

export default App;
