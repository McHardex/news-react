import React, { Component } from 'react'
import '../assets/stylesheets/resetPassword.css'
import { connect } from 'react-redux'
import { confirmReqToken , updatePassword} from '../actions/passwordRecoverActionCreator'
import { Link } from 'react-router'
import Loader from 'react-loader-spinner'



class ResetPassword extends Component {
  constructor(props) {
    super(props);

    this.updatePassword = this.updatePassword.bind(this)
  }
  
  updatePassword = (event) => {
    event.preventDefault();
    this.props.recoverPassword.passwordUpdateError = null


    let data = {}
    const formData = new FormData(event.target)

    for (let entry of formData.entries()) {
      data[entry[0]] = entry[1]
    }
    this.props.updatePassword(data, this.props.routeParams.token)
  }
  
  componentWillMount = () => {
    this.props.confirmReqToken(this.props.routeParams.token)
  }

  render() {
    return (
      <div className='resetPwd-cont'>
      {
        this.props.recoverPassword.confirmTokenError ? <p className='exp-link'>{this.props.recoverPassword.confirmTokenError}</p>
      :
        <div className='resetPwd-holder'>
          <form className='resetPwd-form' onSubmit={this.updatePassword}>
            <p className='pwdReset-ins'>Please complete the following information to reset your password:</p>
            <div className='reset-pwd'>
              <label className='resetPwd-lab'>Password:</label>
              <input className='resetPwd-input' name='password' type='password'/>
            </div>
            <div className='confirm-pwd'>
              <label className='resetPwd-lab'>Confirm Password:</label>
              <input className='resetPwd-input' name='confirmPassword' type='password'/>
            </div>
            <div className='resetPwd-foot'>
              <button type='submit' className='resetPwd-submit'>{this.props.recoverPassword.isLoading ? <Loader 
              type="Oval"
              color="#fff"
              height="15"	
              width="15"/>: 'RESET PASSWORD'}</button>
            </div>
          </form>
          <p className='loginErr'>{ this.props.recoverPassword.passwordUpdateError }</p>
          { this.props.recoverPassword.passwordUpdateSuccess && 
            <p className='pwdsucc-msg'>{ this.props.recoverPassword.passwordUpdateSuccess } 
            <Link to='login'> go to login</Link></p>
          }
        </div>
      }
      </div>
    )
  }
}


const mapStateToProps = ({ recoverPassword }) => ({ recoverPassword })
export default connect(mapStateToProps, { confirmReqToken, updatePassword })(ResetPassword)