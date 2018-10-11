import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getArticles } from '../actions/articleApiActionCreator'
import { logOutUser } from '../actions/authActionCreator'
import { Link } from 'react-router'

export class Articles extends Component {
  constructor(props) {
    super(props);

    this.state= { 
      articles: {},
    }
    this.logOutUser = this.logOutUser.bind(this)
  }

  logOutUser = () => {
    this.props.logOutUser()
    localStorage.removeItem('user-token');
    
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      articles: nextProps.articles.articles,
    })
    if (!nextProps.auth.user.token) window.location = '#/login' 
  }
  
  componentWillMount() {
    this.props.getArticles()
  }
  
  render() {
    return (
      <div className="articles">
      <button onClick={this.logOutUser}>log out</button>
      <Link to='article/post-article'>Create Article</Link>
        {Object.keys(this.state.articles).map((article)=> {
          const articleList = this.state.articles[article]
          const date = new Date(articleList.datePublished)
          return (
            <div className="articleBody" key={articleList._id}>
              <h2>{articleList.title}</h2>
              <p>{articleList.leadParagraph}</p>
              <h3>{articleList.subheading}</h3>
              <p>{articleList.body}</p>
              <p><span>Author: </span>{articleList.user.name}</p>
              <p><span>Date Published: </span>{date.toTimeString()}</p>
            </div>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = ({ articles, auth }) => ({ articles, auth })
export default connect(mapStateToProps, { getArticles, logOutUser })(Articles)
