import React, { Component } from 'react'
import { connect } from 'react-redux'
import SweetAlert from 'react-bootstrap-sweetalert'


class HomePageComponent extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      edit: false, 
      isOpen: false,
      showAlert: false,
      eventState: null
    }

    this.toggleArticle = this.toggleArticle.bind(this)
    this.changeEditMode = this.changeEditMode.bind(this)
    this.submitEdit = this.submitEdit.bind(this)
    this.deleteArticle = this.deleteArticle.bind(this)
    this.showAlert = this.showAlert.bind(this)
    this.showAlert = this.showAlert.bind(this)
    this.hideAlert = this.hideAlert.bind(this)
  }

  deleteArticle = () => {
    const token = JSON.parse(localStorage.getItem('user-token'))
    this.props.removeArticle(this.state.eventState, token)
    this.setState({ showAlert: false})
  }

  showAlert = (event) => {
    this.setState(
      { 
        showAlert: true,
        eventState: event.target.id
      }
    )
  }

  hideAlert = () => {
    this.setState({ showAlert: false })
  }

  submitEdit = (event) => {
    event.preventDefault();
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
        <form className="articleForm-edit" id={article._id} onSubmit={this.submitEdit}>
          <div className='form-edit'>
            <label className='label'>Title:</label>
            <input className='input-col input-edit' name='title' type='text' defaultValue={article.title} />
          </div>

          <div className='form-edit'>
            <label className='label'>Lead Paragraph:</label>
            <textarea className='input-col' name='leadParagraph' type='text' defaultValue={article.leadParagraph} />
          </div>

          <div className='form-edit'>
            <label className='label'>Sub-Heading:</label>
            <input className='input-col input-edit' name='subheading' type='text' defaultValue={article.subheading} />
          </div> 

          <div className='form-edit'>
            <label className='label'>Body:</label>
            <textarea className='input-col' name='body' type='text' defaultValue={article.body}/>
          </div> 

          <div className='form-edit'>
            <label className='label'>Image Url:</label>
            <input className='input-col input-edit' name='imageUrl' type='text' defaultValue={article.imageUrl} />
          </div> 
          <button className='article-save-btn' id={article._id} type='submit'>Save</button>
          <button className='article-cancel-btn' onClick={this.changeEditMode}>Cancel</button>
        </form> :

        <div className="articleBody" key={article._id}>
          <h2 className='article-title'>{article.title}</h2>
          <p>{article.leadParagraph}</p>
          <h3>{article.subheading}</h3>
          <p>{article.body}</p>
          <p className='author'><span>Author: </span>{this.props.article.user? article.user.name : 'anonymous'}</p>
          <p className='date-published'><span>Date Published: </span>{date.toTimeString()}</p>

          <button className='article-delete-btn' onClick={this.showAlert} id={article._id}>Delete</button>
          <button className='article-edit-btn' onClick={this.changeEditMode}>Edit</button>
          <button className='article-close-btn' id={article._id} onClick={this.toggleArticle}>X</button>
        </div>
    )
  }

  render() {
    return (
      <div className='initialArtDisplay'>
        {
          this.state.isOpen ? 
          this.renderEditMode() : 
          <p className='art-lists-title'>{ this.props.article.title }  
            <span className='readMore' onClick={ this.toggleArticle }> read more...</span>
          </p>
        }
        {this.state.showAlert && <SweetAlert
          danger
          showCancel
          confirmBtnText="Yes, delete it!"
          confirmBtnCssClass={'delete'}
          cancelBtnCssClass={'cancel'}
          title="Are you sure you want to delete this Article?"
          onConfirm={() => this.deleteArticle()}
          onCancel={() => this.hideAlert()}
          closeOnClickOutside={true}
          customClass={'sweetAlert'}
          focusConfirmBtn={true}
        >
        You Will not be able to recover this Article
        </SweetAlert>}
      </div>
    )
  }
}

const mapStateToProps = ({ articles }) => ({ articles })
export default connect(mapStateToProps)(HomePageComponent)