import React, { Component } from 'react'
import '../assets/stylesheets/forgotPassword.css'
import { Link } from 'react-router'

class ForgotPassword extends Component {
  
  render() {
    return (
      <div className='forgotPwd-cont'>
        <div className='forgotPwd-holder'>
          <div className='forgotPwd-header'>
            <h3>Mchardex::</h3>
          </div>  
          <form className='forgotPwd-form' onSubmit={this.loginUser}>
            <p className='pwdforgot-ins'>Please enter your email to get a link to rest your password:</p>
            <div className='forgot-pwd'>
              <label className='forgotPwd-lab'>Email</label>
              <input className='forgotPwd-input' name='email' type='email'/>
            </div>
          </form>
          <div className='forgotPwd-foot'>
            <button type='submit' className='forgotPwd-submit'>SEND PASSWORD RESET EMAIL</button>
          </div>
        </div>
        <Link to='login'>Log in to account</Link>
      </div>
    )
  }
}


export default ForgotPassword