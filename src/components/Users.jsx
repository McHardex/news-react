import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../actions/userActionCreator'
import { Link } from 'react-router'
import '../assets/stylesheets/user.css'
import Loader from 'react-loader-spinner'
import UserList from './UserList'

class Users extends Component {
  componentDidMount() {
    this.props.getUsers()
  }
  
  render() {
    return (
      <div className="userContainer">
        <header className='homeHeader'>
          <button className='usr-title'>Users</button>
          <Link to='home'>Home</Link>
          <Link to='writers'>Writers</Link>
          <Link to='profile'>profile</Link>
        </header>
        { this.props.users.userLoading ? <span className='loading'><Loader 
            type="ThreeDots" 
            color="#121a42" 
            height="80" 
            width="80"/></span>
            : 
          <UserList usersList={this.props.users.users}/>
        }
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => ({ users })
export default connect(mapStateToProps, { getUsers })(Users)