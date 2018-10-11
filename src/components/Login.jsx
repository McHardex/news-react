import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../actions/authActionCreator'
import { clearFormErrors } from '../actions/formActionCreator'
import { Link } from 'react-router'

export class Login extends Component {
  constructor(props) {
    super(props);
    this.loginUser = this.loginUser.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.user.token) {
      window.location = '/#/articles'
    }
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
      <div className="login">
        <p>{ this.props.auth.loginError }</p>
        <form className='loginFormContainer' onSubmit={this.loginUser}>
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
        <p>don't have an account?<Link to='/' onClick={this.props.clearFormErrors}>Sign Up</Link></p>
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => ({ auth })
export default connect(mapStateToProps, { loginUser, clearFormErrors })(Login)
