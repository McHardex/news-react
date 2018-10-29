import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getArticles, removeArticle, updateArticle } from '../actions/articleActionCreator'
import { logOutUser } from '../actions/authActionCreator'
import { Link } from 'react-router'
import PostArticle from './PostArticle'
import HomePageComponent from './HomePageComponent';


export class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = { isInEditMode: false }
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

  componentWillMount() {
    this.props.getArticles()
  }

  render() {
    return (
      <div className="articles">
        <header className='homeHeader'>
          <button className='home-title'>Home</button>
          <Link to='users'>users</Link>
          <Link to='writers'>writers</Link>
          <Link to='profile'>profile</Link>
          <button className='logout' onClick={this.logOutUser}>log out</button>
        </header>
        <div className='cont-art'>
          <div className='nav-head'>Post Article </div>
          <PostArticle/>
          {
            this.props.articles.articles.map(article => {
              return <HomePageComponent article={article} key={article._id} 
              updateArticle={this.props.updateArticle} removeArticle={this.props.removeArticle}/>
            })
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ articles, auth }) => ({ articles, auth })
export default connect(mapStateToProps, { getArticles, logOutUser, removeArticle, updateArticle })(HomePage)