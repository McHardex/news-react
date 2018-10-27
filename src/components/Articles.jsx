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

    this.state = { isInEditMode: false }
  }
  
  componentWillMount() {
    this.props.getArticles()
  }
  render() {
    return (
      <div className="articles">
        <header className='homeHeader'>
          <Link to='users'>users</Link>
          <Link to='writers'>writers</Link>
          <Link to='profile'>profile</Link>
        </header>
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