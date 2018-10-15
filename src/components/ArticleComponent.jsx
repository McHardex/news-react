import React, { Component } from 'react'

export default class ArticleComponent extends Component {
  constructor(props) {
    super(props)
    this.state = { edit: false, isOpen: false }

    this.toggleArticle = this.toggleArticle.bind(this)
    this.changeEditMode = this.changeEditMode.bind(this)
    this.submitEdit = this.submitEdit.bind(this)
    this.deleteArticle = this.deleteArticle.bind(this)
  }

  deleteArticle = (event) => {
    event.preventDefault();

    const token = JSON.parse(localStorage.getItem('user-token'))
    this.props.removeArticle(event.target.id, token)
  }

  submitEdit = (event) => {
    event.preventDefault();
    this.setState({ edit: false })

    let data = {}
    const formData = new FormData(event.target)
    const token = JSON.parse(localStorage.getItem('user-token'))
    for (let entry of formData.entries()) {
      data[entry[0]] = entry[1]
    }
    this.props.updateArticle(event.target.id, data, token)
  }

  toggleArticle = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  changeEditMode = () => {
    this.setState({ edit: !this.state.edit })
  }
  
  renderEditMode() {
    const article = this.props.article
    const date = new Date(article.datePublished)
    return(
      this.state.edit ?
        <form className="articleBody" id={article._id} onSubmit={this.submitEdit}>
          title: <input name='title' type='text' defaultValue={article.title} /><br/>
          leadParagraph: <textarea name='leadParagraph' type='text' defaultValue={article.leadParagraph} /> <br/>
          subheading: <input name='subheading' type='text' defaultValue={article.subheading} /> <br/>
          body: <textarea name='body' type='text' defaultValue={article.body}/> <br/>
          imageUrl: <input name='imageUrl' type='text' defaultValue={article.imageUrl} /> <br/>
          <button id={article._id} type='submit'>Save</button>
          <button onClick={this.changeEditMode}>Cancel</button>
        </form> :
        <div className="articleBody" key={article._id}>
        <button id={article._id} onClick={this.toggleArticle}>Close</button>
          <h2>{article.title}</h2>
          <p>{article.leadParagraph}</p>
          <h3>{article.subheading}</h3>
          <p>{article.body}</p>
          <p><span>Author: </span>{article.user.name}</p>
          <p><span>Date Published: </span>{date.toTimeString()}</p>

          <button onClick={this.deleteArticle} id={article._id}>Delete</button>

          <button onClick={this.changeEditMode}>Edit</button>
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