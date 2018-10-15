import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUserProfile, updateUserProfile } from '../actions/userActionCreator'
import { Link } from 'react-router'

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false
    }
    this.toggleEdit = this.toggleEdit.bind(this)
    this.submitEdit = this.submitEdit.bind(this)
  }

  toggleEdit = () => {
    this.setState({edit: !this.state.edit})
  }

  submitEdit = (event) => {
    event.preventDefault();
    this.setState({ edit: false })
    
    let data = {}
    const token = JSON.parse(localStorage.getItem('user-token'))
    const formData = new FormData(event.target)

    for (let entry of formData.entries()) {
      data[entry[0]] = entry[1]
    }

    this.props.updateUserProfile(event.target.id, data, token)
  }

  componentWillMount() {
    this.props.getUserProfile()
  }

  render() {
    const profile = this.props.users.userProfile
    return (
      <div className="articles">
        <Link to='articles'>home</Link>
        <h1>MY PROFILE</h1>
        <button onClick={this.toggleEdit}>Edit Account</button>
        { this.state.edit ? 
          <form className='profile' onSubmit={this.submitEdit} id={profile._id}>
            Name: <input name='name' defaultValue={profile.name} /><br/>
            Email: <input name='email' defaultValue={profile.email} /><br/>
            Bio: <textarea name='bio' defaultValue={profile.bio} /><br/>
            Password: <input name='password' defaultValue={profile.password} /><br/>
            <button id={profile._id} type='submit'>save</button>
            <button onClick={this.toggleEdit}>cancel</button>
          </form> :
          <div className='profile'>
            <p>{this.props.users.updateUserError}</p>
            <p>Name: {profile.name}</p>
            <p>Email: {profile.email}</p>
            <p>Bio: {profile.bio}</p>
          </div>
        }
        <div>
          { 
            profile.articles && profile.articles.length === 0 ? 
            <div><h1>You have not written any article</h1> </div> :
            <div>
              { profile.articles && profile.articles.map(article => {
                  const date = new Date(article.datePublished)
                  return (
                    <div key={article._id}>
                      <h1>{article.title}</h1>
                      <p>{article.leadParagraph}</p>
                      <h2>{article.subheading}</h2>
                      <p>{article.body}</p>         
                      <p><span>Date Published: </span>{date.toTimeString()}</p>
                    </div>
                  )
                })
              }
            </div>
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => ({ users })
export default connect(mapStateToProps, { getUserProfile, updateUserProfile })(Profile)