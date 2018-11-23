import React, { Component } from 'react'

class UserList extends Component {
  render() {
    return(
      <div>
        <span className='nav-head'>Users</span>
        { 
          this.props.usersList.map(user => {
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

export default UserList