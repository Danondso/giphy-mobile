import React, { PureComponent } from "react";
import { Image, View } from "react-native";
import { Card } from "react-native-elements";

export default class Gif extends PureComponent {
  render() {
    return (
      <Card>
        <View style={{ padding: 12 }}>
          <Image
            style={{ width: 250, height: 250 }}
            source={{ uri: this.props.url }}
          />
        </View>
      </Card>
    );
  }
}
