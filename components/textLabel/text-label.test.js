import React from 'react';
import TextLabel from './text-label';
import renderer from 'react-test-renderer';

test('renders Default TextLabel correctly', () => {
    const tree = renderer
      .create(<TextLabel />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders Dynamic TextLabel correctly', () => {
    const tree = renderer
      .create(<TextLabel label="Bonjour!"/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });