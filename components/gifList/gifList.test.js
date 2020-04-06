import React from 'react';
import GifList from './gifList';
import renderer from 'react-test-renderer';

test('renders SearchInput correctly', () => {
    const tree = renderer
      .create(<GifList />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });