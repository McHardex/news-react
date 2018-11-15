import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import LandingPage from '../LandingPage'

Enzyme.configure({ adapter: new Adapter()})

describe('The landing Page Component', () => {
  it('renders component without crashing', () => {
    const wrapper = shallow(<LandingPage />)
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('div').at(0).hasClass('container')).toBe(true);
    expect(wrapper.find('div').length).toEqual(5);
    expect(wrapper.find('p').length).toEqual(4);
    expect(wrapper.find('header').exists()).toBe(true);
    expect(wrapper.find('footer').exists()).toBe(true);
  });

  it('should call openComponent handler when button is clicked', () => {
    const wrapper = shallow(<LandingPage openComponent={jest.fn()}/>)
    wrapper.instance().openComponent = jest.fn()
    wrapper.instance().forceUpdate()
    wrapper.update()
    wrapper.find('button').simulate('click')
    expect(wrapper.instance().openComponent).toHaveBeenCalled()
  })

  it('should update the state when the button is clicked', () => {
    const wrapper = shallow(<LandingPage />)
    expect(wrapper.state('isOpen')).toBe(false)
    wrapper.find('button').simulate('click')
    expect(wrapper.state('isOpen')).toBe(true)
  })
});