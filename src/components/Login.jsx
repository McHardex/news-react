import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../actions/loginActionCreator'

export class Login extends Component {
  constructor() {
    super()
  }

  loginUser = (event) => {
    event.preventDefault()

    let data = {}
    const formData = new FormData(event.target)

    for (let entry of formData.entries()) {
      data[entry[0]] = entry[1]
    }

    this.props.loginUser(data)
  }
  
  render() {
    return (
      <div className="signUp">
        <form className='signupFormContainer' onSubmit={this.loginUser}>
          
          <div className='emailContainer'>
            <label>email</label>
            <input name='email' type='text' placeholder='email'/><br/>
          </div>

          <div className='passwordContainer'>
            <label>password</label>
            <input name='password' type='password' placeholder='enter your password'/><br/>
          </div>

          <button type='submit'>Log in</button>
        </form>
      </div>
    )
  }
}



const mapStateToProps = ({ auth }) => ({ auth })
export default connect(mapStateToProps, { loginUser })(Login)