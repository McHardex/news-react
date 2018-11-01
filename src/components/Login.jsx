import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../actions/authActionCreator'
import { clearFormErrors } from '../actions/formActionCreator'
import { Link } from 'react-router'
import '../assets/stylesheets/login.css'

export class Login extends Component {
  constructor(props) {
    super(props);
    this.loginUser = this.loginUser.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.user.token) {
      window.location = '/#/home'
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
      <div className='cont'>
        <div id='overlay'></div>
        <div className="login-cont">
          <div className='login-txt'>Log In</div>
          <p className='loginErr'>{ this.props.auth.loginError }</p>
          <form className='loginFormContainer' onSubmit={this.loginUser}>
            <div className='email-cont'>
              <label className='label-col'>Email</label>
              <input className='input-style' name='email' type='text'/><br/>
            </div>

            <div className='pwd-cont'>
              <label className='label-col'>Password</label>
              <input className='input-style' name='password' type='password'/><br/>
            </div>
            <button type='submit' className='login-sub'>Log in</button>
          </form>
          <p className='hve-acct'>don't have an account? <Link to='/' onClick={this.props.clearFormErrors} className='signupLink'>Sign Up</Link></p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => ({ auth })
export default connect(mapStateToProps, { loginUser, clearFormErrors })(Login)