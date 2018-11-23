import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getWriters } from '../actions/writerActionCreator'
import WritersList from './WritersList'
import { Link } from 'react-router'
import '../assets/stylesheets/writer.css'
import Loader from 'react-loader-spinner'

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
        { this.props.writers.isLoadingWriter ? <span className='loading'><Loader 
            type="ThreeDots" 
            color="#121a42" 
            height="80" 
            width="80"/></span>
            : 
          <WritersList writers={writers}/>
        }
      </div>
    )
  }
}

const mapStateToProps = ({ writers }) => ({ writers })
export default connect(mapStateToProps, { getWriters })(Writers)