import React, { Component } from 'react'
import '../assets/stylesheets/forgotPassword.css'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { forgotPassword } from '../actions/passwordRecoverActionCreator'
import Loader from 'react-loader-spinner'


class ForgotPassword extends Component {
  constructor(props) {
    super(props);

    this.resetForm = this.resetForm.bind(this)
    this.submitRecoveryEmail = this.submitRecoveryEmail.bind(this)
  }

  resetForm = (target) => {
    target.reset()
  }

  submitRecoveryEmail = (event) => {
    event.preventDefault();
    this.props.recoverPassword.showInputError = null
    this.props.recoverPassword.successMessageFromServer = null
    this.props.recoverPassword.errorMessageFromServer = null

    let data = {}
    const target = event.target;
    const formData = new FormData(target)

    for (let entry of formData.entries()) {
      data[entry[0]] = entry[1]
    }
    this.props.forgotPassword(data, () => this.resetForm(target))
  }

  componentWillUnmount() {
    this.props.recoverPassword.showInputError = null
    this.props.recoverPassword.successMessageFromServer = null
    this.props.recoverPassword.errorMessageFromServer = null
  }

  render() {
    return (
      <div className='forgotPwd-cont'>
        <div className='forgotPwd-holder'>
          <div className='forgotPwd-header'>
            <h3>Mchardex::</h3>
          </div>  
          <form className='forgotPwd-form' onSubmit={this.submitRecoveryEmail}>
            <p className='pwdforgot-ins'>Please enter your email to get a link to rest your password:</p>
            <div className='forgot-pwd'>
              <label className='forgotPwd-lab'>Email</label>
              <input className='forgotPwd-input' name='email' type='email'/>
              <span className='pwdRest-inputError'>{this.props.recoverPassword.showInputError}</span>
            </div>
            <div className='forgotPwd-foot'>
              <button type='submit' className='forgotPwd-submit'>{this.props.recoverPassword.isLoading ? <Loader 
              type="Oval"
              color="#fff"
              height="15"	
              width="15"/> : 'SEND PASSWORD RESET EMAIL'}</button>
            </div>
            {this.props.recoverPassword.successMessageFromServer && <p className='pwdsucc-msg'>{this.props.recoverPassword.successMessageFromServer}</p>}
            <Link to='/' className='loginAcc'>create an account</Link>
          </form>
          {this.props.recoverPassword.errorMessageFromServer && <span className='pwdRest-Error'>That email address isn't recognized. Please try again
            or register for a new account.
          </span>}
        </div>
      </div>
    )
  }
}


const mapStateToProps = ({ recoverPassword }) => ({ recoverPassword })
export default connect(mapStateToProps, { forgotPassword })(ForgotPassword)