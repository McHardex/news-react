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
        <h2>{article.title}</h2>
        <p>{article.leadParagraph}</p>
        <h3>{article.subheading}</h3>
        <p>{article.body}</p>
        <p><span>Date Published: </span>{new Date(article.datePublished).toTimeString()}</p>
      </div>)
    )
  }

  render() {
    return (
      <div>
        { this.props.articles.length === 1 ? 
        <p onClick={this.toggleArticle}>{this.props.articles.length} article</p> : 
        <p onClick={this.toggleArticle}>{this.props.articles.length} articles</p> }
        {this.state.isOpen && this.showUserArticle()}
      </div>
    )
  }
}