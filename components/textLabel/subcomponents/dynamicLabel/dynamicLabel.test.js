import React from 'react';
import DynamicLabel from './dynamicLabel';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer
      .create(<DynamicLabel label="Test Render"/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });