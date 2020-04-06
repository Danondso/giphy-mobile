import React, { PureComponent } from "react";
import { FlatList } from 'react-native';

import Gif from '../gif/gif';

export default class GifList extends PureComponent {
    render() {
        return (
            <FlatList
                style={{ flex: 1 }}
                data={this.props.gifs}
                renderItem={({ item }) => <Gif url={item.images.original.url} />}
                keyExtractor={item => item.id}
                onEndReached={this.props.handleEndReached} />
        )
    }
};