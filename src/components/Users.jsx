import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../actions/userActionCreator'
import { Link } from 'react-router'
import UserArticle from './UserArticle'

export class Users extends Component {
  constructor(props) {
    super(props);

    this.state= { isOpen : false }

    this.toggleDiv = this.toggleDiv.bind(this)
    // this.showUserArticles = this.showUserArticles.bind(this)
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
      <div className="users">
      <Link to='articles'>Articles</Link>
        {
          users.map(user => {
            return (
              <div key={user._id}>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>{user.bio}</p>
                <UserArticle articles={user.articles} />
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