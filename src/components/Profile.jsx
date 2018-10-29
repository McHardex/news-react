import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUserProfile, updateUserProfile, deleteUser } from '../actions/userActionCreator'
import { Link } from 'react-router'
import '../assets/stylesheets/profile.css'

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false
    }
    this.toggleEdit = this.toggleEdit.bind(this)
    this.submitEdit = this.submitEdit.bind(this)
    this.deleteAccount = this.deleteAccount.bind(this)
    this.logOutUser = this.logOutUser.bind(this)
  }

  logOutUser = (event) => {
    event.preventDefault()

    this.props.logOutUser()
    localStorage.removeItem('user-token');
  }

  // componentWillReceiveProps() {
  //   if (!localStorage.getItem('user-token')) window.location = '/#/login' 
  // }

  toggleEdit = () => {
    this.setState({edit: !this.state.edit})
  }

  submitEdit = (event) => {
    event.preventDefault();
    
    let data = {}
    const token = JSON.parse(localStorage.getItem('user-token'))
    const formData = new FormData(event.target)

    for (let entry of formData.entries()) {
      data[entry[0]] = entry[1]
    }

    this.props.updateUserProfile(event.target.id, data, token, () => this.toggleEdit())
    this.props.users.updateUserError = null
  }

  deleteAccount = (event) => {
    event.preventDefault();

    const token = JSON.parse(localStorage.getItem('user-token'))
    this.props.deleteUser(event.target.id, token)
    localStorage.removeItem('user-token');
  }

  componentWillReceiveProps() {
    if (!localStorage.getItem('user-token')) window.location = '/#/' 
  }

  componentWillMount() {
    this.props.getUserProfile()
  }


  render() {
    const profile = this.props.users.userProfile
    return (
      <div className="articles">
        <header className='homeHeader'>
        <Link to='writers'>Writers</Link>
        <Link to='articles'>Articles</Link>
        <Link to='profile'>Users</Link>
      </header>
        <h1 className='profile'>MY PROFILE</h1>
        <div className='pf-btn'>
          <button className='btn' onClick={this.logOutUser}>log out</button>
          <button className='btn' onClick={this.toggleEdit}>Edit Profile</button>
          <button className='btn' id={profile._id} onClick={ this.deleteAccount }>Delete Account</button>
        </div>

        <span className='edit-err'>{this.props.users.updateUserError}</span>
        { this.state.edit ? 
          <form className='profileFormEdit' onSubmit={this.submitEdit} id={profile._id}>
            <div className='form-edit'>
              <label className='label'>Name:</label>
              <input className='input-col' name='name' defaultValue={profile.name} />
            </div>
            <div className='form-edit'>
              <label className='label'>Email:</label>
              <input className='input-col' name='email' defaultValue={profile.email} />
            </div>
            <div className='form-edit'>
              <label className='label'>Bio:</label>
              <textarea className='input-col' name='bio' defaultValue={profile.bio} />
            </div>
            <div className='form-edit'>
              <label className='label'>Password:</label>
              <input className='input-col' name='password' />
            </div>
            <button id={profile._id} type='submit'>save</button>
            <button onClick={this.toggleEdit}>cancel</button>
          </form> :
          <div className='profileBody' key={profile._id}>
            <div className='profiles-div'>
              <label className='profiles-label'>Name: </label><span>{profile.name}</span>
            </div>
            <div className='profiles-div'>
              <label className='profiles-label'>Email: </label><span>{profile.email}</span>
            </div>
            <div className='profiles-div'>
              <label className='profiles-label'>Bio: </label><span>{profile.bio}</span>
            </div>
          </div>
        }
        <div>
        <h1 className='articlesHeader'>MY ARTICLES</h1>
          { 
            profile.articles && profile.articles.length === 0 ? 
            <div><h1 className='no-art'>You have not written any article</h1> </div> :
            <div>
              { profile.articles && profile.articles.map(article => {
                  const date = new Date(article.datePublished)
                  return (
                    <div className="profileArtBody" key={article._id}>
                      <h2>{article.title}</h2>
                      <p>{article.leadParagraph}</p>
                      <h3>{article.subheading}</h3>
                      <p>{article.body}</p>
                      <p className='date-published'><span>Time Published: </span>{date.toTimeString()}</p>
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
export default connect(mapStateToProps, { getUserProfile, updateUserProfile, deleteUser })(Profile)