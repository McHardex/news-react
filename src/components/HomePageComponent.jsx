import React, { Component } from 'react'
import { connect } from 'react-redux'

class HomePageComponent extends Component {
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
    const result = window.confirm("Want to delete?");
    if (result) {
      if(this.props.articles.deleteArticleError === 'Unauthorized') {
        alert('You are not authorized to perform this action')
      } else {
        const token = JSON.parse(localStorage.getItem('user-token'))
        this.props.removeArticle(event.target.id, token)
      }
    }
  }

  submitEdit = (event) => {
    event.preventDefault();
    if(this.props.articles.updateArticleError === 'Unauthorized') {
      alert('You are not authorized to perform this action')
    } else {
      let data = {}
      const formData = new FormData(event.target)
      const token = JSON.parse(localStorage.getItem('user-token'))
      for (let entry of formData.entries()) {
        data[entry[0]] = entry[1]
      }
      this.props.updateArticle(event.target.id, data, token)
    }
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
          <div className='form-edit'>
            <label className='label'>Title:</label>
            <input className='input-col' name='title' type='text' defaultValue={article.title} />
          </div>

          <div className='form-edit'>
            <label className='label'>Lead Paragraph:</label>
            <textarea className='input-col' name='leadParagraph' type='text' defaultValue={article.leadParagraph} />
          </div>

          <div className='form-edit'>
            <label className='label'>Sub-Heading:</label>
            <input className='input-col' name='subheading' type='text' defaultValue={article.subheading} />
          </div> 

          <div className='form-edit'>
            <label className='label'>Body:</label>
            <textarea className='input-col' name='body' type='text' defaultValue={article.body}/>
          </div> 

          <div className='form-edit'>
            <label className='label'>Image Url:</label>
            <input className='input-col' name='imageUrl' type='text' defaultValue={article.imageUrl} />
          </div> 
          <button id={article._id} type='submit'>Save</button>
          <button onClick={this.changeEditMode}>Cancel</button>
        </form> :

        <div className="articleBody" key={article._id}>
          <h2>{article.title}</h2>
          <p>{article.leadParagraph}</p>
          <h3>{article.subheading}</h3>
          <p>{article.body}</p>
          <p className='author'><span>Author: </span>{article.user.name || 'Anonymous'}</p>
          <p className='date-published'><span>Date Published: </span>{date.toTimeString()}</p>

          <button onClick={this.deleteArticle} id={article._id}>Delete</button>
          <button onClick={this.changeEditMode}>Edit</button>
          <button id={article._id} onClick={this.toggleArticle}>Close</button>
        </div>
    )
  }

  render() {
    return (
      <div className='initialArtDisplay'>
        {
          this.state.isOpen ? 
          this.renderEditMode() : 
          <li className='title'>{ this.props.article.title }  
            <button className='readMore' onClick={ this.toggleArticle }>read more...</button>
          </li>
        }
      </div>
    )
  }
}

const mapStateToProps = ({ articles }) => ({ articles })
export default connect(mapStateToProps)(HomePageComponent)