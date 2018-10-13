import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signUpUser } from '../actions/authActionCreator'
import { Link } from 'react-router'

export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.signUpUser = this.signUpUser.bind(this)
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
  
  render() {
    return (
      <div className="signUp">
        { this.props.auth.signUpSuccess && <p>Account successfully created</p> }
        <p>{ this.props.auth.signUpError }</p>
        <form className='signupFormContainer' onSubmit={this.signUpUser}>
          <div className='nameContainer'>
            <label>Name</label>
            <input name='name' type='text' placeholder='enter fullname'/><br/>
          </div>
          
          <div className='emailContainer'>
            <label>email</label>
            <input name='email' type='text' placeholder='email'/><br/>
          </div>

          <div className='bioContainer'>
            <label>Bio</label>
            <textarea name='bio' placeholder='tell us about you' type='text'/><br/>
          </div>

          <div className='passwordContainer'>
            <label>password</label>
            <input name='password' type='password' placeholder='enter your password'/><br/>
          </div>
          <button type='submit'>Sign Up</button>
        </form>
        <p>Already have an account? <Link to='login'>Log in</Link></p>
        
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => ({ auth })
export default connect(mapStateToProps, { signUpUser })(SignUp)
