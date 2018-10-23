import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createArticle } from '../actions/articleActionCreator'
import { clearFormErrors } from '../actions/formActionCreator'
import '../assets/stylesheets/homepage.css'


export class PostArticle extends Component {
  constructor(props) {
    super(props);

    this.createArticle = this.createArticle.bind(this)
    this.resetForm = this.resetForm.bind(this)
  }

  resetForm = (target) => { 
    target.reset()
  }
  
  createArticle = (event) => {
    event.preventDefault()
    
    const target = event.target
    let data = {}
    const formData = new FormData(target)
    const token = JSON.parse(localStorage.getItem('user-token'))

    for (let entry of formData.entries()) {
      data[entry[0]] = entry[1]
    }

    this.props.createArticle(data, token, () => this.resetForm(target)) 
  }

  
  render() {
    return (
      <div className="postArticles">
        <form className='pst-article' onSubmit={this.createArticle}>
          <div className='pst-art-title'>
            <label className='titleLb'>Title: </label>
            <input className='title' name='title'/><br/>
          </div>
          
          <div className='pst-art-subheading'>
            <label className='subhLb'>Sub-Heading: </label>
            <input className='subheading' name='subheading'/><br/>
          </div>

          <div className='pst-art-lparag'>
            <label className='paragLb'>Lead Paragraph: </label>
            <textarea className='leadParagraph' name='leadParagraph' /><br/>
          </div>

          <div className='pst-art-body'>
            <label className='bodyLb'>Body: </label>
            <textarea className='body' name='body'/><br/>
          </div>

           <div className='pst-art-imgUrl'>
            <label className='imgLb'>Image Url: </label>
            <input name='imageUrl' className='img-url'/><br/>
          </div>
          <button className='sub-art' type='submit'>Submit Article</button>
        </form>
        <p className='err-msg'>{ this.props.articles.articlesError }</p>
        
      </div>
    )
  }
}

const mapStateToProps = ({ articles }) => ({ articles })
export default connect(mapStateToProps, { createArticle, clearFormErrors })(PostArticle)
