import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUserProfile } from '../actions/userActionCreator'
import { Link } from 'react-router'

export class Profile extends Component {
  componentDidMount() {
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
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => ({ users })
export default connect(mapStateToProps, { getUserProfile })(Profile)