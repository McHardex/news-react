import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../actions/userActionCreator'
import { Link } from 'react-router'
import '../assets/stylesheets/user.css'

export class Users extends Component {
  constructor(props) {
    super(props);

    this.state= { isOpen : false }

    this.toggleDiv = this.toggleDiv.bind(this)
  }

  toggleDiv = (e) => {
    e.preventDefault()
    this.setState({ isOpen : !this.state.isOpen})
  }
  
  componentWillMount() {
    this.props.getUsers()
  }
  
  render() {
    const users = this.props.users.users
    return (
      <div className="userContainer">
      <header className='homeHeader'>
        <Link to='writers'>Writers</Link>
        <Link to='articles'>Articles</Link>
        <Link to='profile'>profile</Link>
      </header>
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