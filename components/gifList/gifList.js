import React, { PureComponent } from "react";
import { FlatList, View } from "react-native";

import Gif from "../gif/gif";

export default class GifList extends PureComponent {
  render() {
    return (
      <FlatList
        ListHeaderComponent={this.props.header}
        ListHeaderComponentStyle={{ alignItems: "center" }}
        data={this.props.gifs}
        renderItem={({ item }) => <Gif url={item.images.original.url} />}
        keyExtractor={(item) => item.id}
        onEndReached={this.props.handleEndReached}
      />
    );
  }
}
