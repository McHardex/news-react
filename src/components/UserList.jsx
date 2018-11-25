import React, { Component } from 'react'

class UserList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchValue: '',
      currentlyDisplayed: this.props.usersList
    }

    this.onChange = this.onChange.bind(this)
  }

  onChange = (event) => {
    let searchContent = event.target.value.toLowerCase()
    let newlyDisplayed = this.props.usersList.filter(user => {
      return (
        user.name.includes(searchContent) ||
        user.email.includes(searchContent)
      )
    })
    this.setState({ 
      searchValue: event.target.value,
      currentlyDisplayed: newlyDisplayed
    })
  }

  render() {
    return(
      <div>
        <div className='searchCont'>
          <span className='nav-head'>Users</span>
            <div className="search">
              <div>
                <input type="search" placeholder="Search . . ." className='search-input' onChange={this.onChange} required />
              </div>
            </div>
        </div>
        { 
          this.state.currentlyDisplayed.map(user => {
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