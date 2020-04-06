import React from "react";
import { TextInput, StyleSheet } from 'react-native';

const SearchBar = ({ handleSearch }) => {
  return <TextInput style={styles.container} onChangeText={handleSearch}></TextInput>
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E6EBE0',
    width: 200,
    marginTop: 100,
    marginBottom: 25,
    borderRadius: 4,
    borderColor: '#000',
    borderWidth: 2
  },
});

export default SearchBar;