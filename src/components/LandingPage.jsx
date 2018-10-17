import React, { Component } from 'react'
import '../assets/stylesheets/landingPage.css'
import {Link} from 'react-router'

export class LandingPage extends Component {
  render() {
    return (
      <div className='container'>
        <header>
          <div className='logo'>Mchardex::</div>
          <div className='getstarted'>get started <Link to='login' className='loginLink'>log in</Link></div>
        </header>
        <div className='section1'>
          <div className='sectionContent'>
            <p className='move'>Move Work Forward</p>
            <p className='create'>create as many articles as you can</p>
            <p className='create'>become a writer</p>
            <p className='move'>get new exiciting features</p>
            <button className='create-acc'>create an account now</button>
          </div>
        </div>
        <footer>
          <span className='footerText'>become the face of <span className='logo'> Mchardex:: </span> by writing exciting articles</span>
        </footer>
      </div>
    )
  }
}