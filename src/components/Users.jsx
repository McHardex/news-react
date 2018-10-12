import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../actions/userActionCreator'
import { Link } from 'react-router'

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
    return (
      <div className="articles">
        <Link to='articles'>Back</Link>
        {this.props.users.users.map((users)=> {
          return (
            <div className="usersBody" key={users._id}>
              <p>{users.name}</p>
              <p>{users.email}</p>
              <p>{users.bio}</p>
              {users.articles.length <= 0? 
              <p onClick={this.toggleDiv}>{users.articles.length} article</p>
                : 
              <p onClick={this.toggleDiv}>{users.articles.length} articles</p>}
              
              {/* {users.articles.filter(articles => articles._id (
                <div key={articles._id}>
                  {this.state.isOpen && <p>{ articles.body }</p> }
                </div>
              ))} */}
            </div>
          )
          })}
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => ({ users })
export default connect(mapStateToProps, { getUsers })(Users)
