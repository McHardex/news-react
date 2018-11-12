import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer'
import LandingPage from '../LandingPage'

describe('The landing Page Component', () => {
  it('renders without crashing', () => {
    shallow(<LandingPage />);
  });
});

describe('The display elements', () => {
  it('should not regress', () => {
    const tree = renderer.create(
       <LandingPage />
    )
    expect(tree.JSON).toMatchSnapshot()
  });
});