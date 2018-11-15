import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Writers from '../Writers'
import configureStore from 'redux-mock-store'


Enzyme.configure({ adapter: new Adapter()})

const initialState = {};
const mockStore = configureStore()
let store;


describe('the writers component', () => {
  beforeEach(() => {
    store = mockStore(initialState)
  })
  it('renders without crashing', () => {
    const wrapper = shallow(<Writers store={store} />)
    expect(wrapper.exists()).toBe(true)
  })
})