import React, { Component } from 'react'
import WriterArticle from './WriterArticle'

export default class WritersList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchValue: '',
      currentlyDisplayed: this.props.writers
    }

    this.onChange = this.onChange.bind(this)
  }

  onChange = (event) => {
    let searchContent = event.target.value.toLowerCase()
    let newlyDisplayed = this.props.writers.filter(writer => {
      return (
        writer.name.includes(searchContent) ||
        writer.email.includes(searchContent)
      )
    })
    this.setState({ 
      searchValue: event.target.value,
      currentlyDisplayed: newlyDisplayed
    })
  }

  render() {
    return(
      <div>
        <div className='searchCont'>
          <span className='nav-head'>Writers</span>
            <div className="search">
              <div>
                <input type="search" placeholder="Search . . ." className='search-input' onChange={this.onChange} required />
              </div>
            </div>
        </div>
        {this.state.currentlyDisplayed.map(writer => {
          return (
          <div className='writerBody' key={writer._id}>
            <div className='writers'>
              <label className='writer-label'>Name: </label><span>{writer.name}</span>
            </div>
            <div className='writers'>
              <label className='writer-label'>Email: </label><span>{writer.email}</span>
            </div>
            <div className='writers'>
              <label className='writer-label'>Bio: </label><span>{writer.bio}</span>
            </div>
            <WriterArticle articles={writer.articles} />
          </div>
        )})}
      </div>
    )
  }
}