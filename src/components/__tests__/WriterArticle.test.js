import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import WriterArticle from '../WriterArticle'
import configureStore from 'redux-mock-store'


Enzyme.configure({ adapter: new Adapter()})

const props = {
  articles: {
    title: "abcdef"
  }
}

describe('The landing Page Component', () => {
  it('renders component without crashing', () => {
    const wrapper = shallow(<WriterArticle {...props}/>)
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('p').length).toEqual(1)
  });

  it('should call toggleArticle when the p element is clicked', () => {
    const wrapper = shallow(<WriterArticle  {...props} toggleArticle={jest.fn()}/>)
    wrapper.instance().toggleArticle = jest.fn()
    wrapper.instance().forceUpdate()
    wrapper.update()
    wrapper.find('p').simulate('click')
    expect(wrapper.instance().toggleArticle).toHaveBeenCalled()
  })
});