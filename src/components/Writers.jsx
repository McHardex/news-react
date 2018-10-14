import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getWriters } from '../actions/writerActionCreator'
import WriterArticle from './WriterArticle'
import { Link } from 'react-router'

export class Writers extends Component {
  
  componentWillMount() {
    this.props.getWriters()
  }

  render() {
    const writers = this.props.writers.writers
    return (
      <div className="users">
      <Link to='articles'>Articles</Link>
      <Link to='users'>Users</Link>
      {writers.map(writer => {
        return (<div key={writer._id}>
          <p>{writer.name}</p>
          <p>{writer.email}</p>
          <p>{writer.bio}</p>
          <WriterArticle articles={writer.articles} />
        </div>
      )})}
      </div>
    )
  }
}

const mapStateToProps = ({ writers }) => ({ writers })
export default connect(mapStateToProps, { getWriters })(Writers)