import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Profile from '../Profile'
import configureStore from 'redux-mock-store'


Enzyme.configure({ adapter: new Adapter()})

const initialState = {};
const mockStore = configureStore()
let store;


describe('the Profile component', () => {
  beforeEach(() => {
    store = mockStore(initialState)
  })
  it('renders without crashing', () => {
    const wrapper = shallow(<Profile store={store} />)
    expect(wrapper.exists()).toBe(true)
  })
})