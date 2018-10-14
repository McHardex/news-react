import React, { Component } from 'react'

export default class ArticleComponent extends Component {
  constructor(props) {
    super(props)
    this.state = { edit: false, isOpen: false }

    this.toggleArticle = this.toggleArticle.bind(this)
    this.changeEditMode = this.changeEditMode.bind(this)
    this.submitEdit = this.submitEdit.bind(this)
  }

  submitEdit = (event) => {
    console.log(event)
  }

  toggleArticle = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  changeEditMode = (id) => {
    this.setState({ edit: !this.state.edit })
    console.log('should go to edit mode now')
  }
  
  renderEditMode() {
    const article = this.props.article
    const date = new Date(article.datePublished)
    return(
      this.state.edit ?
        <div className="articleBody" key={article._id}>
          <input type='text' defaultValue={article.title} /> <br/>
          <textarea type='text' defaultValue={article.leadParagraph} /> <br/>
          <input type='text' defaultValue={article.subheading} /> <br/>
          <textarea type='text' defaultValue={article.body}/> <br/>
          <button onClick={this.submitEdit}>Save</button>
          <button onClick={this.changeEditMode}>Cancel</button>
          <button onClick={this.toggleArticle}>Close</button>
        </div> :
        <div className="articleBody" key={article._id}>
          <h2>{article.title}</h2>
          <p>{article.leadParagraph}</p>
          <h3>{article.subheading}</h3>
          <p>{article.body}</p>
          <p><span>Author: </span>{article.user.name}</p>
          <p><span>Date Published: </span>{date.toTimeString()}</p>
          <button onClick={this.deleteArticle} id={article._id}>Delete</button>

          <button id={article._id} onClick={this.changeEditMode}>Edit</button>
          <button id={article._id} onClick={this.toggleArticle}>Close</button>
        </div>
    )
  }

  render() {
    return (
      <div>
        {
          this.state.isOpen ? 
          this.renderEditMode() : 
          <p>{ this.props.article.title }  
            <button onClick={ this.toggleArticle }>Read more...</button>
          </p>
        }
      </div>
    )
  }
}