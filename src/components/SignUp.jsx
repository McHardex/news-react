import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signUpUser } from '../actions/authActionCreator'
import { Link } from 'react-router'
import '../assets/stylesheets/signUp.css'
import { clearFormErrors } from '../actions/formActionCreator'

export class SignUp extends Component {
  constructor(props) {
    super(props);

    this.signUpUser = this.signUpUser.bind(this)
    this.resetForm = this.resetForm.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  resetForm = (target) => {
    target.reset()
  }

  signUpUser = (event) => {
    event.preventDefault()

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
  
  render() {
    return (
      <div className="signUp">
        <div className='signup-txt'>Sign Up</div>
        { this.props.auth.signUpSuccess && <p className='succ-msg'>Account successfully created √</p> }
        <p className='err-msg'>{ this.props.auth.signUpError }</p>
        <form className='signupFormContainer' onSubmit={this.signUpUser}>
          <button className='topright' onClick={this.closeModal}>X</button>
          <div className='nameContainer'>
            <label>Name</label>
            <input name='name' type='text' /><br/>
          </div>
          
          <div className='emailContainer'>
            <label>Email</label>
            <input name='email' type='text'/><br/>
          </div>

          <div className='passwordContainer'>
            <label>Password</label>
            <input name='password' type='password' /><br/>
          </div>

          <div className='bioContainer'>
            <label>Bio</label>
            <textarea name='bio' type='text'/><br/>
          </div>

          <button className='signup-Submit' type='submit'>Sign Up</button>
        </form>
        <p className='hve-acc'>Already have an account? <Link to='login' className='loginLink'>Log in</Link></p>
        
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => ({ auth })
export default connect(mapStateToProps, { signUpUser, clearFormErrors })(SignUp)
