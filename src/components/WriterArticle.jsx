import React, { Component } from 'react'

export default class WriterArticle extends Component {
  constructor(props) {
    super(props)
    this.state= { isOpen : false }

    this.toggleArticle = this.toggleArticle.bind(this)
    this.showUserArticle = this.showUserArticle.bind(this)
  }

  toggleArticle = (e) => {
    e.preventDefault()
    this.setState({ isOpen : !this.state.isOpen})
  }
  
  showUserArticle() {
    return(
      this.props.articles.map(article => 
      <div key={article._id}>
        <h2 className='title-click'>{article.title}</h2>
      </div>)
    )
  }

  render() {
    return (
      <div>
        { 
          this.props.articles.length === 1 ? 
          <p className='art-count' onClick={this.toggleArticle}><button>{this.props.articles.length}</button> article</p> : 
          <p className='art-count' onClick={this.toggleArticle}><button>{this.props.articles.length}</button> articles</p> 
        }
        { this.state.isOpen && this.showUserArticle() }
      </div>
    )
  }
}