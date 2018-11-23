import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUserProfile } from '../actions/userActionCreator'
import { Link } from 'react-router'
import '../assets/stylesheets/profile.css'
import ProfileViewProps from './ProfileViewProps'
import Loader from 'react-loader-spinner'


export class Profile extends Component {

  componentDidMount() {
    this.props.getUserProfile()
  }

  render() {
    return (
      <div className="pf-cont">
        <header className='homeHeader'>
          <button className='profile-title'>Profile</button>
          <Link to='home'>Home</Link>
          <Link to='writers'>Writers</Link>
          <Link to='users'>Users</Link>
        </header>
        { this.props.users.isLoadingProfile ? <span className='loading'><Loader 
            type="ThreeDots" 
            color="#121a42" 
            height="80" 
            width="80"/></span> :
            <ProfileViewProps />
        }
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => ({ users })
export default connect(mapStateToProps, { getUserProfile })(Profile)