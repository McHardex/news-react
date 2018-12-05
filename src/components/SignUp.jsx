import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signUpUser } from '../actions/authActionCreator'
import { Link } from 'react-router'
import '../assets/stylesheets/signUp.css'
import { clearFormErrors } from '../actions/formActionCreator'
import Loader from 'react-loader-spinner'
import showPwd from '../assets/images/show-password.png'
import hidepwd from '../assets/images/hide-password.png'

export class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: false,
      mode: false
    }

    this.signUpUser = this.signUpUser.bind(this)
    this.resetForm = this.resetForm.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.togglePassword = this.togglePassword.bind(this)
  }

  resetForm = (target) => {
    target.reset()
  }

  signUpUser = (event) => {
    event.preventDefault()
    this.props.auth.signUpError = null

    let data = {}
    const target = event.target
    const formData = new FormData(target)

    for (let entry of formData.entries()) {
      data[entry[0]] = entry[1]
    }

    this.props.signUpUser(data, () => this.resetForm(target))
  }

  closeModal() {
    this.props.clearFormErrors()
    this.props.closeComponent()
  }

  togglePassword = () => {
    this.setState({
      type: !this.state.type,
      mode: !this.state.mode
    })
  }
  
  render() {
    return (
      <div className="signUp">
        <div className='signup-txt'>Sign Up</div>
        { this.props.auth.signUpSuccess && <p className='succ-msg'>Account successfully created</p> }
        <p className='err-msg'>{ this.props.auth.signUpError }</p>
        <form className='signupFormContainer' onSubmit={this.signUpUser}>
          <button className='topright' onClick={this.closeModal}>X</button>
          <div className='nameContainer'>
            <label>Name</label>
            <input className='signup-input' name='name' type='text' /><br/>
          </div>
          
          <div className='emailContainer'>
            <label>Email</label>
            <input className='signup-input transform-text' name='email' type='text'/><br/>
          </div>

          <div className='passwordContainer'>
            <label>Password</label>
            <div className='passwordToggle'> 
              <input className='signup-input' name='password' type={this.state.type ? 'text' : 'password'}/>
              <span className='togglePassword' onClick={this.togglePassword}>{this.state.mode ? <img src={hidepwd} alt='passwordHide-icon'/> : <img src={showPwd} alt='passwordShow-icon'/> }</span>
            </div><br/>
          </div>

          <div className='bioContainer'>
            <label>Bio</label>
            <textarea className='signup-input' name='bio' type='text'/><br/>
          </div>

          <button className='signup-Submit' type='submit'>{this.props.auth.isLoading ? <Loader 
            type="Bars"
            color="#fff"
            height="30"	
            width="30"/> : 'Sign Up'}
          </button>
        </form>
        <p className='hve-acc'>Already have an account? <Link to='login' className='loginLink'>Login</Link></p>
        
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => ({ auth })
export default connect(mapStateToProps, { signUpUser, clearFormErrors })(SignUp)
