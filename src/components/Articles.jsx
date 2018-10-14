import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getArticles, removeArticle } from '../actions/articleActionCreator'
import { logOutUser } from '../actions/authActionCreator'
import { Link } from 'react-router'
import PostArticle from './PostArticle'
import ArticleComponent from './ArticleComponent'

export class Articles extends Component {
  constructor(props) {
    super(props);

    this.state = { isInEditMode: false}

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
        {
          this.props.articles.articles.map(article => {
            return <ArticleComponent article={article} key={article._id}/>
          })
        }
      </div>
    )
  }
}

const mapStateToProps = ({ articles, auth }) => ({ articles, auth })
export default connect(mapStateToProps, { getArticles, logOutUser, removeArticle })(Articles)