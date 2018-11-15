import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Login from '../Login'
import configureStore from 'redux-mock-store'


Enzyme.configure({ adapter: new Adapter()})

const initialState = {};
const mockStore = configureStore()
let store;


describe('the Login component', () => {
  beforeEach(() => {
    store = mockStore(initialState)
  })
  it('renders without crashing', () => {
    const wrapper = shallow(<Login store={store} />)
    expect(wrapper.exists()).toBe(true)
  })
})