import React, { Component } from 'react'
import WriterArticle from './WriterArticle'

export default class WritersList extends Component {
  render() {
    return(
      <div>
        <span className='nav-head'>Writers</span>
        {this.props.writers.map(writer => {
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