import React, { Component } from 'react'
import Loader from 'react-loader-spinner'
import { updateUserProfile, deleteUser } from '../actions/userActionCreator'
import { connect } from 'react-redux'



class ProfileViewProps extends Component {
  constructor(props) {
    super(props);

    this.submitEdit = this.submitEdit.bind(this)
    this.deleteAccount = this.deleteAccount.bind(this)
  }


  submitEdit = (event) => {
    event.preventDefault();
    
    this.props.users.updateUserError = null
    let data = {}
    const token = JSON.parse(localStorage.getItem('user-token'))
    const formData = new FormData(event.target)

    for (let entry of formData.entries()) {
      data[entry[0]] = entry[1]
    }

    this.props.updateUserProfile(event.target.id, data, token, () => this.props.toggleEdit())
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

  render() {
    const profile = this.props.profile
    return (
      <div>
        <span className='nav-head'>My Profile</span>
        <div className='pf-btn'>
          <button className='edit-btn' onClick={this.props.toggleEdit}>Edit Profile</button>
          <button className='delete-btn' id={profile._id} onClick={ this.deleteAccount }>Delete Account</button>
        </div>
        { this.props.edit ? 
          <form className='profileFormEdit' onSubmit={this.submitEdit} id={profile._id}>
            <div className='form-edit'>
              <label className='prof-label'>Name:</label>
              <input className='input-col' name='name' defaultValue={profile.name} type='text'/>
            </div>
            <div className='form-edit'>
              <label className='prof-label'>Email:</label>
              <input className='input-col' name='email' defaultValue={profile.email} type='text'/>
            </div>
            <div className='form-edit'>
              <label className='prof-label'>Bio:</label>
              <textarea className='input-col' name='bio' defaultValue={profile.bio} type='text'/>
            </div>
            <div className='btn-wrap'>
              <button className='save-btn' type='submit'>{ this.props.users.isLoadingProfileEdit ? <Loader 
                type="Bars" 
                color="#121a42" 
                height="20" 
                width="20"/>: 'save'}</button>
              <button className='cancel-btn' onClick={this.props.toggleEdit}>cancel</button>
            </div>
              <p className='edit-err'>{this.props.users.updateUserError}</p>
          </form> :
          <div className='profileBody' key={profile._id + 1}>
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
export default connect(mapStateToProps, { updateUserProfile, deleteUser })(ProfileViewProps)