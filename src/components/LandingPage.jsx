import React, { Component } from 'react'
import '../assets/stylesheets/landingPage.css'
import {Link} from 'react-router'
import SignUp from '../components/SignUp'

export class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false }

    this.openComponent = this.openComponent.bind(this)
    this.closeComponent = this.closeComponent.bind(this)
  }

  openComponent = (event) => {
    event.preventDefault();

    this.setState({ isOpen: true})
  }

  closeComponent = () => {
    this.setState({ isOpen: false})
  }

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
            <button className='create-acc' onClick={this.openComponent}>create an account now</button>
          </div>
        </div>
        {this.state.isOpen && <SignUp closeComponent={this.closeComponent} /> }
        <footer>
          <span className='footerText'>become the face of <span className='foot-logo'> Mchardex:: </span> by writing exciting articles</span>
        </footer>
      </div>
    )
  }
}

export default LandingPage