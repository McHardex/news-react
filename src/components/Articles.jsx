import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getArticles, removeArticle } from '../actions/articleActionCreator'
import { logOutUser } from '../actions/authActionCreator'
import { Link } from 'react-router'
import PostArticle from './PostArticle'

export class Articles extends Component {
  constructor(props) {
    super(props);

    this.logOutUser = this.logOutUser.bind(this)
    this.deleteArticle = this.deleteArticle.bind(this)
  }

  logOutUser = (event) => {
    event.preventDefault()

    this.props.logOutUser()
    localStorage.removeItem('user-token');
  }

  deleteArticle = (event) => {
    event.preventDefault();

      const token = JSON.parse(localStorage.getItem('user-token'))
      this.props.removeArticle(event.target.id, token)
  }

  componentWillReceiveProps() {
    if (!localStorage.getItem('user-token')) window.location = '/#/login' 
  }
  
  componentDidMount() {
    this.props.getArticles()
  }
  
  render() {
    if(this.props.auth.unauthorized && this.props.articles.unauthorized){
      alert('you are not authorized to perform this action')
    }
    return (
      <div className="articles">
      <div>
        <Link to='users'>view users</Link>
        <Link to='writers'>view writers</Link>
      </div>
        <button onClick={this.logOutUser}>log out</button>
        <PostArticle/>
        {this.props.articles.articles.map(articles => {
          const date = new Date(articles.datePublished)
          return (
            <div className="articleBody" key={articles._id}>
              <h2>{articles.title}</h2>
              <p>{articles.leadParagraph}</p>
              <h3>{articles.subheading}</h3>
              <p>{articles.body}</p>
              <p><span>Author: </span>{articles.user.name}</p>
              <p><span>Date Published: </span>{date.toTimeString()}</p>
              <button onClick={this.deleteArticle} id={articles._id}>Delete</button>

              <button id={articles._id}>Edit</button>
            </div>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = ({ articles, auth }) => ({ articles, auth })
export default connect(mapStateToProps, { getArticles, logOutUser, removeArticle })(Articles)