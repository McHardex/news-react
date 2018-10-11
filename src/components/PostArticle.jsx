import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { signUpUser } from '../actions/authActionCreator'
import { Link } from 'react-router'

export class PostArticle extends Component {
  constructor(props) {
    super(props);
    // this.signUpUser = this.signUpUser.bind(this)
  }

  // signUpUser = (event) => {
  //   event.preventDefault()

  //   let data = {}
  //   const formData = new FormData(event.target)

  //   for (let entry of formData.entries()) {
  //     data[entry[0]] = entry[1]
  //   }

  //   this.props.signUpUser(data)

  // }
  
  render() {
    return (
      <div className="signUp">
        { this.props.auth.signUpSuccess && <p>Account successfully created</p> }
        <p>{ this.props.auth.signUpError }</p>
        <form className='' onSubmit={}>
          <div className=''>
            <label>Title</label>
            <input name='title' type='text'/><br/>
          </div>
          
          <div className='leadParagraph'>
            <label>Lead Paragraph</label>
            <input name='leadParagraph' type='text' /><br/>
          </div>

          <div className='subheading'>
            <label>Sub-Heading</label>
            <textarea name='subheading' type='text'/><br/>
          </div>

          <div className='passwordContainer'>
            <label>password</label>
            <input name='password' type='password' placeholder='enter your password'/><br/>
          </div>
          <button type='submit'>Submit Article</button>
        </form>
        
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => ({ auth })
export default connect(mapStateToProps, {  })(PostArticle)
