import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getArticles } from '../actions/articleApiActionCreator'

export class Articles extends Component {
  constructor(props) {
    super(props);

    this.state= { 
      articles: {},
    }
    this.logoutUser = this.logoutUser.bind(this)
  }

  logoutUser = () => {
    localStorage.removeItem('user-token');
    if (localStorage.getItem("username") === null) {
      window.location = '#/login' 
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      articles: nextProps.articles.articles,
    })
  }
  
  componentWillMount() {
    this.props.getArticles()
  }
  
  render() {
    return (
      <div className="articles">
      <button onClick={this.logoutUser}>log out</button>
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
export default connect(mapStateToProps, { getArticles })(Articles)
