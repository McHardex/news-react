import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getWriters } from '../actions/writerActionCreator'
import WriterArticle from './WriterArticle'
import { Link } from 'react-router'
import '../assets/stylesheets/writer.css'

export class Writers extends Component {
  componentDidMount() {
    this.props.getWriters()
  }

  render() {
    const writers = this.props.writers.writers
    return (
      <div className='writer-cont'>
        <header className='homeHeader'>
          <button className='writr-title'>Writers</button>
          <Link to='home'>Home</Link>
          <Link to='users'>users</Link>
          <Link to='profile'>profile</Link>
        </header>
        <span className='nav-head'>Writers</span>
        {writers.map(writer => {
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

const mapStateToProps = ({ writers }) => ({ writers })
export default connect(mapStateToProps, { getWriters })(Writers)