import React from 'react';
import SearchBar from './searchBar';
import renderer from 'react-test-renderer';

test('renders SearchInput correctly', () => {
    const tree = renderer
      .create(<SearchBar />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });