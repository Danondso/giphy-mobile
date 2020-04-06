import React from 'react';
import DefaultLabel from './defaultLabel';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer
      .create(<DefaultLabel />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });