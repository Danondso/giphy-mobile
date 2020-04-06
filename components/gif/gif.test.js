import React from 'react';
import Gif from './gif';
import renderer from 'react-test-renderer';

test('renders SearchInput correctly', () => {
    const tree = renderer
      .create(<Gif />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });