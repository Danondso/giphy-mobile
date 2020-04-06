import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView } from "react-native";
import GifList from "./components/gifList/gifList";
import SearchBar from "./components/searchBar/searchBar";

const API_KEY = "VOHEiY1w8OzCgaBdtKgPtcMWuqyJqQ4X";
//`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=&limit=25&offset=0&rating=G&lang=en`
export default function App() {
  const [gifs, setGifs] = useState([]);
  const [input, setInput] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (!input) {
      setInput("");
      setOffset(0);
      setGifs([]);
    }
  }, [input]);

  const fetchGifs = (input) => {
    setInput(input);
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${input}&limit=25&offset=${offset}&rating=G&lang=en`
    )
      .then((response) => response.json())
      .then((json) => {
        setGifs(json.data);
      });
  };

  const handleEndReached = () => {
    const newOffset = offset + 25;
    setOffset(newOffset);
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${input}&limit=25&offset=${newOffset}&rating=G&lang=en`
    )
      .then((response) => response.json())
      .then((json) => {
        setGifs(gifs.concat(json.data));
      });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SearchBar handleSearch={fetchGifs} />
      <GifList gifs={gifs} handleEndReached={handleEndReached} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9BC1BC",
    alignItems: "center",
    justifyContent: "center",
  },
});
