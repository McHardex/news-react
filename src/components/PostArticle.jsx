import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createArticle } from '../actions/articleActionCreator'
import { clearFormErrors } from '../actions/formActionCreator'

export class PostArticle extends Component {
  constructor(props) {
    super(props);

    this.createArticle = this.createArticle.bind(this)
  }

  createArticle = (event) => {
    event.preventDefault()

    let data = {}
    const formData = new FormData(event.target)

    for (let entry of formData.entries()) {
      data[entry[0]] = entry[1]
    }
    const token = JSON.parse(localStorage.getItem('user-token'))

    this.props.createArticle(data, token) 
  }
  
  render() {
    return (
      <div className="postArticles">
        <form className='' onSubmit={this.createArticle}>
          <div className=''>
            <label>Title </label>
            <input name='title' type='text'/><br/>
          </div>
          
          <div className='subheading'>
            <label>Sub-Heading </label>
            <input name='subheading' type='text'/><br/>
          </div>

          <div className='leadParagraph'>
            <label>Lead Paragraph </label>
            <textarea name='leadParagraph' /><br/>
          </div>

          <div className='body'>
            <label>Body </label>
            <textarea name='body'/><br/>
          </div>

           <div className='imageUrl'>
            <label>Image Url </label>
            <input name='imageUrl' type='url' alt={''}/><br/>
          </div>
          <button type='submit'>Submit Article</button>
        </form>
        <p>{ this.props.articles.articlesError }</p>
        
      </div>
    )
  }
}

const mapStateToProps = ({ articles }) => ({ articles })
export default connect(mapStateToProps, { createArticle, clearFormErrors })(PostArticle)
