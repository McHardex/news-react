import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../actions/userActionCreator'
import { Link } from 'react-router'
import '../assets/stylesheets/user.css'

export class Users extends Component {
  componentDidMount() {
    this.props.getUsers()
  }
  
  render() {
    const users = this.props.users.users
    return (
      <div className="userContainer">
        <header className='homeHeader'>
          <button className='usr-title'>Users</button>
          <Link to='home'>Home</Link>
          <Link to='writers'>Writers</Link>
          <Link to='profile'>profile</Link>
        </header>
          <span className='nav-head'>Users</span>
          {
            users.map(user => {
              return (
                <div className='userBody' key={user._id}>
                  <div className='users'>
                    <label className='users-label'>Name: </label><span>{user.name}</span>
                  </div>
                  <div className='users'>
                    <label className='users-label'>Email: </label><span>{user.email}</span>
                  </div>
                  <div className='users'>
                    <label className='users-label'>Bio: </label><span>{user.bio}</span>
                  </div>
                </div>
              )
            })
          }
        </div>
    )
  }
}

const mapStateToProps = ({ users }) => ({ users })
export default connect(mapStateToProps, { getUsers })(Users)