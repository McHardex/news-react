import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUserProfile } from '../actions/userActionCreator'
import { Link } from 'react-router'

export class Profile extends Component {
  componentWillMount() {
    this.props.getUserProfile()
  }
  
  render() {
   const profile = this.props.users.userProfile
    return (
      <div className="articles">
        <div>
          <Link to='articles'>home</Link>
          <div className='profile'>
          <h1>MY PROFILE</h1>
            <p>{profile.name}</p>
            <p>{profile.email}</p>
            <p>{profile.bio}</p>
          </div>
        </div>
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
export default connect(mapStateToProps, { getUserProfile })(Profile)