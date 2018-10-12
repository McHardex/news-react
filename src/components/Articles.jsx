import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getArticles, removeArticle } from '../actions/articleActionCreator'
import { logOutUser } from '../actions/authActionCreator'
// import { Link } from 'react-router'
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

    const result = window.confirm('Are you sure you want to delete this contact?');
    if (result) {
      const token = JSON.parse(localStorage.getItem('user-token'))
      this.props.removeArticle(event.target.id, token)
    }
  }

  componentWillReceiveProps() {
    if (!localStorage.getItem('user-token')) window.location = '/#/login' 
  }
  
  componentDidMount() {
    this.props.getArticles()
  }
  
  render() {
    // console.log(this.props.auth.deleteArticleError)
    return (
      <div className="articles">
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

              { this.props.auth.unauthorized && alert('You are not authorized to perform this action') }

              <button id={articles._id}>Edit</button>
              {/* <img src={articles.imageUrl} alt={articles.title}/> */}
            </div>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = ({ articles, auth }) => ({ articles, auth })
export default connect(mapStateToProps, { getArticles, logOutUser, removeArticle })(Articles)
