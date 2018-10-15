import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getArticles, removeArticle, updateArticle } from '../actions/articleActionCreator'
import { logOutUser } from '../actions/authActionCreator'
import { Link } from 'react-router'
import PostArticle from './PostArticle'
import ArticleComponent from './ArticleComponent'

export class Articles extends Component {
  constructor(props) {
    super(props);

    this.state = { isInEditMode: false}

    this.logOutUser = this.logOutUser.bind(this)
  }

  logOutUser = (event) => {
    event.preventDefault()

    this.props.logOutUser()
    localStorage.removeItem('user-token');
  }

  componentWillReceiveProps() {
    if (!localStorage.getItem('user-token')) window.location = '/#/login' 
  }
  
  componentDidMount() {
    this.props.getArticles()
  }

  
  render() {
    // if(this.props.auth.unauthorized && this.props.articles.unauthorized){
    //   alert('you are not authorized to perform this action')
    // }
    return (
      <div className="articles">
        <div>
          <Link to='users'>view users</Link>
          <Link to='writers'>view writers</Link>
          <Link to='profile'>my profile</Link>
        </div>
        <button onClick={this.logOutUser}>log out</button>
        <PostArticle/>
        {
          this.props.articles.articles.map(article => {
            return <ArticleComponent article={article} key={article._id} 
            updateArticle={this.props.updateArticle} removeArticle={this.props.removeArticle}/>
          })
        }
      </div>
    )
  }
}

const mapStateToProps = ({ articles, auth }) => ({ articles, auth })
export default connect(mapStateToProps, { getArticles, logOutUser, removeArticle, updateArticle })(Articles)