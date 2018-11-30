import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../actions/authActionCreator'
import { clearFormErrors } from '../actions/formActionCreator'
import { Link } from 'react-router'
import '../assets/stylesheets/login.css'
import Loader from 'react-loader-spinner'
import showPwd from '../assets/images/show-password.png'
import hidepwd from '../assets/images/hide-password.png'

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: false,
      mode: false
    }

    this.loginUser = this.loginUser.bind(this)
    this.togglePassword = this.togglePassword.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.user.token) {
      window.location.hash = 'home'
    }
  }

  loginUser = (event) => {
    event.preventDefault()

    this.props.auth.loginError = null

    let data = {}
    const formData = new FormData(event.target)

    for (let entry of formData.entries()) {
      data[entry[0]] = entry[1]
    }
    this.props.loginUser(data)
  }

  togglePassword = () => {
    this.setState({
      type: !this.state.type,
      mode: !this.state.mode
    })
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
              <input className='login-input' name='email' type='text'/><br/>
            </div>

            <div className='pwd-cont'>
              <label className='label-col'>Password</label>
              <div className='passwordToggle'> 
                <input className='login-input' name='password' type={this.state.type ? 'text' : 'password'}/>
                <span className='togglePassword' onClick={this.togglePassword}>{this.state.mode ? <img src={hidepwd} alt='passwordHide-icon'/> : <img src={showPwd} alt='passwordShow-icon'/> }</span>
              </div><br/>
            </div>
            <button type='submit' className='login-sub'>{this.props.auth.isLoading ? <Loader 
              type="Bars"
              color="#fff"
              height="30"	
              width="30"/> : 'Log In'}
            </button>
          </form>
          <p className='hve-acct'>don't have an account? <Link to='/' onClick={this.props.clearFormErrors} className='signupLink'>Sign Up</Link></p>
          <Link to='forgot-password' className='forg-pwd'>forgot password?</Link>
        </div>
      </div>
    )
  }
}


const mapStateToProps = ({ auth }) => ({ auth })
export default connect(mapStateToProps, { loginUser, clearFormErrors })(Login)