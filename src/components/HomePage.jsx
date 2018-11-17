import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getArticles, removeArticle, updateArticle } from '../actions/articleActionCreator'
import { logOutUser } from '../actions/authActionCreator'
import { Link } from 'react-router'
import PostArticle from './PostArticle'
import HomePageComponent from './HomePageComponent';
import SweetAlert from 'react-bootstrap-sweetalert'


export class HomePage extends Component {
  constructor(props) {
    super(props);
    
    this.state = { toggle: null}
    this.logOutUser = this.logOutUser.bind(this)
    this.toggleAlert = this.toggleAlert.bind(this)
  }

  logOutUser = () => {
    this.props.logOutUser()
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ toggle: nextProps.articles.unauthorized })
    nextProps.articles.unauthorized = false
  }

  componentDidMount() {
    this.props.getArticles()
  }

  toggleAlert = () => {
    this.setState({ toggle: !this.state.toggle })
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
          {this.state.toggle && 
          <SweetAlert 
            danger
            title="Sorry!" 
            customClass={'unauthorized'}
            onConfirm={() => this.toggleAlert()}
            confirmBtnCssClass={'cancel'}
            closeOnClickOutside={true}>
            You are not authorized to perform this action
          </SweetAlert>}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ articles }) => ({ articles })
export default connect(mapStateToProps, { getArticles, logOutUser, removeArticle, updateArticle })(HomePage)