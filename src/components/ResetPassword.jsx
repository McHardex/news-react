import React, { Component } from 'react'
import '../assets/stylesheets/resetPassword.css'


class ResetPassword extends Component {
  
  render() {
    return (
      <div className='resetPwd-cont'>
        <div className='resetPwd-holder'>
          <div className='resetPwd-header'>
            <h3>Mchardex::</h3>
          </div>  
          <form className='resetPwd-form' onSubmit={this.loginUser}>
            <p className='pwdReset-ins'>Please complete the following information to reset your password:</p>
            <div className='reset-pwd'>
              <label className='resetPwd-lab'>Password</label>
              <input className='resetPwd-input' name='password' type='password'/>
            </div>
            <div className='confirm-pwd'>
              <label className='resetPwd-lab'>Confirm Password</label>
              <input className='resetPwd-input' name='password' type='password'/>
            </div>
          </form>
          <div className='resetPwd-foot'>
            <button type='submit' className='resetPwd-submit'>RESET PASSWORD</button>
          </div>
        </div>
      </div>
    )
  }
}


export default ResetPassword